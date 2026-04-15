import { useRef, useMemo, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import WindowGlassIntegrated from './WindowGlassIntegrated';

// ========================================
// UTILITY: Convert lat/lon to 3D position on sphere
// ========================================
const latLonToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
};

// ========================================
// STAGE 1: STARS BACKGROUND WITH LOGO MORPH
// ========================================
const Stars = ({ scrollProgress }) => {
  const starsRef = useRef();
  const pointsRef = useRef();
  const { nodes } = useGLTF('/galaxy.glb');
  const starTexture = useLoader(THREE.TextureLoader, '/disc.png');

  // Store particle formations
  const [galaxyPositions, setGalaxyPositions] = useState(null);
  const [logoPositions, setLogoPositions] = useState(null);
  const [colors, setColors] = useState(null);

  // Load and prepare positions
  useEffect(() => {
    if (!nodes.Object_2) return;

    nodes.Object_2.geometry.center();
    const positions = new Float32Array(
      nodes.Object_2.geometry.attributes.position.array.buffer
    );

    // Store galaxy positions
    setGalaxyPositions(positions);

    // Generate colors - subtle, not overly bright
    const colorArray = new Float32Array(positions.length);
    const color = new THREE.Color();
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      const distanceToCenter = Math.sqrt(x * x + y * y + z * z) / 100;

      // Softer colors - less luminous
      color.setRGB(
        0.6 + Math.cos(distanceToCenter) * 0.15,
        0.65 + Math.cos(distanceToCenter) * 0.1,
        0.8
      );
      color.toArray(colorArray, i);
    }
    setColors(colorArray);

    // Load logo formation only
    import('../utils/svgToParticles.js').then(({ generateLogoParticles }) => {
      const particleCount = positions.length / 3;

      generateLogoParticles('/makan-logo.svg', particleCount)
        .then((logoPos) => {
          setLogoPositions(logoPos);
        })
        .catch((err) => {
          console.warn('Failed to load logo', err);
          setLogoPositions(positions.slice());
        });
    });
  }, [nodes]);

  // Calculate morph progress - REFINED CINEMATIC TIMELINE
  const { currentStage, morphProgress, starsOpacity, rotationFactor } = useMemo(() => {
    let currentStage = 'galaxy';
    let morphProgress = 0;
    let starsOpacity = 1;
    let rotationFactor = 1;

    // REFINED TIMELINE:
    // ACT 1 — Galaxy (0.00–0.25)
    // ACT 2 — Convergence (0.25–0.45)
    // ACT 3 — Logo Reveal (0.45–0.60)
    // ACT 4 — Transition (0.60–0.75)
    // ACT 5 — Earth (0.75+)

    if (scrollProgress < 0.25) {
      // ACT 1: Galaxy drifting - slow rotation
      currentStage = 'galaxy';
      morphProgress = 0;
      starsOpacity = 1;
      rotationFactor = 1.0;
    } else if (scrollProgress < 0.45) {
      // ACT 2: Convergence - spiral tightens, particles move toward center
      currentStage = 'convergence';
      const progress = (scrollProgress - 0.25) / 0.20;
      morphProgress = progress * 0.3; // Partial convergence (0 → 0.3)
      starsOpacity = 1;
      rotationFactor = 1.0 - progress * 0.5; // Slow down rotation
    } else if (scrollProgress < 0.60) {
      // ACT 3: Logo reveal - particles form logo shape
      currentStage = 'logoReveal';
      const progress = (scrollProgress - 0.45) / 0.15;
      morphProgress = 0.3 + progress * 0.7; // Complete formation (0.3 → 1.0)
      starsOpacity = 1;
      rotationFactor = 0.5 - progress * 0.3; // Slow to near stillness
    } else if (scrollProgress < 0.75) {
      // ACT 4: Transition - logo dissolves as Earth appears
      currentStage = 'transition';
      const progress = (scrollProgress - 0.60) / 0.15;
      morphProgress = 1;
      starsOpacity = 1 - progress; // Fade particles out
      rotationFactor = 0.2;
    } else {
      // ACT 5: Earth takes over
      currentStage = 'earth';
      morphProgress = 1;
      starsOpacity = 0;
      rotationFactor = 0.2;
    }

    return { currentStage, morphProgress, starsOpacity, rotationFactor };
  }, [scrollProgress]);

  // Update particle positions - clean galaxy to logo transition
  useFrame(({ clock }) => {
    if (!starsRef.current || !pointsRef.current || !galaxyPositions || !logoPositions) return;

    const time = clock.getElapsedTime();

    // Rotate group (slowed during convergence/formation)
    starsRef.current.rotation.z = time / 30 * rotationFactor;

    // Update particle positions
    const geometry = pointsRef.current.geometry;
    const positionAttribute = geometry.attributes.position;
    const positions = positionAttribute.array;

    // Simple interpolation: galaxy → logo
    const easedProgress = morphProgress;

    for (let i = 0; i < positions.length; i += 3) {
      const galaxyX = galaxyPositions[i];
      const galaxyY = galaxyPositions[i + 1];
      const galaxyZ = galaxyPositions[i + 2];

      const logoX = logoPositions[i];
      const logoY = logoPositions[i + 1];
      const logoZ = logoPositions[i + 2];

      // Pure linear interpolation
      const x = galaxyX * (1 - easedProgress) + logoX * easedProgress;
      const y = galaxyY * (1 - easedProgress) + logoY * easedProgress;
      const z = galaxyZ * (1 - easedProgress) + logoZ * easedProgress;

      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;
    }

    positionAttribute.needsUpdate = true;

    // Update material opacity
    if (pointsRef.current.material) {
      pointsRef.current.material.opacity = starsOpacity;
    }
  });

  if (scrollProgress > 0.90 || !galaxyPositions) return null;

  return (
    <group ref={starsRef}>
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
        />
      </points>
    </group>
  );
};

