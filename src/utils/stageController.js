/**
 * MAKAN HERO STAGE CONTROLLER
 *
 * Centralized stage-based animation system for premium, cinematic, reversible scroll experience.
 * All transitions are derived from normalized scroll progress (0-1).
 */

// ============================================================================
// STAGE DEFINITIONS
// ============================================================================

export const STAGES = {
  GALAXY: { start: 0.00, end: 0.24, name: 'GALAXY' },
  CONVERGENCE: { start: 0.24, end: 0.42, name: 'CONVERGENCE' },
  LOGO_REVEAL: { start: 0.42, end: 0.58, name: 'LOGO_REVEAL' },
  EARTH_HANDOFF: { start: 0.58, end: 0.76, name: 'EARTH_HANDOFF' },
  EARTH_DOMINATES: { start: 0.76, end: 1.00, name: 'EARTH_DOMINATES' },
}

// ============================================================================
// EASING FUNCTIONS
// ============================================================================

/**
 * Premium easing functions for cinematic movement
 */
export const ease = {
  // Smooth in-out (default for most transitions)
  inOutCubic: (t) => t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2,

  // Gentle acceleration
  inQuad: (t) => t * t,

  // Gentle deceleration
  outQuad: (t) => 1 - (1 - t) * (1 - t),

  // Extra smooth (for camera)
  inOutQuart: (t) => t < 0.5
    ? 8 * t * t * t * t
    : 1 - Math.pow(-2 * t + 2, 4) / 2,

  // Exponential (for dramatic reveals)
  inOutExpo: (t) => {
    if (t === 0) return 0
    if (t === 1) return 1
    return t < 0.5
      ? Math.pow(2, 20 * t - 10) / 2
      : (2 - Math.pow(2, -20 * t + 10)) / 2
  },

  // Linear (when you need precise control)
  linear: (t) => t,
}

// ============================================================================
// STAGE UTILITIES
// ============================================================================

/**
 * Get current stage based on global progress
 */
export function getStage(progress) {
  if (progress < STAGES.CONVERGENCE.start) return STAGES.GALAXY
  if (progress < STAGES.LOGO_REVEAL.start) return STAGES.CONVERGENCE
  if (progress < STAGES.EARTH_HANDOFF.start) return STAGES.LOGO_REVEAL
  if (progress < STAGES.EARTH_DOMINATES.start) return STAGES.EARTH_HANDOFF
  return STAGES.EARTH_DOMINATES
}

/**
 * Get localized progress within a stage (0-1)
 * @param {number} progress - Global progress 0-1
 * @param {number} start - Stage start point
 * @param {number} end - Stage end point
 * @returns {number} Clamped local progress 0-1
 */
export function getLocalProgress(progress, start, end) {
  if (progress <= start) return 0
  if (progress >= end) return 1
  return (progress - start) / (end - start)
}

/**
 * Get smooth transition value between two stages
 * Useful for crossfades and handoffs
 */
export function getTransition(progress, start, end, easingFn = ease.inOutCubic) {
  const local = getLocalProgress(progress, start, end)
  return easingFn(local)
}

/**
 * Linear interpolation with optional easing
 */
export function lerp(a, b, t, easingFn = ease.linear) {
  const eased = easingFn(t)
  return a + (b - a) * eased
}

/**
 * Smooth clamp - returns value smoothly clamped between min and max
 */
export function smoothClamp(value, min, max, smoothness = 0.1) {
  if (value < min) return min + (value - min) * smoothness
  if (value > max) return max + (value - max) * smoothness
  return value
}

// ============================================================================
// GALAXY STAGE CONTROLLERS
// ============================================================================

/**
 * Galaxy rotation speed (decreases during convergence)
 */
export function getGalaxyRotationSpeed(progress) {
  const stage = getStage(progress)

  if (stage === STAGES.GALAXY) {
    // Slow, meditative rotation
    return 0.00008
  }

  if (stage === STAGES.CONVERGENCE) {
    // Gradually slow down
    const local = getLocalProgress(progress, STAGES.CONVERGENCE.start, STAGES.CONVERGENCE.end)
    return lerp(0.00008, 0.00002, local, ease.outQuad)
  }

  // Stop during logo reveal and beyond
  return 0
}

/**
 * Galaxy particle drift amount
 */
