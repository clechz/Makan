/**
 * MAKAN HERO STAGE PIPELINE
 *
 * Clean, cinematic, staged narrative with clear visual separation
 * One dominant idea at a time
 */

// ============================================================================
// STAGE DEFINITIONS - CLEAN NARRATIVE PIPELINE
// ============================================================================

export const HERO_STAGES = {
  // STAGE 1: White background, window visible
  WHITE_INTRO: { start: 0.00, end: 0.10, name: 'WHITE_INTRO' },

  // STAGE 2: White dims to black during window zoom
  DIMMING: { start: 0.10, end: 0.30, name: 'DIMMING' },

  // STAGE 3: Galaxy only - clean, spacious, breathing (MUCH LONGER)
  GALAXY: { start: 0.30, end: 0.48, name: 'GALAXY' },

  // STAGE 4: "MAKAN" title reveal (MUCH LONGER)
  MAKAN_REVEAL: { start: 0.48, end: 0.62, name: 'MAKAN_REVEAL' },

  // STAGE 5: "Query the world" message (MUCH LONGER)
  QUERY_REVEAL: { start: 0.62, end: 0.76, name: 'QUERY_REVEAL' },

  // STAGE 6: Earth reveal and establishment (MUCH LONGER)
  EARTH_REVEAL: { start: 0.76, end: 0.88, name: 'EARTH_REVEAL' },

  // STAGE 7: Earth to NYC zoom
  NYC_ZOOM: { start: 0.88, end: 1.00, name: 'NYC_ZOOM' },
};

// ============================================================================
// EASING FUNCTIONS
// ============================================================================

