import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

const SpacecraftWindow = ({ scrollProgress }) => {
  const glassRef = useRef();
  const outerFrameRef = useRef();
  const innerRingRef = useRef();
  const groupRef = useRef();
  const { scene, gl } = useThree();

  // Window should be visible throughout but scale with scroll like the PNG did
  const windowScale = useMemo(() => {
    if (scrollProgress <= 0.5) {
      return 1 + (scrollProgress / 0.5) * 7;
    }
    return 8;
  }, [scrollProgress]);

  // Load normal map for subtle glass imperfections (with fallback)
  const [normalMap, setNormalMap] = React.useState(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      '/glass-normal.png',
      (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
        texture.anisotropy = gl.capabilities.getMaxAnisotropy();
        setNormalMap(texture);
      },
      undefined,
      (error) => {
        console.warn('Glass normal map not found, using procedural noise');
        // Create procedural normal map as fallback
        const size = 512;
        const data = new Uint8Array(size * size * 4);
        for (let i = 0; i < size * size; i++) {
          const idx = i * 4;
          data[idx] = 127 + Math.random() * 10 - 5;     // R
          data[idx + 1] = 127 + Math.random() * 10 - 5; // G
          data[idx + 2] = 255;                            // B (up)
          data[idx + 3] = 255;                            // A
        }
        const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.needsUpdate = true;
        setNormalMap(texture);
      }
    );
  }, [gl]);

  // Load HDR environment map for realistic reflections
  useEffect(() => {
    const loader = new RGBELoader();
    loader.load(
      '/environment.hdr',
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      },
      undefined,
      (error) => {
        console.warn('HDR environment not found, using fallback');
        // Fallback: create simple cube environment
        const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
        const cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget);
        scene.environment = cubeRenderTarget.texture;
      }
    );
  }, [scene]);

  // ========================================
  // GEOMETRY DEFINITIONS
  // ========================================

  // Convex glass dome - shallow spherical segment
  const glassGeometry = useMemo(() => {
    // Create a shallow dome using SphereGeometry
    // Parameters: radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength
    const radius = 3;
    const segments = 128;
    const thetaLength = Math.PI * 0.35; // Shallow dome (35% of hemisphere)

    const geometry = new THREE.SphereGeometry(
      radius,
      segments,
      segments,
      0, // phiStart
      Math.PI * 2, // phiLength (full circle)
      0, // thetaStart
      thetaLength // thetaLength (shallow dome)
    );

    return geometry;
  }, []);

  // Outer metal frame - torus for circular frame (MADE MUCH LARGER for testing)
  const outerFrameGeometry = useMemo(() => {
    return new THREE.TorusGeometry(
      3.2, // radius (increased)
      0.4, // tube thickness (increased significantly for visibility)
      32, // radial segments
      64 // tubular segments
    );
  }, []);

  // Inner ring - smaller torus
  const innerRingGeometry = useMemo(() => {
    return new THREE.TorusGeometry(
      2.5, // radius
      0.12, // tube thickness (increased for visibility)
      24, // radial segments
      64 // tubular segments
    );
  }, []);

  // ========================================
  // GLASS MATERIAL (MeshPhysicalMaterial)
  // ========================================
  const glassMaterial = useMemo(() => {
    const material = new THREE.MeshPhysicalMaterial({
      color: '#e8f4f8',
      metalness: 0.0,
      roughness: 0.08, // Very smooth glass
      transmission: 0.85, // High transparency (reduced from 0.95 for more visibility)
      transparent: true,
      opacity: 0.9,
      thickness: 0.5, // Glass thickness for refraction
      envMapIntensity: 1.2,
      clearcoat: 1.0, // Extra glossy layer
      clearcoatRoughness: 0.08,
      ior: 1.5, // Index of refraction (glass)
      reflectivity: 0.3,
      side: THREE.FrontSide, // Only render front side for performance
    });

    if (normalMap) {
      material.normalMap = normalMap;
      material.normalScale = new THREE.Vector2(0.15, 0.15); // Subtle imperfections
      material.needsUpdate = true;
    }

    return material;
  }, [normalMap]);

  // ========================================
  // FRAME MATERIALS (PBR) - Made brighter for visibility
  // ========================================
  const outerFrameMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: '#3a3a3a', // Brighter color
      metalness: 0.7,
      roughness: 0.3,
      envMapIntensity: 0.8,
      emissive: '#111111', // Add slight glow
      emissiveIntensity: 0.2,
    });
  }, []);

  const innerRingMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: '#4a4a4a', // Brighter color
      metalness: 0.8,
      roughness: 0.2,
      envMapIntensity: 0.8,
      emissive: '#181818', // Add slight glow
      emissiveIntensity: 0.3,
    });
  }, []);

  // Animate and position window
  useFrame(({ camera }) => {
    if (groupRef.current) {
      // Position window directly in front of camera at close distance
      const windowPosition = new THREE.Vector3(0, 0, -3); // Much closer to camera
      windowPosition.applyQuaternion(camera.quaternion);
      windowPosition.add(camera.position);

      groupRef.current.position.copy(windowPosition);
      groupRef.current.quaternion.copy(camera.quaternion);
      groupRef.current.scale.setScalar(windowScale * 0.05); // Smaller scale since closer to camera
    }

    // Subtle glass animation - very slight distortion over time
    if (glassRef.current && glassRef.current.material.normalScale) {
      glassRef.current.material.normalScale.set(
        0.15 + Math.sin(Date.now() * 0.0003) * 0.02,
        0.15 + Math.cos(Date.now() * 0.0003) * 0.02
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lighting for window */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[0, 0, 2]} intensity={0.5} color="#ffffff" distance={10} />

      {/* Outer metal frame */}
      <mesh
        ref={outerFrameRef}
        geometry={outerFrameGeometry}
        material={outerFrameMaterial}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        renderOrder={1000}
      >
        <meshStandardMaterial
          attach="material"
          color="#3a3a3a"
          metalness={0.7}
          roughness={0.3}
          depthTest={false}
          emissive="#111111"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Inner ring */}
      <mesh
        ref={innerRingRef}
        geometry={innerRingGeometry}
        material={innerRingMaterial}
        position={[0, 0, 0.1]}
        rotation={[0, 0, 0]}
        renderOrder={1001}
      >
        <meshStandardMaterial
          attach="material"
          color="#4a4a4a"
          metalness={0.8}
          roughness={0.2}
          depthTest={false}
          emissive="#181818"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Convex glass dome */}
      <mesh
        ref={glassRef}
        geometry={glassGeometry}
        position={[0, 0, -0.5]}
        rotation={[Math.PI / 2, 0, 0]}
        renderOrder={999}
      >
        <meshPhysicalMaterial
          attach="material"
          color="#e8f4f8"
          metalness={0.0}
          roughness={0.08}
          transmission={0.85}
          transparent={true}
          opacity={0.9}
          thickness={0.5}
          envMapIntensity={1.2}
          clearcoat={1.0}
          clearcoatRoughness={0.08}
          ior={1.5}
          reflectivity={0.3}
          side={THREE.FrontSide}
          depthWrite={false}
        />
      </mesh>

      {/* Subtle rim lighting */}
      <pointLight
        position={[0, 0, 0.5]}
        intensity={0.4}
        color="#88ccff"
        distance={8}
        decay={2}
      />
    </group>
  );
};

export default SpacecraftWindow;
