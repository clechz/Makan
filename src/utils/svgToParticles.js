import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

/**
 * Generate premium text particle positions
 * Uses clean sans-serif for minimal, modern look
 */
function generateTextParticles(text, scale = 30, options = {}) {
  const {
    fontSize = 100,
    fontWeight = '600', // Semi-bold instead of bold - more elegant
    fontFamily = 'system-ui, -apple-system, sans-serif', // Premium system font
    letterSpacing = 12, // Slight spacing for premium feel
    sampleRate = 3, // Denser sampling for crisp edges
  } = options;

  const allPoints = [];
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Set canvas size
  canvas.width = 1200;
  canvas.height = 300;

  // Premium text rendering
  ctx.fillStyle = 'white';
  ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.letterSpacing = `${letterSpacing}px`;

  // Anti-aliasing for smoother edges
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  // Get pixel data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  // Sample pixels to create points with edge detection for crisp outlines
  for (let y = 0; y < canvas.height; y += sampleRate) {
    for (let x = 0; x < canvas.width; x += sampleRate) {
      const i = (y * canvas.width + x) * 4;
      const alpha = pixels[i + 3];

      if (alpha > 128) {
        // Convert to centered coordinates
        const px = (x - canvas.width / 2) * (scale / 100);
        const py = -(y - canvas.height / 2) * (scale / 100);

        // Add slight depth variation for premium feel
        const pz = (Math.random() - 0.5) * 0.5;

        allPoints.push(new THREE.Vector3(px, py, pz));
      }
    }
  }

  return allPoints;
}

/**
 * Generate premium simple circular logo for Makan
 * A clean circle symbol - restrained and minimal
 */
function generateCircleLogo(radius = 65) {
  const allPoints = [];

  // PRIMARY CIRCLE - Crisp outer ring
  const outerRingPoints = 600;
  const ringThickness = 3; // Slightly thicker for premium feel

  for (let i = 0; i < outerRingPoints; i++) {
    const angle = (i / outerRingPoints) * Math.PI * 2;
    // Add points at multiple radii for thickness
    for (let r = radius - ringThickness; r <= radius; r += 0.5) {
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      allPoints.push(new THREE.Vector3(x, y, 0));
    }
  }

  // INNER ACCENT RING - Subtle concentric detail
  const innerRadius = radius * 0.7;
  const innerRingPoints = 400;
  const innerThickness = 2;

  for (let i = 0; i < innerRingPoints; i++) {
    const angle = (i / innerRingPoints) * Math.PI * 2;
    for (let r = innerRadius - innerThickness; r <= innerRadius; r += 0.5) {
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      allPoints.push(new THREE.Vector3(x, y, 0));
    }
  }

  // CENTER DOT - Simple focal point
  const centerPoints = 200;
  const centerRadius = 8;

  for (let i = 0; i < centerPoints; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * centerRadius;
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    allPoints.push(new THREE.Vector3(x, y, 0));
  }

  // SUBTLE FILL - Sparse interior particles for depth (not clutter)
  const fillPoints = 800; // Sparse
  const fillInnerRadius = innerRadius * 0.6;
  const fillOuterRadius = radius * 0.65;

  for (let i = 0; i < fillPoints; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = fillInnerRadius + Math.random() * (fillOuterRadius - fillInnerRadius);
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    allPoints.push(new THREE.Vector3(x, y, 0));
  }

  console.log(`✨ Generated premium circular logo: ${allPoints.length} particles`);
  return allPoints;
}

/**
 * Convert points array to Float32Array matching target count
 */
function matchParticleCount(allPoints, targetParticleCount) {
  const positions = new Float32Array(targetParticleCount * 3);

  if (allPoints.length >= targetParticleCount) {
    // Subsample
    for (let i = 0; i < targetParticleCount; i++) {
      const sourceIndex = Math.floor((i / targetParticleCount) * allPoints.length);
      const point = allPoints[sourceIndex];
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;
    }
  } else {
    // Duplicate with jitter
    for (let i = 0; i < targetParticleCount; i++) {
      const sourceIndex = i % allPoints.length;
      const point = allPoints[sourceIndex];

      const jitterX = (Math.random() - 0.5) * 0.5;
      const jitterY = (Math.random() - 0.5) * 0.5;
      const jitterZ = (Math.random() - 0.5) * 0.2;

      positions[i * 3] = point.x + jitterX;
      positions[i * 3 + 1] = point.y + jitterY;
      positions[i * 3 + 2] = point.z + jitterZ;
    }
  }

  return positions;
}

/**
 * Generate MAKAN text particles - premium and readable
 */
export function generateMakanText(targetParticleCount) {
  const allPoints = generateTextParticles('MAKAN', 28, {
    fontSize: 120,
    fontWeight: '500', // Medium weight for elegant readability
    letterSpacing: 20, // Generous spacing for premium brand feel
    sampleRate: 2.5, // Dense sampling for crisp text
  });

  console.log(`✨ Generated MAKAN text: ${allPoints.length} particles`);
  return matchParticleCount(allPoints, targetParticleCount);
}

/**
 * Generate tagline text particles
 */
export function generateTaglineText(targetParticleCount) {
  const allPoints = generateTextParticles('QUERY THE WORLD', 20);
  console.log(`Generated tagline: ${allPoints.length} points`);
  return matchParticleCount(allPoints, targetParticleCount);
}

/**
 * Generate circle logo particles
 */
export function generateLogoParticles(svgPath, targetParticleCount) {
  return new Promise((resolve) => {
    const allPoints = generateCircleLogo(80);
    console.log(`Generated circle logo: ${allPoints.length} points`);
    resolve(matchParticleCount(allPoints, targetParticleCount));
  });
}

/**
 * Check if point is inside polygon (2D)
 */
function isPointInPolygon(point, polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;

    const intersect =
      yi > point.y !== yj > point.y &&
      point.x < ((xj - xi) * (point.y - yi)) / (yj - yi) + xi;

    if (intersect) inside = !inside;
  }
  return inside;
}

/**
 * Add curl noise to particle movement for organic motion
 */
export function applyCurlNoise(position, time, strength = 0.1) {
  const noiseX = Math.sin(position.x * 2 + time) * Math.cos(position.y * 2 + time);
  const noiseY = Math.cos(position.x * 2 + time) * Math.sin(position.y * 2 + time);
  const noiseZ = Math.sin(position.z * 2 + time) * Math.cos(position.x * 2 + time);

  return new THREE.Vector3(
    position.x + noiseX * strength,
    position.y + noiseY * strength,
    position.z + noiseZ * strength
  );
}