export function getGalaxyDrift(progress) {
  const stage = getStage(progress)

  if (stage === STAGES.GALAXY) {
    return 1.0 // Full subtle drift
  }

  if (stage === STAGES.CONVERGENCE) {
    // Reduce drift as particles organize
    const local = getLocalProgress(progress, STAGES.CONVERGENCE.start, STAGES.CONVERGENCE.end)
    return lerp(1.0, 0.1, local, ease.inOutCubic)
  }

  return 0
}

/**
 * Convergence strength (how much particles move toward logo position)
 */
export function getConvergenceStrength(progress) {
  if (progress < STAGES.CONVERGENCE.start) return 0
  if (progress >= STAGES.LOGO_REVEAL.end) return 1

  // Ramp up during convergence, hold during logo reveal
  if (progress < STAGES.LOGO_REVEAL.start) {
    const local = getLocalProgress(progress, STAGES.CONVERGENCE.start, STAGES.LOGO_REVEAL.start)
    return ease.inOutCubic(local)
  }

  return 1
}

// ============================================================================
// LOGO STAGE CONTROLLERS
// ============================================================================

/**
 * Logo visibility (particles + text)
 */
export function getLogoOpacity(progress) {
  // Fade in during convergence → logo reveal
  const fadeIn = getTransition(
    progress,
    STAGES.CONVERGENCE.start + 0.1, // Start fade slightly after convergence begins
    STAGES.LOGO_REVEAL.start + 0.08, // Fully visible shortly into logo stage
    ease.inOutCubic
  )

  // Fade out during Earth handoff
  const fadeOut = 1 - getTransition(
    progress,
    STAGES.EARTH_HANDOFF.start,
    STAGES.EARTH_HANDOFF.start + 0.12, // Quick fade
    ease.inQuad
  )

  return Math.min(fadeIn, fadeOut)
}

/**
 * Logo particle intensity (reduce bloom during readability peak)
 */
export function getLogoParticleIntensity(progress) {
  const stage = getStage(progress)

  if (stage === STAGES.LOGO_REVEAL) {
    // Reduce intensity for readability
    return 0.6
  }

  return 1.0
}

/**
 * Logo text clarity (separate control for MAKAN text)
 */
export function getLogoTextOpacity(progress) {
  // Text appears slightly after particles form
  const fadeIn = getTransition(
    progress,
    STAGES.LOGO_REVEAL.start,
    STAGES.LOGO_REVEAL.start + 0.06,
    ease.outQuad
  )

  // Text fades before particles during handoff
  const fadeOut = 1 - getTransition(
    progress,
    STAGES.EARTH_HANDOFF.start - 0.04,
    STAGES.EARTH_HANDOFF.start + 0.08,
    ease.inQuad
  )

  return Math.min(fadeIn, fadeOut)
}

// ============================================================================
// EARTH STAGE CONTROLLERS
// ============================================================================

/**
 * Earth visibility
 */
export function getEarthOpacity(progress) {
  // Earth begins appearing during handoff
  const fadeIn = getTransition(
    progress,
    STAGES.EARTH_HANDOFF.start + 0.08, // Logo fades first
    STAGES.EARTH_HANDOFF.start + 0.16,
    ease.inOutCubic
  )

  return fadeIn
}

/**
 * Earth scale (subtle growth as it becomes dominant)
 */
export function getEarthScale(progress) {
  if (progress < STAGES.EARTH_HANDOFF.start) return 1.0

  const growth = getTransition(
    progress,
    STAGES.EARTH_HANDOFF.start,
    STAGES.EARTH_DOMINATES.start + 0.1,
    ease.outQuad
  )

  return lerp(1.0, 1.15, growth)
}

/**
 * Earth rotation progress (rotate to show NYC)
 */
export function getEarthRotation(progress) {
  if (progress < STAGES.EARTH_HANDOFF.start) return 0

  const rotation = getTransition(
    progress,
    STAGES.EARTH_HANDOFF.start,
    STAGES.EARTH_DOMINATES.start + 0.15,
    ease.inOutQuart
  )

  return rotation
}

/**
 * Atmosphere intensity
 */
export function getAtmosphereIntensity(progress) {
  const stage = getStage(progress)

  if (stage === STAGES.EARTH_HANDOFF || stage === STAGES.EARTH_DOMINATES) {
    // Subtle atmosphere during Earth stages
    return 0.15
  }

  return 0
}

