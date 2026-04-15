/**
 * MAKAN HERO SCENE
 *
 * Premium, cinematic, fully reversible scroll-driven hero experience
 * Following strict design principles:
 * - One dominant visual at a time
 * - Simple, elegant logo reveal
 * - Fully reversible with scroll
 * - Restrained and premium throughout
 */

import { useRef, useMemo, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// Import our centralized stage controller
import {
  getStage,
  getCameraState,
  getCameraDrift,
  getGalaxyRotationSpeed,
  getConvergenceStrength,
  getLogoOpacity,
  getLogoTextOpacity,
  getLogoParticleIntensity,
  getEarthOpacity,
  getEarthScale,
  getEarthRotation,
  getAtmosphereIntensity,
  getBloomIntensity,
  getBloomThreshold,
  getParticleSize,
  getParticleColorIntensity,
  ease,
  lerp,
} from '../utils/stageController';

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Convert lat/lon to 3D position on sphere
 */
const latLonToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
};

// ============================================================================
// GALAXY PARTICLES WITH PREMIUM SHADER TUNING
// ============================================================================

const GalaxyParticles = ({ scrollProgress }) => {
  const groupRef = useRef();
  const pointsRef = useRef();

  const { nodes } = useGLTF('/galaxy.glb');
  const starTexture = useLoader(THREE.TextureLoader, '/disc.png');

  // Particle formations
  const [galaxyPositions, setGalaxyPositions] = useState(null);
  const [logoPositions, setLogoPositions] = useState(null);
  const [colors, setColors] = useState(null);

  // Load positions
  useEffect(() => {
    if (!nodes.Object_2) return;

    nodes.Object_2.geometry.center();
    const positions = new Float32Array(
      nodes.Object_2.geometry.attributes.position.array.buffer
    );

    setGalaxyPositions(positions);

    // Premium galaxy colors - elegant, not overly bright
    const colorArray = new Float32Array(positions.length);
    const color = new THREE.Color();

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      const distanceToCenter = Math.sqrt(x * x + y * y + z * z) / 100;

      // Restrained color palette - soft blues and whites
      // Avoid neon, avoid harsh points
      const hue = 0.55 + Math.cos(distanceToCenter * 2) * 0.05; // Subtle blue variation
      const saturation = 0.25; // Low saturation for premium feel
      const lightness = 0.65 + Math.sin(distanceToCenter) * 0.15; // Gentle brightness variation

      color.setHSL(hue, saturation, lightness);
      color.toArray(colorArray, i);
    }

    setColors(colorArray);

    // Load logo formation
    import('../utils/svgToParticles.js').then(({ generateLogoParticles }) => {
      const particleCount = positions.length / 3;

      generateLogoParticles('/makan-logo.svg', particleCount)
        .then((logoPos) => {
          setLogoPositions(logoPos);
          console.log('✅ Logo particles loaded');
        })
        .catch((err) => {
          console.warn('⚠️ Logo load failed, using fallback', err);
          setLogoPositions(positions.slice());
        });
    });
  }, [nodes]);

  // Animation frame
  useFrame(({ clock }) => {
    if (!groupRef.current || !pointsRef.current || !galaxyPositions || !logoPositions) return;

    const time = clock.getElapsedTime();

    // Stage-based rotation (gradually slows)
    const rotationSpeed = getGalaxyRotationSpeed(scrollProgress);
    groupRef.current.rotation.z += rotationSpeed;

    // Morph between galaxy and logo
    const convergence = getConvergenceStrength(scrollProgress);
    const geometry = pointsRef.current.geometry;
    const positionAttribute = geometry.attributes.position;
    const positions = positionAttribute.array;

    // Smooth easing for convergence
    const easedConvergence = ease.inOutCubic(convergence);

    // Interpolate positions
    for (let i = 0; i < positions.length; i += 3) {
      const gx = galaxyPositions[i];
      const gy = galaxyPositions[i + 1];
      const gz = galaxyPositions[i + 2];

      const lx = logoPositions[i];
      const ly = logoPositions[i + 1];
      const lz = logoPositions[i + 2];

      // Add subtle noise during galaxy stage only
      const stage = getStage(scrollProgress);
      let noiseX = 0, noiseY = 0, noiseZ = 0;

      if (stage.name === 'GALAXY') {
        // Very subtle drift
        const noiseScale = 0.01;
        noiseX = Math.sin(time * 0.2 + i * 0.01) * noiseScale;
        noiseY = Math.cos(time * 0.15 + i * 0.02) * noiseScale;
        noiseZ = Math.sin(time * 0.1 + i * 0.03) * noiseScale * 0.5;
      }

      // Morph with easing
      positions[i] = gx * (1 - easedConvergence) + lx * easedConvergence + noiseX;
      positions[i + 1] = gy * (1 - easedConvergence) + ly * easedConvergence + noiseY;
      positions[i + 2] = gz * (1 - easedConvergence) + lz * easedConvergence + noiseZ;
    }

    positionAttribute.needsUpdate = true;

    // Update opacity (stage-based fade)
    const opacity = getLogoOpacity(scrollProgress);
    if (pointsRef.current.material) {
      pointsRef.current.material.opacity = opacity;

      // Reduce particle intensity during logo reveal for readability
      const intensity = getLogoParticleIntensity(scrollProgress);
      pointsRef.current.material.size = getParticleSize(scrollProgress);
    }
  });

  // Hide particles after Earth handoff
  const opacity = getLogoOpacity(scrollProgress);
  if (opacity < 0.01 || !galaxyPositions) return null;

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} scale={0.05}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={galaxyPositions.length / 3}
            array={galaxyPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors?.length / 3 || 0}
            array={colors || new Float32Array()}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          map={starTexture}
          transparent
          depthWrite={false}
          vertexColors
          opacity={1}
          size={0.008}
          sizeAttenuation={true}
          blending={THREE.AdditiveBlending}
          // Control additive blending strength
          blendDstAlpha={0.8}
        />
      </points>
    </group>
  );
};

