import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

const WindowGlassFixed = ({ scrollProgress }) => {
  const outerGlassRef = useRef();
  const innerGlassRef = useRef();
  const groupRef = useRef();
  const { scene, gl } = useThree();

  // Load HDR environment for reflections
  useEffect(() => {
    const loader = new RGBELoader();
    loader.load(
      '/environment.hdr',
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      },
      undefined,
      () => {
        console.warn('HDR not found, using fallback');
        // Simple fallback environment
        const pmremGenerator = new THREE.PMREMGenerator(gl);
        const envScene = new THREE.Scene();
        envScene.background = new THREE.Color(0x000000);
        const envTexture = pmremGenerator.fromScene(envScene).texture;
        scene.environment = envTexture;
      }
    );
  }, [scene, gl]);

  // Create convex glass dome geometry
  const glassGeometry = useMemo(() => {
    const radius = 2.2;
    const segments = 64; // Reduced from 128
    const thetaLength = Math.PI * 0.28; // Shallow convex dome

    return new THREE.SphereGeometry(
      radius,
      segments,
      segments,
      0,
      Math.PI * 2,
      0,
      thetaLength
    );
  }, []);

  // Outer glass pane material
  const outerGlassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: '#ffffff',
      metalness: 0.0,
      roughness: 0.03,
      transmission: 0.92, // More visible than 0.98
      transparent: true,
      opacity: 1.0,
      thickness: 0.25,
      envMapIntensity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      ior: 1.45,
      reflectivity: 0.35, // Increased for visible reflections
      side: THREE.FrontSide,
    });
  }, []);

  // Inner glass pane material (slightly different for optical depth)
  const innerGlassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: '#ffffff',
      metalness: 0.0,
      roughness: 0.04,
      transmission: 0.93,
      transparent: true,
      opacity: 1.0,
      thickness: 0.2,
      envMapIntensity: 0.8,
      clearcoat: 0.8,
      clearcoatRoughness: 0.04,
      ior: 1.45,
      reflectivity: 0.3,
      side: THREE.FrontSide,
    });
  }, []);

  // Position glass as a FIXED object in world space, not following camera
  useFrame(({ camera }) => {
    if (groupRef.current) {
      // Glass is positioned at world origin (0, 0, 0) as a fixed spacecraft window
      // Camera moves TOWARD and THROUGH it, not the other way around

      // Calculate distance from camera to window
      const distanceToWindow = camera.position.length();

      // Fade out glass as camera passes through (based on camera position, not scroll)
      let opacity = 1.0;

      // When camera is very close (distance < 3), start fading
      if (distanceToWindow < 3) {
        opacity = distanceToWindow / 3;
      }

      // Update materials
      if (outerGlassRef.current) {
        outerGlassRef.current.material.opacity = opacity;
        outerGlassRef.current.visible = opacity > 0.01;
      }

      if (innerGlassRef.current) {
        innerGlassRef.current.material.opacity = opacity;
        innerGlassRef.current.visible = opacity > 0.01;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Outer glass pane */}
      <mesh
        ref={outerGlassRef}
        geometry={glassGeometry}
        material={outerGlassMaterial}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      {/* Inner glass pane (slightly offset for optical depth) */}
      <mesh
        ref={innerGlassRef}
        geometry={glassGeometry}
        material={innerGlassMaterial}
        position={[0, 0, -0.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      {/* Subtle rim lighting on glass edges */}
      <pointLight
        position={[0, 0, 0.5]}
        intensity={0.3}
        color="#88ccff"
        distance={5}
        decay={2}
      />
    </group>
  );
};

export default WindowGlassFixed;
