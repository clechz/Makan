const GlassOverlay = ({ scrollProgress }) => {
  // Glass effect happens early, before window reaches 7x (which is at 0.5 progress)
  // Active from 0.1 to 0.45, peaks around 0.3
  const glassProgress = Math.max(0, Math.min(1, (scrollProgress - 0.1) / 0.35));

  // Distortion peaks in the middle of the transition
  const distortionAmount = Math.sin(glassProgress * Math.PI) * 25;

  // Reflection opacity
  const reflectionOpacity = glassProgress * 0.15;

  // Blur amount
  const blurAmount = glassProgress * 2;

  if (scrollProgress < 0.1 || scrollProgress > 0.5) return null;

  return (
    <>
      {/* Glass material with frosted effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 3,
          background: `radial-gradient(ellipse at center,
            rgba(255, 255, 255, ${reflectionOpacity * 0.3}) 0%,
            rgba(200, 220, 255, ${reflectionOpacity * 0.2}) 30%,
            transparent 70%)`,
          backdropFilter: `blur(${blurAmount}px)`,
          WebkitBackdropFilter: `blur(${blurAmount}px)`,
          opacity: glassProgress,
        }}
      />

      {/* Concave distortion effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 3,
          mixBlendMode: 'screen',
          opacity: glassProgress * 0.4,
        }}
      >
        <svg width="100%" height="100%" style={{ display: 'block' }}>
          <defs>
            {/* Concave lens distortion */}
            <filter id="concaveGlass" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.008"
                numOctaves="2"
                seed="2"
                result="turbulence"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale={distortionAmount}
                xChannelSelector="R"
                yChannelSelector="G"
                result="distortion"
              />
            </filter>

            {/* Radial gradient for glass highlight */}
            <radialGradient id="glassHighlight" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.15)" />
              <stop offset="80%" stopColor="rgba(180, 200, 255, 0.05)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* Main glass surface with reflection */}
          <rect
            width="100%"
            height="100%"
            fill="url(#glassHighlight)"
            filter="url(#concaveGlass)"
          />

          {/* Highlight streak (reflection) */}
          <ellipse
            cx="45%"
            cy="40%"
            rx="20%"
            ry="35%"
            fill="rgba(255, 255, 255, 0.25)"
            transform="rotate(-30 50 50)"
            filter="blur(15px)"
            opacity={glassProgress * 0.6}
          />

          {/* Secondary smaller highlight */}
          <ellipse
            cx="55%"
            cy="35%"
            rx="8%"
            ry="15%"
            fill="rgba(200, 220, 255, 0.3)"
            transform="rotate(-25 50 50)"
            filter="blur(8px)"
            opacity={glassProgress * 0.5}
          />
        </svg>
      </div>

      {/* Edge distortion glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '95%',
          height: '95%',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 3,
          boxShadow: `inset 0 0 ${distortionAmount * 3}px rgba(255, 255, 255, 0.15)`,
          opacity: glassProgress * 0.8,
        }}
      />
    </>
  );
};

export default GlassOverlay;
