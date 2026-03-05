import { useEffect, useRef } from "react";
import gsap from "gsap";
import StarField from "./StarField";
import AnimatedText from "./AnimatedText";
import MakanLogo from "./MakanLogo";

const Hero = () => {
  const videoRef = useRef();
  const heroRef = useRef();
  const contentRef = useRef();
  const videoContainerRef = useRef();
  const buttonRef = useRef();
  const priceRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;

    // Animate hero elements on mount
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
      );

      gsap.fromTo(
        videoContainerRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, delay: 1, ease: "power2.out" }
      );

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.5, ease: "power2.out" }
      );

      gsap.fromTo(
        priceRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.6, ease: "power2.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} style={{ position: 'relative', overflow: 'hidden' }}>
      <StarField />

      {/* Frost/Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Noise Texture Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
          opacity: 0.5,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div ref={contentRef} style={{ position: 'relative', zIndex: 1, opacity: 0 }}>
        <h1 style={{ marginBottom: '1rem' }}>Makan</h1>
        <MakanLogo />
      </div>

      <div ref={videoContainerRef} style={{ position: 'relative', zIndex: 1, opacity: 0 }}>
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
      </div>

      <button
        ref={buttonRef}
        style={{
          position: 'relative',
          zIndex: 1,
          opacity: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '16px',
          boxShadow: `
            inset -4px 3px 9px 0px rgba(34, 211, 238, 0.3),
            inset 3px -2px 8px 0px rgba(236, 72, 153, 0.3),
            0px 4px 12px rgba(0, 0, 0, 0.5)
          `,
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = `
            inset -4px 3px 12px 0px rgba(34, 211, 238, 0.5),
            inset 3px -2px 10px 0px rgba(236, 72, 153, 0.5),
            0px 8px 20px rgba(0, 0, 0, 0.6)
          `;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = `
            inset -4px 3px 9px 0px rgba(34, 211, 238, 0.3),
            inset 3px -2px 8px 0px rgba(236, 72, 153, 0.3),
            0px 4px 12px rgba(0, 0, 0, 0.5)
          `;
        }}
      >
        Buy
      </button>

      <p ref={priceRef} style={{ position: 'relative', zIndex: 1, opacity: 0 }}>
        From $1599 or $133/mo for 12 months
      </p>
    </section>
  );
};
export default Hero;