// ============================================================================
// CAMERA CONTROLLERS
// ============================================================================

/**
 * Camera position by stage
 * Returns { position: [x, y, z], target: [x, y, z] }
 */
export function getCameraState(progress) {
  const stage = getStage(progress)

  // STAGE 1: GALAXY - Static with subtle drift
  if (stage === STAGES.GALAXY) {
    const drift = Math.sin(progress * Math.PI * 4) * 0.1
    return {
      position: [drift * 0.2, 0, 15],
      target: [0, 0, 0],
      fov: 60
    }
  }

  // STAGE 2: CONVERGENCE - Tiny push in
  if (stage === STAGES.CONVERGENCE) {
    const local = getLocalProgress(progress, STAGES.CONVERGENCE.start, STAGES.CONVERGENCE.end)
    const z = lerp(15, 14.5, local, ease.inOutCubic)
    return {
      position: [0, 0, z],
      target: [0, 0, 0],
      fov: 60
    }
  }

  // STAGE 3: LOGO REVEAL - Dead calm
  if (stage === STAGES.LOGO_REVEAL) {
    return {
      position: [0, 0, 14.5],
      target: [0, 0, 0],
      fov: 60
    }
  }

  // STAGE 4: EARTH HANDOFF - Gentle forward movement
  if (stage === STAGES.EARTH_HANDOFF) {
    const local = getLocalProgress(progress, STAGES.EARTH_HANDOFF.start, STAGES.EARTH_HANDOFF.end)
    const z = lerp(14.5, 12, local, ease.inOutCubic)
    return {
      position: [0, 0, z],
      target: [0, 0, 0],
      fov: 60
    }
  }

  // STAGE 5: EARTH DOMINATES - Continue zoom to NYC
  if (stage === STAGES.EARTH_DOMINATES) {
    const local = getLocalProgress(progress, STAGES.EARTH_DOMINATES.start, STAGES.EARTH_DOMINATES.end)

    // From orbit position to NYC surface
    const orbitZ = 12
    const nycZ = 2.5
    const z = lerp(orbitZ, nycZ, local, ease.inOutQuart)

    // Slight lateral movement as we approach
    const x = lerp(0, 0.3, local, ease.inOutCubic)
    const y = lerp(0, -0.2, local, ease.inOutCubic)

    return {
      position: [x, y, z],
      target: [0, 0, 0],
      fov: lerp(60, 70, local, ease.inOutCubic) // Slight FOV increase for drama
    }
  }

  return { position: [0, 0, 15], target: [0, 0, 0], fov: 60 }
}

/**
 * Camera shake/drift amount (for subtle floating feel)
 */
export function getCameraDrift(progress, time) {
  const stage = getStage(progress)

  if (stage === STAGES.GALAXY) {
    // Slow floating
    return {
      x: Math.sin(time * 0.3) * 0.08,
      y: Math.cos(time * 0.2) * 0.05,
    }
  }

  if (stage === STAGES.CONVERGENCE) {
    // Reduced drift
    return {
      x: Math.sin(time * 0.3) * 0.03,
      y: Math.cos(time * 0.2) * 0.02,
    }
  }

  // No drift during logo reveal and beyond
  return { x: 0, y: 0 }
}

// ============================================================================
// POST-PROCESSING CONTROLLERS
// ============================================================================

/**
 * Bloom intensity by stage
 */
export function getBloomIntensity(progress) {
  const stage = getStage(progress)

  if (stage === STAGES.GALAXY || stage === STAGES.CONVERGENCE) {
    return 0.3 // Subtle galaxy glow
  }

  if (stage === STAGES.LOGO_REVEAL) {
    return 0.15 // Reduced for logo readability
  }

  if (stage === STAGES.EARTH_HANDOFF) {
    return 0.2 // Slight increase during transition
  }

  if (stage === STAGES.EARTH_DOMINATES) {
    return 0.12 // Very subtle for Earth
  }

  return 0.25
}

/**
 * Bloom threshold (what brightness level triggers bloom)
 */
export function getBloomThreshold(progress) {
  const stage = getStage(progress)

  if (stage === STAGES.LOGO_REVEAL) {
    return 0.3 // Higher threshold = less bloom = better readability
  }

  return 0.15
}