// ============================================================================
// SIMPLE MAKAN TEXT OVERLAY (DOM-based for crisp readability)
// ============================================================================

const MakanText = ({ scrollProgress }) => {
  const textOpacity = getLogoTextOpacity(scrollProgress);

  if (textOpacity < 0.01) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        opacity: textOpacity,
        transition: 'opacity 0.3s ease-out',
      }}
    >
      <h1
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '4.5rem',
          fontWeight: '400',
          letterSpacing: '0.5em',
          color: '#ffffff',
          margin: 0,
          padding: 0,
          textAlign: 'center',
          textShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
          // Premium subtle glow
          filter: `drop-shadow(0 0 20px rgba(255, 255, 255, ${textOpacity * 0.4}))`,
        }}
      >
        MAKAN
      </h1>
    </div>
  );
};

// ============================================================================
// PREMIUM EARTH WITH CINEMATIC ATMOSPHERE
// ============================================================================

const Earth = ({ scrollProgress }) => {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const atmosphereRef = useRef();

  const [dayMap, cloudsMap, specularMap] = useTexture([
    '/8k_earth_daymap.jpeg',
    '/8k_earth_clouds.jpeg',
    '/8k_earth_specular_map.png',
  ]);

  // Set anisotropic filtering for premium quality
  useEffect(() => {
    const maxAnisotropy = 16;
    dayMap.anisotropy = maxAnisotropy;
    cloudsMap.anisotropy = maxAnisotropy;
    specularMap.anisotropy = maxAnisotropy;
  }, [dayMap, cloudsMap, specularMap]);

  // New York coordinates
  const NY_LAT = 40.7128;
  const NY_LON = -74.0060;
  const EARTH_RADIUS = 2;

  // Stage-based Earth visibility
  const earthOpacity = getEarthOpacity(scrollProgress);
  const earthScale = getEarthScale(scrollProgress);
  const rotationProgress = getEarthRotation(scrollProgress);
  const atmosphereOpacity = getAtmosphereIntensity(scrollProgress);

  // Rotate Earth to show NYC
  useFrame(() => {
    if (!earthRef.current) return;

    // Target rotation to show New York
    const targetRotationY = (NY_LON * Math.PI) / 180;
    const targetRotationX = 0;

    earthRef.current.rotation.y = targetRotationY * rotationProgress;
    earthRef.current.rotation.x = targetRotationX;

    // Very slow spin when fully visible
    if (rotationProgress > 0.9) {
      earthRef.current.rotation.y += 0.0001;
    }

    // Clouds rotate slightly faster for realism
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = earthRef.current.rotation.y + 0.02;
    }
  });

  if (earthOpacity < 0.01) return null;

  return (
    <group scale={earthScale}>
      {/* Main Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[EARTH_RADIUS, 128, 128]} />
        <meshStandardMaterial
          map={dayMap}
          roughness={0.9}
          metalness={0.1}
          transparent
          opacity={earthOpacity}
          // Premium physically-based rendering
          envMapIntensity={0.5}
        />
      </mesh>

      {/* Cloud layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[EARTH_RADIUS + 0.01, 128, 128]} />
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          opacity={earthOpacity * 0.4}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Subtle atmospheric glow */}
      <mesh ref={atmosphereRef} scale={1.08}>
        <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
        <meshBasicMaterial
          color="#a3d5ff"
          transparent
          opacity={atmosphereOpacity * earthOpacity}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Premium lighting setup */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={2.0} color="#ffffff" />
      <directionalLight position={[-2, -1, -3]} intensity={0.3} color="#4a7c9e" />
    </group>
  );
};

