import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

/**
 * WINDOW GLASS INTEGRATED WITH PNG FRAME
 *
 * Strategy:
 * - PNG frame scales via GSAP DOM animation (1x to 8x)
 * - 3D glass must match that exact scale and position
 * - Glass positioned in screen space to align with PNG aperture
 * - Simulates glass sitting "inside" the PNG frame opening
 */

const WindowGlassIntegrated = ({ scrollProgress }) => {
  const outerGlassRef = useRef();
  const innerGlassRef = useRef();
  const groupRef = useRef();
  const { scene, gl, camera, size } = useThree();

  // Calculate window scale matching Hero.jsx GSAP animation
  const windowScale = useMemo(() => {
    if (scrollProgress <= 0.5) {
      return 1 + (scrollProgress / 0.5) * 7; // 1x to 8x over first 50% of scroll
    }
    return 8;
  }, [scrollProgress]);

  // Calculate glass visibility - visible throughout most of the scroll
  const glassOpacity = useMemo(() => {
    // Glass visible from start until camera passes through
    if (scrollProgress < 0.55) return 1.0;
    if (scrollProgress > 0.70) return 0;
    return 1.0 - (scrollProgress - 0.55) / 0.15;
  }, [scrollProgress]);

  // Load HDR environment for realistic reflections
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
        // Fallback: create simple dark environment
        const pmremGenerator = new THREE.PMREMGenerator(gl);
        const envScene = new THREE.Scene();
        envScene.background = new THREE.Color(0x0a0a0a);
        const envTexture = pmremGenerator.fromScene(envScene).texture;
        scene.environment = envTexture;
        pmremGenerator.dispose();
      }
    );
  }, [scene, gl]);

  // Convex glass dome geometry - shallow curvature
  const glassGeometry = useMemo(() => {
    const radius = 3.5;
    const segments = 64;
    const thetaLength = Math.PI * 0.20; // Very shallow dome - 20% of hemisphere

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

  // Outer glass pane - primary visible surface - HIGHLY VISIBLE FOR TESTING
  const outerGlassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: '#d0e8ff', // Blue tint to make it VERY visible
      metalness: 0.0,
      roughness: 0.08,
      transmission: 0.65, // Much less transparent - VERY visible
      transparent: true,
      opacity: 1.0,
      thickness: 0.5,
      envMapIntensity: 2.0, // Very strong reflections
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      ior: 1.52,
      reflectivity: 0.7, // High reflectivity
      side: THREE.FrontSide,
      depthWrite: false,
    });
  }, []);

  // Inner glass pane - creates optical depth - HIGHLY VISIBLE
  const innerGlassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: '#b8d8ff',
      metalness: 0.0,
      roughness: 0.1,
      transmission: 0.70,
      transparent: true,
      opacity: 1.0,
      thickness: 0.4,
      envMapIntensity: 1.5,
      clearcoat: 0.9,
      clearcoatRoughness: 0.06,
      ior: 1.52,
      reflectivity: 0.6,
      side: THREE.FrontSide,
      depthWrite: false,
    });
  }, []);

  // Position glass to align with PNG frame in screen space
  useFrame(() => {
    if (groupRef.current) {
      // Calculate position in screen space that aligns with PNG center
      // PNG is at screen center, so glass must be positioned at center of viewport

      // Position glass VERY close to camera - right in front like PNG frame
      const glassDistance = 0.5; // VERY close to camera - almost like a HUD
      const glassPosition = new THREE.Vector3(0, 0, -glassDistance);

      // Transform to world space based on camera
      glassPosition.applyQuaternion(camera.quaternion);
      glassPosition.add(camera.position);

      groupRef.current.position.copy(glassPosition);
      groupRef.current.quaternion.copy(camera.quaternion);

      // Scale glass to match PNG window scale
      // Base scale * window scale * calibration factor to align with PNG aperture
      const baseScale = 0.08; // Smaller since it's much closer to camera
      groupRef.current.scale.setScalar(baseScale * windowScale);

      // Update glass opacity
      const currentOpacity = glassOpacity;

      if (outerGlassRef.current) {
        outerGlassRef.current.material.opacity = currentOpacity;
        outerGlassRef.current.visible = currentOpacity > 0.01;
      }

      if (innerGlassRef.current) {
        innerGlassRef.current.material.opacity = currentOpacity * 0.95;
        innerGlassRef.current.visible = currentOpacity > 0.01;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer glass pane */}
      <mesh
        ref={outerGlassRef}
        geometry={glassGeometry}
        material={outerGlassMaterial}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        renderOrder={100}
      />

      {/* Inner glass pane - offset for optical depth */}
      <mesh
        ref={innerGlassRef}
        geometry={glassGeometry}
        material={innerGlassMaterial}
        position={[0, 0, -0.04]}
        rotation={[-Math.PI / 2, 0, 0]}
        renderOrder={99}
      />

      {/* Edge rim lighting - emphasizes glass curvature */}
      <pointLight
        position={[0, 0, 0.3]}
        intensity={1.5}
        color="#ffffff"
        distance={6}
        decay={2}
      />

      {/* Secondary rim light for edge definition */}
      <pointLight
        position={[0, 0, -0.2]}
        intensity={1.0}
        color="#88ccff"
        distance={5}
        decay={2}
      />

      {/* Additional visibility light */}
      <ambientLight intensity={0.3} />
    </group>
  );
};

export default WindowGlassIntegrated;
