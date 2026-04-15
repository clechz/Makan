const WindowLighting = ({ scrollProgress }) => {
  // Lighting is visible throughout the window animation
  const opacity = Math.min(1, scrollProgress * 3);

  // Light intensity increases as we zoom in
  const lightIntensity = Math.min(1, scrollProgress * 2);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
        opacity: opacity,
      }}
    >
      {/* Ambient light glow around the window edges */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '60%',
          background: `radial-gradient(ellipse at center,
            rgba(255, 255, 255, ${0.05 * lightIntensity}) 0%,
            rgba(200, 220, 255, ${0.03 * lightIntensity}) 20%,
            rgba(150, 180, 255, ${0.02 * lightIntensity}) 40%,
            transparent 70%)`,
          filter: 'blur(40px)',
        }}
      />

      {/* Edge highlights on the window frame */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '55%',
          height: '55%',
          borderRadius: '8px',
          boxShadow: `
            0 0 ${30 * lightIntensity}px ${10 * lightIntensity}px rgba(255, 255, 255, 0.1),
            inset 0 0 ${50 * lightIntensity}px ${20 * lightIntensity}px rgba(255, 255, 255, 0.05)
          `,
        }}
      />

      {/* Subtle rim light on edges */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '58%',
          height: '58%',
          border: `1px solid rgba(255, 255, 255, ${0.08 * lightIntensity})`,
          borderRadius: '8px',
          filter: 'blur(2px)',
        }}
      />
    </div>
  );
};

export default WindowLighting;
