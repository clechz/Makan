/**
 * CLEAN MAKAN HERO SCENE
 *
 * Staged cinematic narrative:
 * White intro → Dimming → Galaxy → Makan → Query the World → Earth → NYC
 *
 * One dominant visual idea at a time.
 */

import { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import {
  getBackgroundColor,
  getGalaxyOpacity,
  getGalaxyRotationSpeed,
  getMakanTextOpacity,
  getQueryTextOpacity,
  getTextScale,
  getEarthOpacity,
  getEarthScale,
  getAtmosphereIntensity,
  getBloomIntensity,
  getBloomThreshold,
  getCameraState,
} from '../utils/heroStages';

// ============================================================================
// UTILITIES
// ============================================================================

const latLonToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
};

// ============================================================================
// SIMPLE GALAXY - NO MORPHING
// ============================================================================

const SimpleGalaxy = ({ scrollProgress }) => {
  const groupRef = useRef();
  const pointsRef = useRef();

  const { nodes } = useGLTF('/galaxy.glb');
  const starTexture = useLoader(THREE.TextureLoader, '/disc.png');

  const [galaxyPositions, setGalaxyPositions] = useState(null);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    if (!nodes.Object_2) return;

    nodes.Object_2.geometry.center();
    const positions = new Float32Array(
      nodes.Object_2.geometry.attributes.position.array.buffer
    );

    setGalaxyPositions(positions);

    // Premium subtle colors
    const colorArray = new Float32Array(positions.length);
    const color = new THREE.Color();

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      const distanceToCenter = Math.sqrt(x * x + y * y + z * z) / 100;

      // Soft blue-white palette
      const hue = 0.55 + Math.cos(distanceToCenter * 2) * 0.05;
      const saturation = 0.2;
      const lightness = 0.7 + Math.sin(distanceToCenter) * 0.12;

      color.setHSL(hue, saturation, lightness);
      color.toArray(colorArray, i);
    }

    setColors(colorArray);
  }, [nodes]);

  // Simple rotation - no morphing
  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const rotationSpeed = getGalaxyRotationSpeed(scrollProgress);
    groupRef.current.rotation.z += rotationSpeed;

    // Subtle floating
    const time = clock.getElapsedTime();
    groupRef.current.rotation.x = Math.sin(time * 0.05) * 0.02;
    groupRef.current.rotation.y = Math.cos(time * 0.03) * 0.02;

    // Update opacity
    const opacity = getGalaxyOpacity(scrollProgress);
    if (pointsRef.current?.material) {
      pointsRef.current.material.opacity = opacity;
    }
  });

  const opacity = getGalaxyOpacity(scrollProgress);
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
        />
      </points>
    </group>
  );
};

// ============================================================================
// PREMIUM EARTH WITH HIGH-QUALITY RENDERING
// ============================================================================

const PremiumEarth = ({ scrollProgress }) => {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const glowRef = useRef();

  const [dayMap, cloudsMap, specularMap] = useTexture([
    '/8k_earth_daymap.jpeg',
    '/8k_earth_clouds.jpeg',
    '/8k_earth_specular_map.png',
  ]);

  // NYC coordinates
  const NY_LAT = 40.7128;
  const NY_LON = -74.0060;
  const EARTH_RADIUS = 2;

  // Set premium texture filtering
  useEffect(() => {
    const textures = [dayMap, cloudsMap, specularMap];
    textures.forEach((texture) => {
      if (texture) {
        texture.anisotropy = 16;
        texture.minFilter = THREE.LinearMipMapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
      }
    });
  }, [dayMap, cloudsMap, specularMap]);

  // Simple rotation - just spin as you scroll
  useFrame(() => {
    if (!earthRef.current) return;

    // Simple rotation based on scroll progress
    earthRef.current.rotation.y = scrollProgress * Math.PI * 2;

    // Clouds rotate slightly offset
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = scrollProgress * Math.PI * 2.2;
    }
  });

  const opacity = getEarthOpacity(scrollProgress);
  const scale = getEarthScale(scrollProgress);
  const atmosphereOpacity = getAtmosphereIntensity(scrollProgress);

  if (opacity < 0.01) return null;

  return (
    <group scale={scale}>
      {/* Main Earth sphere with high-quality daymap */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[EARTH_RADIUS, 128, 128]} />
        <meshStandardMaterial
          map={dayMap}
          roughnessMap={specularMap}
          roughness={0.7}
          metalness={0.1}
          transparent
          opacity={opacity}
          envMapIntensity={0.4}
        />
      </mesh>

      {/* Cloud layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[EARTH_RADIUS + 0.012, 128, 128]} />
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          opacity={opacity * 0.5}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Atmospheric glow - outer sphere */}
      <mesh ref={glowRef} scale={1.12}>
        <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
        <shaderMaterial
          transparent
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          uniforms={{
            uOpacity: { value: atmosphereOpacity },
            uColor: { value: new THREE.Color(0.6, 0.8, 1.0) }, // Soft blue
          }}
          vertexShader={`
            varying vec3 vNormal;
            varying vec3 vPosition;

            void main() {
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform float uOpacity;
            uniform vec3 uColor;
            varying vec3 vNormal;
            varying vec3 vPosition;

            void main() {
              // Fresnel effect - glow at edges
              vec3 viewDirection = normalize(cameraPosition - vPosition);
              float fresnel = pow(1.0 - abs(dot(viewDirection, vNormal)), 3.0);

              // Soft falloff
              float intensity = fresnel * 0.8;

              gl_FragColor = vec4(uColor, intensity * uOpacity);
            }
          `}
        />
      </mesh>

      {/* Premium lighting setup */}
      <ambientLight intensity={0.25} color="#ffffff" />

      {/* Sun - main directional light */}
      <directionalLight
        position={[5, 2, 5]}
        intensity={2.5}
        color="#ffffff"
        castShadow={false}
      />

      {/* Rim light - defines edge */}
      <directionalLight
        position={[-3, 1, -2]}
        intensity={0.6}
        color="#88c5ff"
      />

      {/* Fill light - subtle */}
      <directionalLight
        position={[0, -2, 3]}
        intensity={0.3}
        color="#b8d4ff"
      />
    </group>
  );
};