/**
 * Depth of field strength
 */
export function getDOFStrength(progress) {
  const stage = getStage(progress)

  // Very subtle DOF only during Earth stages
  if (stage === STAGES.EARTH_DOMINATES) {
    const local = getLocalProgress(progress, STAGES.EARTH_DOMINATES.start, STAGES.EARTH_DOMINATES.end)
    return lerp(0, 0.002, local, ease.inOutCubic) // Extremely subtle
  }

  return 0
}

/**
 * Vignette strength
 */
export function getVignetteStrength(progress) {
  const stage = getStage(progress)

  if (stage === STAGES.GALAXY) {
    return 0.4 // Stronger vignette for deep space mood
  }

  if (stage === STAGES.CONVERGENCE || stage === STAGES.LOGO_REVEAL) {
    return 0.25 // Reduced to keep focus clear
  }

  return 0.15 // Minimal during Earth stages
}

// ============================================================================
// PARTICLE SIZE CONTROLLERS
// ============================================================================

/**
 * Particle size by stage (for better logo readability)
 */
export function getParticleSize(progress) {
  const stage = getStage(progress)

  if (stage === STAGES.GALAXY || stage === STAGES.CONVERGENCE) {
    return 0.008 // Normal size
  }

  if (stage === STAGES.LOGO_REVEAL) {
    return 0.006 // Slightly smaller for crisp logo edges
  }

  if (stage === STAGES.EARTH_HANDOFF) {
    return 0.005 // Even smaller as they fade
  }

  return 0.004 // Minimal during Earth
}

/**
 * Particle color intensity
 */
export function getParticleColorIntensity(progress) {
  const stage = getStage(progress)

  if (stage === STAGES.LOGO_REVEAL) {
    // Brighter but controlled during logo
    return 1.2
  }

  return 1.0
}

// ============================================================================
// DEBUG UTILITIES
// ============================================================================

/**
 * Get debug info for current progress
 */
export function getDebugInfo(progress) {
  const stage = getStage(progress)
  const local = getLocalProgress(progress, stage.start, stage.end)

  return {
    globalProgress: progress.toFixed(3),
    stage: stage.name,
    stageProgress: local.toFixed(3),
    galaxyVisible: progress < STAGES.EARTH_HANDOFF.start,
    logoVisible: getLogoOpacity(progress) > 0.01,
    earthVisible: getEarthOpacity(progress) > 0.01,
    cameraZ: getCameraState(progress).position[2].toFixed(2),
    bloomIntensity: getBloomIntensity(progress).toFixed(3),
  }
}

/**
 * Visual progress bar for debugging (returns string for console)
 */
export function getProgressBar(progress, width = 50) {
  const filled = Math.floor(progress * width)
  const empty = width - filled
  const bar = '█'.repeat(filled) + '░'.repeat(empty)

  const markers = []
  Object.values(STAGES).forEach(stage => {
    const pos = Math.floor(stage.start * width)
    markers.push({ pos, name: stage.name })
  })

  return `\n${bar} ${(progress * 100).toFixed(1)}%\n${getDebugInfo(progress).stage}`
}

// ============================================================================
// VALIDATION
// ============================================================================

/**
 * Validate stage definitions (run on init)
 */
export function validateStages() {
  const stages = Object.values(STAGES)
  let valid = true

  // Check continuity
  for (let i = 1; i < stages.length; i++) {
    if (stages[i].start !== stages[i - 1].end) {
      console.warn(`⚠️ Stage gap: ${stages[i - 1].name} ends at ${stages[i - 1].end}, but ${stages[i].name} starts at ${stages[i].start}`)
      valid = false
    }
  }

  // Check range
  if (stages[0].start !== 0) {
    console.warn(`⚠️ First stage should start at 0, starts at ${stages[0].start}`)
    valid = false
  }

  if (stages[stages.length - 1].end !== 1) {
    console.warn(`⚠️ Last stage should end at 1, ends at ${stages[stages.length - 1].end}`)
    valid = false
  }

  if (valid) {
    console.log('✅ Stage definitions validated')
  }

  return valid
}

// Validate on module load
if (process.env.NODE_ENV === 'development') {
  validateStages()
}