// ========================================
// STAGE 2: EARTH GLOBE (Targeting New York)
// ========================================
const Earth = ({ scrollProgress }) => {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const atmosphereRef = useRef();

  const [dayMap, cloudsMap, specularMap] = useTexture([
    '/8k_earth_daymap.jpeg',
    '/8k_earth_clouds.jpeg',
    '/8k_earth_specular_map.png'
  ]);

  // New York coordinates
  const NY_LAT = 40.7128;
  const NY_LON = -74.0060;
  const EARTH_RADIUS = 2;

  // Earth appears early (0.15+), holds, then fades during terrain transition
  const earthOpacity = useMemo(() => {
    if (scrollProgress < 0.15) return 0;
    if (scrollProgress < 0.25) return (scrollProgress - 0.15) / 0.10;
    if (scrollProgress < 0.65) return 1;
    if (scrollProgress < 0.73) return 1 - (scrollProgress - 0.65) / 0.08;
    return 0;
  }, [scrollProgress]);

  // Atmospheric fade during zoom - softer and more subtle
  const atmosphereOpacity = useMemo(() => {
    if (scrollProgress < 0.15) return 0;
    if (scrollProgress < 0.25) return (scrollProgress - 0.15) / 0.10 * 0.15; // Reduced from 0.3 to 0.15
    if (scrollProgress < 0.55) return 0.15; // Softer atmosphere
    return 0.15 * (1 - (scrollProgress - 0.55) / 0.10);
  }, [scrollProgress]);

  // Earth rotation to show New York
  const earthRotation = useMemo(() => {
    if (scrollProgress < 0.25) return [0, 0, 0];

    // Rotate to show NY (East Coast facing camera)
    const t = Math.min((scrollProgress - 0.25) / 0.30, 1); // 0.25-0.55
    return [
      THREE.MathUtils.lerp(0, -0.35, t), // Tilt to show latitude
      THREE.MathUtils.lerp(0, 1.3, t),   // Rotate to show longitude (NY on East Coast)
      0
    ];
  }, [scrollProgress]);

  useFrame(({ clock, camera }) => {
    // Camera movement: approach Earth, then zoom toward NY
    if (scrollProgress < 0.15) {
      // Initial distance
      camera.position.set(0, 0, 15);
      camera.lookAt(0, 0, 0);
    } else if (scrollProgress < 0.30) {
      // Approach Earth
      const t = (scrollProgress - 0.15) / 0.15;
      const z = THREE.MathUtils.lerp(15, 5, t);
      camera.position.set(0, 0, z);
      camera.lookAt(0, 0, 0);
    } else if (scrollProgress < 0.70) {
      // Zoom toward New York coordinates
      const t = (scrollProgress - 0.30) / 0.40; // 0.30-0.70
      const nyPosition = latLonToVector3(NY_LAT, NY_LON, EARTH_RADIUS);

      // Camera moves from orbit toward NY surface
      const startPos = new THREE.Vector3(0, 0, 5);
      const endPos = nyPosition.clone().multiplyScalar(1.15); // Just above surface

      camera.position.lerpVectors(startPos, endPos, Math.pow(t, 1.5)); // Slow easing
      camera.lookAt(0, 0, 0);
    }

    if (earthRef.current) {
      earthRef.current.rotation.set(...earthRotation);
      earthRef.current.rotation.y += clock.getElapsedTime() / 100; // Very slow spin
      earthRef.current.material.opacity = earthOpacity;
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.set(...earthRotation);
      cloudsRef.current.rotation.y += clock.getElapsedTime() / 80;
      cloudsRef.current.material.opacity = earthOpacity * 0.5;
    }

    if (atmosphereRef.current) {
      atmosphereRef.current.material.opacity = atmosphereOpacity;
    }
  });

  if (scrollProgress < 0.10 || scrollProgress > 0.75) return null;

  return (
    <group>
      {/* Brighter ambient light for better illumination */}
      <ambientLight intensity={0.8} />

      {/* Main sun light - stronger and more natural */}
      <directionalLight position={[5, 3, 5]} intensity={2.5} color="#ffffff" />

      {/* Rim light for Earth edge definition */}
      <directionalLight position={[-3, 1, -2]} intensity={0.5} color="#4488ff" />

      {/* Earth sphere with better material */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[EARTH_RADIUS, 128, 128]} />
        <meshStandardMaterial
          map={dayMap}
          normalMap={specularMap}
          transparent
          opacity={earthOpacity}
          roughness={0.5}
          metalness={0.2}
          emissive="#111111"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Cloud layer with softer appearance */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[EARTH_RADIUS + 0.02, 128, 128]} />
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          opacity={earthOpacity * 0.4}
          depthWrite={false}
        />
      </mesh>

      {/* Single atmospheric glow - cleaner look */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[EARTH_RADIUS + 0.18, 64, 64]} />
        <meshBasicMaterial
          color="#a3d5ff"
          transparent
          opacity={atmosphereOpacity}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

// ========================================
// STAGE 3-4: NEW YORK TERRAIN
// ========================================
const NYTerrain = ({ scrollProgress }) => {
  const terrainRef = useRef();
  const groupRef = useRef();

  // Terrain appears 0.55-0.70, holds 0.70+
  const terrainOpacity = useMemo(() => {
    if (scrollProgress < 0.55) return 0;
    if (scrollProgress < 0.70) return (scrollProgress - 0.55) / 0.15;
    return 1;
  }, [scrollProgress]);

  // Terrain scale (grows as camera approaches)
  const terrainScale = useMemo(() => {
    if (scrollProgress < 0.60) return 0.3;
    if (scrollProgress < 0.75) return THREE.MathUtils.lerp(0.3, 1.5, (scrollProgress - 0.60) / 0.15);
    return 1.5;
  }, [scrollProgress]);

  // Camera orbit after terrain appears
  const orbitAngle = useMemo(() => {
    if (scrollProgress < 0.75) return 0;
    return (scrollProgress - 0.75) * Math.PI * 0.2; // Subtle orbit
  }, [scrollProgress]);

  useFrame(({ camera, clock }) => {
    if (terrainRef.current) {
      terrainRef.current.material.opacity = terrainOpacity;
    }

    if (groupRef.current) {
      groupRef.current.scale.setScalar(terrainScale);
    }

    // Camera movement during terrain stage
    if (scrollProgress >= 0.70) {
      const baseZ = 3.5;
      const pushForward = Math.min((scrollProgress - 0.75) / 0.15, 1) * 1; // Slow push
      const orbitX = Math.sin(orbitAngle) * 0.3;
      const driftY = Math.sin(clock.getElapsedTime() * 0.1) * 0.05; // Subtle drift

      camera.position.set(orbitX, driftY, baseZ - pushForward);
      camera.lookAt(0, 0, 0);
    }
  });

  if (scrollProgress < 0.50) return null;

  return (
    <group ref={groupRef}>
      {/* Terrain plane with displacement-ready structure */}
      <mesh
        ref={terrainRef}
        position={[0, -0.3, 0]}
        rotation={[-Math.PI / 2.2, 0, 0]}
      >
        <planeGeometry args={[6, 6, 256, 256]} />
        <meshStandardMaterial
          color="#1a2a3a"
          transparent
          opacity={terrainOpacity}
          roughness={0.95}
          metalness={0.05}
          wireframe={false}
        />
      </mesh>

      {/* Subtle grid lines for depth */}
      <mesh position={[0, -0.29, 0]} rotation={[-Math.PI / 2.2, 0, 0]}>
        <planeGeometry args={[6, 6, 32, 32]} />
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={terrainOpacity * 0.03}
          wireframe={true}
        />
      </mesh>
    </group>
  );
};

// ========================================
// POST-PROCESSING
// ========================================
const Effects = () => {
  const { scene, camera, gl } = useThree();
  const composerRef = useRef();

  useEffect(() => {
    gl.autoClear = false;

    // Enable texture anisotropic filtering for better quality
    const maxAnisotropy = gl.capabilities.getMaxAnisotropy();
    scene.traverse((object) => {
      if (object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => {
          if (material.map) material.map.anisotropy = maxAnisotropy;
          if (material.normalMap) material.normalMap.anisotropy = maxAnisotropy;
          if (material.roughnessMap) material.roughnessMap.anisotropy = maxAnisotropy;
        });
      }
    });

    const composer = new EffectComposer(gl);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth * 0.5, window.innerHeight * 0.5),
      0.25,  // Subtle bloom intensity
      1.2,   // Bloom radius
      0.15   // Threshold
    );
    composer.addPass(bloomPass);

    const outputPass = new OutputPass();
    composer.addPass(outputPass);

    composerRef.current = composer;

    const handleResize = () => {
      composer.setSize(window.innerWidth, window.innerHeight);
      bloomPass.resolution.set(window.innerWidth * 0.5, window.innerHeight * 0.5);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      bloomPass.dispose();
      outputPass.dispose();
    };
  }, [scene, camera, gl]);

  useFrame(() => {
    if (composerRef.current) {
      composerRef.current.render();
    }
  }, 1);

  return null;
};

// ========================================
// MAIN SCENE
// ========================================
const SpaceScene = ({ scrollProgress = 0 }) => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 15],
        fov: 60,
        near: 0.1,
        far: 1000
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
        toneMappingExposure: 0.6,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 2]} // Use device pixel ratio (1x to 2x max for performance)
    >
      <Suspense fallback={null}>
        {/* Background scene elements */}
        <Stars scrollProgress={scrollProgress} />
        <Earth scrollProgress={scrollProgress} />
        <NYTerrain scrollProgress={scrollProgress} />
      </Suspense>

      {/* Glass removed */}

      <Effects />
    </Canvas>
  );
};

export default SpaceScene;