// ============================================================================
// CAMERA CONTROLLER
// ============================================================================

const CameraController = ({ scrollProgress }) => {
  const { camera } = useThree();
  const targetPosRef = useRef(new THREE.Vector3(0, 0, 15));
  const currentPosRef = useRef(new THREE.Vector3(0, 0, 15));

  useFrame(() => {
    const cameraState = getCameraState(scrollProgress);

    // Set target
    targetPosRef.current.set(...cameraState.position);

    // Smooth lerp
    currentPosRef.current.lerp(targetPosRef.current, 0.05);

    camera.position.copy(currentPosRef.current);
    camera.lookAt(...cameraState.target);

    // Smooth FOV
    camera.fov += (cameraState.fov - camera.fov) * 0.05;
    camera.updateProjectionMatrix();
  });

  return null;
};

// ============================================================================
// POST-PROCESSING
// ============================================================================

const Effects = ({ scrollProgress }) => {
  const composerRef = useRef();
  const { gl, scene, camera, size } = useThree();
  const [bloomPass, setBloomPass] = useState(null);

  useEffect(() => {
    const composer = new EffectComposer(gl);
    composer.setSize(size.width, size.height);

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloom = new UnrealBloomPass(
      new THREE.Vector2(size.width * 0.5, size.height * 0.5),
      0.25,
      1.2,
      0.15
    );
    composer.addPass(bloom);
    setBloomPass(bloom);

    const outputPass = new OutputPass();
    composer.addPass(outputPass);

    composerRef.current = composer;

    return () => composer.dispose();
  }, [gl, scene, camera, size]);

  useFrame(() => {
    if (!composerRef.current || !bloomPass) return;

    const bloomIntensity = getBloomIntensity(scrollProgress);
    const bloomThreshold = getBloomThreshold(scrollProgress);

    bloomPass.strength = bloomIntensity;
    bloomPass.threshold = bloomThreshold;

    gl.autoClear = false;
    gl.clear();
    composerRef.current.render();
  }, 1);

  return null;
};

// ============================================================================
// TEXT OVERLAYS - DOM-BASED FOR CRISP RENDERING
// ============================================================================

const MakanText = ({ scrollProgress }) => {
  const makanOpacity = getMakanTextOpacity(scrollProgress);
  const queryOpacity = getQueryTextOpacity(scrollProgress);
  const scale = getTextScale(Math.max(makanOpacity, queryOpacity));

  // Debug - log when text should be visible
  if (scrollProgress > 0.46 && scrollProgress < 0.78) {
    console.log('Text Debug:', { scrollProgress: scrollProgress.toFixed(3), makanOpacity: makanOpacity.toFixed(3), queryOpacity: queryOpacity.toFixed(3) });
  }

  // Show if either text is visible
  if (makanOpacity < 0.01 && queryOpacity < 0.01) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    >
      {/* MAKAN title */}
      <h1
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '6rem',
          fontWeight: '300',
          letterSpacing: '0.6em',
          color: '#ffffff',
          margin: 0,
          padding: 0,
          textAlign: 'center',
          opacity: makanOpacity,
          textShadow: `
            0 0 60px rgba(255, 255, 255, 0.6),
            0 0 120px rgba(255, 255, 255, 0.3)
          `,
          filter: `drop-shadow(0 0 40px rgba(255, 255, 255, 0.8))`,
        }}
      >
        MAKAN
      </h1>

      {/* Query the world subtitle */}
      <h2
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '2rem',
          fontWeight: '200',
          letterSpacing: '0.4em',
          color: '#ffffff',
          margin: 0,
          marginTop: '2rem',
          padding: 0,
          textAlign: 'center',
          opacity: queryOpacity,
          textShadow: `
            0 0 40px rgba(255, 255, 255, 0.4),
            0 0 80px rgba(255, 255, 255, 0.2)
          `,
          filter: `drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))`,
        }}
      >
        QUERY THE WORLD
      </h2>
    </div>
  );
};


// ============================================================================
// MAIN SCENE
// ============================================================================

const CleanHeroScene = ({ scrollProgress = 0 }) => {
  const backgroundColor = getBackgroundColor(scrollProgress);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: backgroundColor }}>
      {/* Background layer to prevent flashing */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: backgroundColor,
          zIndex: 0,
        }}
      />

      {/* Three.js Canvas */}
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
          background: 'transparent',
          pointerEvents: 'none',
          zIndex: 1,
        }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.5,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Simple galaxy - no morphing */}
          <SimpleGalaxy scrollProgress={scrollProgress} />

          {/* Premium Earth */}
          <PremiumEarth scrollProgress={scrollProgress} />

          {/* Camera control */}
          <CameraController scrollProgress={scrollProgress} />

          {/* Post-processing */}
          <Effects scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>

      {/* Text overlay - DOM for crisp rendering */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <MakanText scrollProgress={scrollProgress} />
      </div>
    </div>
  );
};

export default CleanHeroScene;