export const ease = {
  inOutCubic: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  inOutQuad: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
  outCubic: (t) => 1 - Math.pow(1 - t, 3),
  inCubic: (t) => t * t * t,
  inOutQuart: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2,
  linear: (t) => t,
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export function getCurrentStage(progress) {
  if (progress < HERO_STAGES.DIMMING.start) return HERO_STAGES.WHITE_INTRO;
  if (progress < HERO_STAGES.GALAXY.start) return HERO_STAGES.DIMMING;
  if (progress < HERO_STAGES.MAKAN_REVEAL.start) return HERO_STAGES.GALAXY;
  if (progress < HERO_STAGES.QUERY_REVEAL.start) return HERO_STAGES.MAKAN_REVEAL;
  if (progress < HERO_STAGES.EARTH_REVEAL.start) return HERO_STAGES.QUERY_REVEAL;
  if (progress < HERO_STAGES.NYC_ZOOM.start) return HERO_STAGES.EARTH_REVEAL;
  return HERO_STAGES.NYC_ZOOM;
}

export function getLocalProgress(progress, start, end) {
  if (progress <= start) return 0;
  if (progress >= end) return 1;
  return (progress - start) / (end - start);
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

// ============================================================================
// BACKGROUND COLOR - WHITE TO BLACK DIMMING
// ============================================================================

/**
 * Smooth white to black transition - stays black, never goes back to white
 */
export function getBackgroundColor(progress) {
  // Pure white at start
  if (progress < HERO_STAGES.WHITE_INTRO.end) {
    return '#ffffff';
  }

  // Smooth dimming during window zoom
  if (progress < HERO_STAGES.DIMMING.end) {
    const local = getLocalProgress(progress, HERO_STAGES.WHITE_INTRO.end, HERO_STAGES.DIMMING.end);
    const dimProgress = ease.inOutCubic(local);

    // Interpolate from white (255) to black (0)
    const value = Math.round(255 * (1 - dimProgress));
    return `rgb(${value}, ${value}, ${value})`;
  }

  // Stay black forever after dimming - never go back to white
  return '#000000';
}

/**
 * Background opacity for layered approach if needed
 */
export function getBackgroundOpacity(progress) {
  const stage = getCurrentStage(progress);

  if (stage === HERO_STAGES.WHITE_INTRO) return 1;

  if (stage === HERO_STAGES.DIMMING) {
    const local = getLocalProgress(progress, HERO_STAGES.DIMMING.start, HERO_STAGES.DIMMING.end);
    return 1 - ease.inOutCubic(local);
  }

  return 0;
}

// ============================================================================
// GALAXY STAGE
// ============================================================================

/**
 * Galaxy visibility - fully reversible and smooth
 */
export function getGalaxyOpacity(progress) {
  // Not visible before dimming is mostly complete
  if (progress < HERO_STAGES.DIMMING.end - 0.03) {
    return 0;
  }

  // Fade in as dimming completes
  if (progress < HERO_STAGES.GALAXY.start + 0.02) {
    const local = getLocalProgress(
      progress,
      HERO_STAGES.DIMMING.end - 0.03,
      HERO_STAGES.GALAXY.start + 0.02
    );
    return ease.outCubic(local);
  }

  // Fully visible during galaxy stage
  if (progress < HERO_STAGES.GALAXY.end - 0.02) {
    return 1;
  }

  // Fade out as Makan appears
  if (progress < HERO_STAGES.MAKAN_REVEAL.start + 0.04) {
    const local = getLocalProgress(
      progress,
      HERO_STAGES.GALAXY.end - 0.02,
      HERO_STAGES.MAKAN_REVEAL.start + 0.04
    );
    return 1 - ease.inCubic(local);
  }

  // Fully gone after
  return 0;
}

/**
 * Galaxy rotation speed - slow and meditative
 */
export function getGalaxyRotationSpeed(progress) {
  const opacity = getGalaxyOpacity(progress);
  return opacity > 0 ? 0.00008 : 0;
}

// ============================================================================
// TEXT REVEALS - MAKAN AND QUERY THE WORLD
// ============================================================================

/**
 * "MAKAN" text opacity - smooth and reversible
 */
export function getMakanTextOpacity(progress) {
  // Not visible before reveal
  if (progress < HERO_STAGES.MAKAN_REVEAL.start - 0.02) {
    return 0;
  }

  // Fade in
  if (progress < HERO_STAGES.MAKAN_REVEAL.start + 0.03) {
    const local = getLocalProgress(progress, HERO_STAGES.MAKAN_REVEAL.start - 0.02, HERO_STAGES.MAKAN_REVEAL.start + 0.03);
    return ease.outCubic(local);
  }

  // Stay visible during entire Makan stage
  if (progress < HERO_STAGES.MAKAN_REVEAL.end - 0.02) {
    return 1;
  }

  // Fade out as Query approaches
  if (progress < HERO_STAGES.QUERY_REVEAL.start + 0.02) {
    const local = getLocalProgress(progress, HERO_STAGES.MAKAN_REVEAL.end - 0.02, HERO_STAGES.QUERY_REVEAL.start + 0.02);
    return 1 - ease.inCubic(local);
  }

  return 0;
}

/**
 * "Query the world" text opacity - smooth and reversible
 */
export function getQueryTextOpacity(progress) {
  // Not visible before reveal
  if (progress < HERO_STAGES.QUERY_REVEAL.start - 0.02) {
    return 0;
  }

  // Fade in
  if (progress < HERO_STAGES.QUERY_REVEAL.start + 0.03) {
    const local = getLocalProgress(progress, HERO_STAGES.QUERY_REVEAL.start - 0.02, HERO_STAGES.QUERY_REVEAL.start + 0.03);
    return ease.outCubic(local);
  }

  // Stay visible during entire Query stage
  if (progress < HERO_STAGES.QUERY_REVEAL.end - 0.02) {
    return 1;
  }

  // Fade out as Earth approaches
  if (progress < HERO_STAGES.EARTH_REVEAL.start + 0.02) {
    const local = getLocalProgress(progress, HERO_STAGES.QUERY_REVEAL.end - 0.02, HERO_STAGES.EARTH_REVEAL.start + 0.02);
    return 1 - ease.inCubic(local);
  }

  return 0;
}

/**
 * Text scale for subtle animation
 */
export function getTextScale(opacity) {
  if (opacity === 0) return 0.8;
  if (opacity === 1) return 1;
  // Subtle scale up as it fades in
  return lerp(0.95, 1, opacity);
}

// ============================================================================
// EARTH STAGE
// ============================================================================

/**
 * Earth visibility - smooth and reliable
 */
export function getEarthOpacity(progress) {
  // Not visible before Earth reveal
  if (progress < HERO_STAGES.EARTH_REVEAL.start - 0.02) {
    return 0;
  }

  // Fade in smoothly
  if (progress < HERO_STAGES.EARTH_REVEAL.start + 0.04) {
    const local = getLocalProgress(
      progress,
      HERO_STAGES.EARTH_REVEAL.start - 0.02,
      HERO_STAGES.EARTH_REVEAL.start + 0.04
    );
    return ease.outCubic(local);
  }

  // Stay fully visible through Earth and most of NYC
  if (progress < 0.95) {
    return 1;
  }

  // Fade out at very end
  const local = getLocalProgress(progress, 0.95, 1.0);
  return 1 - ease.inCubic(local);
}

/**
 * Earth scale - keep it simple, no scaling
 */
export function getEarthScale(progress) {
  return 1;
}

// Removed complex Earth rotation and NYC zoom functions
// Earth now just rotates with scroll progress

/**
 * Earth atmosphere intensity
 */
export function getAtmosphereIntensity(progress) {
  const earthOpacity = getEarthOpacity(progress);
  return earthOpacity * 0.25; // Subtle atmosphere
}

// ============================================================================
// POST-PROCESSING
// ============================================================================

/**
 * Bloom intensity by stage
 */
export function getBloomIntensity(progress) {
  const stage = getCurrentStage(progress);

  // No bloom during white intro
  if (stage === HERO_STAGES.WHITE_INTRO) return 0;

  // Subtle bloom during dimming
  if (stage === HERO_STAGES.DIMMING) return 0.1;

  // Medium bloom for galaxy
  if (stage === HERO_STAGES.GALAXY) return 0.25;

  // Higher bloom for text reveals (glow effect)
  if (stage === HERO_STAGES.MAKAN_REVEAL || stage === HERO_STAGES.QUERY_REVEAL) {
    return 0.35;
  }

  // Subtle bloom for Earth
  if (stage === HERO_STAGES.EARTH_REVEAL || stage === HERO_STAGES.NYC_ZOOM) {
    return 0.15;
  }

  return 0.2;
}

/**
 * Bloom threshold
 */
export function getBloomThreshold(progress) {
  const stage = getCurrentStage(progress);

  // Higher threshold (less bloom) during Earth stages
  if (stage === HERO_STAGES.EARTH_REVEAL || stage === HERO_STAGES.NYC_ZOOM) {
    return 0.25;
  }

  return 0.15;
}

// ============================================================================
// CAMERA SYSTEM
// ============================================================================

/**
 * Camera position and target by stage
 */
export function getCameraState(progress) {
  const stage = getCurrentStage(progress);

  // Initial view - far back
  if (stage === HERO_STAGES.WHITE_INTRO || stage === HERO_STAGES.DIMMING) {
    return {
      position: [0, 0, 15],
      target: [0, 0, 0],
      fov: 60,
    };
  }

  // Galaxy view - same as initial
  if (stage === HERO_STAGES.GALAXY) {
    return {
      position: [0, 0, 15],
      target: [0, 0, 0],
      fov: 60,
    };
  }

  // Text reveals - locked camera
  if (stage === HERO_STAGES.MAKAN_REVEAL || stage === HERO_STAGES.QUERY_REVEAL) {
    return {
      position: [0, 0, 15],
      target: [0, 0, 0],
      fov: 60,
    };
  }

  // Earth reveal - keep camera static, just show Earth rotating
  if (stage === HERO_STAGES.EARTH_REVEAL || stage === HERO_STAGES.NYC_ZOOM) {
    return {
      position: [0, 0, 15],
      target: [0, 0, 0],
      fov: 60,
    };
  }

  return {
    position: [0, 0, 15],
    target: [0, 0, 0],
    fov: 60,
  };
}

// ============================================================================
// DEBUG
// ============================================================================

export function getDebugInfo(progress) {
  const stage = getCurrentStage(progress);
  const local = getLocalProgress(progress, stage.start, stage.end);

  return {
    progress: progress.toFixed(3),
    stage: stage.name,
    stageProgress: local.toFixed(3),
    backgroundColor: getBackgroundColor(progress),
    galaxyOpacity: getGalaxyOpacity(progress).toFixed(2),
    makanOpacity: getMakanTextOpacity(progress).toFixed(2),
    queryOpacity: getQueryTextOpacity(progress).toFixed(2),
    earthOpacity: getEarthOpacity(progress).toFixed(2),
    bloomIntensity: getBloomIntensity(progress).toFixed(2),
  };
}