// ============================================================================
// DYNAMIC CAMERA CONTROLLER
// ============================================================================

const CameraController = ({ scrollProgress }) => {
  const { camera } = useThree();
  const targetRef = useRef(new THREE.Vector3(0, 0, 0));
  const positionRef = useRef(new THREE.Vector3(0, 0, 15));

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Get stage-based camera state
    const cameraState = getCameraState(scrollProgress);
    const drift = getCameraDrift(scrollProgress, time);

    // Smooth target position
    targetRef.current.set(
      cameraState.position[0] + drift.x,
      cameraState.position[1] + drift.y,
      cameraState.position[2]
    );

    // Smooth camera movement (no jarring jumps)
    positionRef.current.lerp(targetRef.current, 0.05);

    camera.position.copy(positionRef.current);
    camera.lookAt(cameraState.target[0], cameraState.target[1], cameraState.target[2]);

    // Smooth FOV transitions
    const targetFOV = cameraState.fov;
    camera.fov += (targetFOV - camera.fov) * 0.05;
    camera.updateProjectionMatrix();
  });

  return null;
};

// ============================================================================
// PREMIUM POST-PROCESSING
// ============================================================================

const Effects = ({ scrollProgress }) => {
  const composerRef = useRef();
  const { gl, scene, camera, size } = useThree();
  const [bloomPass, setBloomPass] = useState(null);

  useEffect(() => {
    // Create composer
    const composer = new EffectComposer(gl);
    composer.setSize(size.width, size.height);

    // Render pass
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // Bloom pass - subtle and premium
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(size.width * 0.5, size.height * 0.5),
      0.25, // intensity (will be controlled by stage)
      1.2, // radius
      0.15 // threshold
    );
    composer.addPass(bloom);
    setBloomPass(bloom);

    // Output pass
    const outputPass = new OutputPass();
    composer.addPass(outputPass);

    composerRef.current = composer;

    return () => {
      composer.dispose();
    };
  }, [gl, scene, camera, size]);

  // Update bloom based on stage
  useFrame(() => {
    if (!composerRef.current || !bloomPass) return;

    // Stage-based bloom control
    const bloomIntensity = getBloomIntensity(scrollProgress);
    const bloomThreshold = getBloomThreshold(scrollProgress);

    bloomPass.strength = bloomIntensity;
    bloomPass.threshold = bloomThreshold;

    // Render
    gl.autoClear = false;
    gl.clear();
    composerRef.current.render();
  }, 1);

  return null;
};

// ============================================================================
// MAIN SCENE COMPOSITION
// ============================================================================

const MakanHeroScene = ({ scrollProgress = 0 }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Canvas
        camera={{
          position: [0, 0, 15],
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#000000',
          pointerEvents: 'none',
        }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.5, // Slightly reduced for premium restrained look
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Galaxy to Logo particles */}
          <GalaxyParticles scrollProgress={scrollProgress} />

          {/* Earth reveal */}
          <Earth scrollProgress={scrollProgress} />

          {/* Camera control */}
          <CameraController scrollProgress={scrollProgress} />

          {/* Post-processing */}
          <Effects scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>

      {/* DOM-based MAKAN text for crisp readability */}
      <MakanText scrollProgress={scrollProgress} />
    </div>
  );
};

export default MakanHeroScene;
