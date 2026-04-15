import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MakanLogo = () => {
  const containerRef = useRef(null);
  const maskRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the mask revealing the logo
      gsap.timeline()
        .fromTo(
          maskRef.current,
          {
            clipPath: 'circle(0% at 50% 50%)',
            scale: 0.8,
          },
          {
            clipPath: 'circle(100% at 50% 50%)',
            scale: 1,
            duration: 1.5,
            ease: 'power3.out',
            delay: 0.8,
          }
        )
        .fromTo(
          glowRef.current,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
          },
          '-=1'
        );

      // Continuous glow pulse animation
      gsap.to(glowRef.current, {
        opacity: 0.6,
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        aspectRatio: '16 / 9',
      }}
    >
      {/* Glow effect behind logo */}
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, rgba(124, 58, 237, 0.2) 50%, transparent 70%)',
          filter: 'blur(40px)',
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Logo with mask reveal */}
      <div
        ref={maskRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          clipPath: 'circle(0% at 50% 50%)',
          zIndex: 1,
        }}
      >
        <img
          src="/makan-logo.svg"
          alt="Makan Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.5))',
          }}
        />

        {/* Shimmer overlay effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
            animation: 'shimmer 3s infinite',
            pointerEvents: 'none',
          }}
        />
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }
      `}</style>
    </div>
  );
};

export default MakanLogo;
