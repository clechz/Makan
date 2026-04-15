import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const WindowGlass = ({ scrollProgress }) => {
  const glassRef = useRef();
  const { camera } = useThree();

  // Window scale matches the PNG animation (1x to 8x)
  const windowScale = useMemo(() => {
    if (scrollProgress <= 0.5) {
      return 1 + (scrollProgress / 0.5) * 7;
    }
    return 8;
  }, [scrollProgress]);

  // Fade out glass as camera goes through window
  const glassOpacity = useMemo(() => {
    // Start fading at 0.4, fully gone by 0.55 (as camera passes through)
    if (scrollProgress < 0.4) return 1;
    if (scrollProgress > 0.55) return 0;
    return 1 - (scrollProgress - 0.4) / 0.15;
  }, [scrollProgress]);

  // Glass material with realistic properties - much more transparent
  const glassMaterial = useMemo(() => {
    const material = new THREE.MeshPhysicalMaterial({
      color: '#ffffff',
      metalness: 0.0,
      roughness: 0.02, // Very smooth
      transmission: 0.98, // Almost fully transparent
      transparent: true,
      opacity: 1.0,
      thickness: 0.15, // Thinner glass
      envMapIntensity: 0.4,
      clearcoat: 0.5, // Reduced clearcoat
      clearcoatRoughness: 0.02,
      ior: 1.5, // Glass refraction
      reflectivity: 0.08, // Very subtle reflections
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    return material;
  }, []);

  // Position glass directly in front of camera, matching the PNG window position
  useFrame(() => {
    if (glassRef.current) {
      // Update glass opacity as camera passes through
      if (glassRef.current.material) {
        glassRef.current.material.opacity = glassOpacity * 0.95;
      }

      // Hide glass completely when opacity is 0
      glassRef.current.visible = glassOpacity > 0.01;

      if (glassRef.current.visible) {
        // Position glass very close to camera
        const glassPosition = new THREE.Vector3(0, 0, -2.5);
        glassPosition.applyQuaternion(camera.quaternion);
        glassPosition.add(camera.position);

        glassRef.current.position.copy(glassPosition);
        glassRef.current.quaternion.copy(camera.quaternion);

        // Scale to match the PNG window (calibrated to fit inside the frame)
        glassRef.current.scale.setScalar(windowScale * 0.85);
      }
    }
  });

  // Create convex glass dome geometry
  const glassGeometry = useMemo(() => {
    // Shallow sphere segment for convex glass
    const radius = 1.2;
    const segments = 128;
    const thetaLength = Math.PI * 0.25; // Shallow dome (25% of hemisphere)

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

  return (
    <group>
      {/* Convex glass dome positioned exactly over the PNG window */}
      <mesh ref={glassRef} renderOrder={1000} rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={glassGeometry} attach="geometry" />
        <primitive object={glassMaterial} attach="material" />
      </mesh>

      {/* Subtle rim lighting for glass edges */}
      <pointLight
        position={[0, 0, -2]}
        intensity={0.15}
        color="#88ccff"
        distance={5}
      />
    </group>
  );
};

export default WindowGlass;
