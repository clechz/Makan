import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CleanHeroScene from "./CleanHeroScene";

gsap.registerPlugin(ScrollTrigger);

const ROTATE_WORDS = [
  "the built world",
  "the natural world",
  "the connected world",
  "the changing world",
  "the unseen world",
  "the regulated world",
  "the lived-in world",
  "the commercial world",
];

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [rotateIdx, setRotateIdx] = useState(0);
  const [rotateVisible, setRotateVisible] = useState(true);
  const rotateRef = useRef(null);

  useEffect(() => {
    const windowContainer = document.querySelector(".window-container");
    const heroCopy = document.querySelector(".hero-copy");
    const heroHeader = document.querySelector(".hero-header");

    if (!windowContainer || !heroCopy || !heroHeader) return;

    gsap.set(heroCopy, { yPercent: 100 });

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgress(progress);

        let windowScale;
        if (progress <= 0.5) {
          windowScale = 1 + (progress / 0.5) * 7;
        } else {
          windowScale = 8;
        }
        gsap.set(windowContainer, { scale: windowScale });
        gsap.set(heroHeader, { scale: windowScale, z: progress * 500 });

        let heroCopyY;
        if (progress <= 0.66) {
          heroCopyY = 100;
        } else if (progress >= 1) {
          heroCopyY = 0;
        } else {
          heroCopyY = 100 * (1 - (progress - 0.66) / 0.34);
        }
        gsap.set(heroCopy, { yPercent: heroCopyY });
      },
    });

    // Force ScrollTrigger to refresh after setup
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  // Rotating word effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotateVisible(false);
      setTimeout(() => {
        setRotateIdx((prev) => (prev + 1) % ROTATE_WORDS.length);
        setRotateVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="sky-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <CleanHeroScene scrollProgress={scrollProgress} />
      </div>
      <div className="hero-copy">
        <h1>
          What unfolds here is not a scene, but a duration. A sustained moment
          where scale dissolves, edges soften, and perception lingers longer
          than expected. The frame holds steady while the world behind it
          shifts.
        </h1>
      </div>
      <div className="window-container">
        <img src="/window.png" alt="" />
      </div>
      <div className="hero-header">
        <div className="col">
          <h1>
            Geospatial <br />
            Intelligence
          </h1>
          <p>
            Transform satellite imagery into actionable insights with AI-powered analysis.
            Precision meets innovation in every pixel.
          </p>
        </div>
        <div className="col">
          <p>Observation Mode</p>
          <h1>
            Where distance <br />
            becomes a presence
          </h1>
        </div>
      </div>

      {/* Mobile-only hero bottom — hidden on desktop via CSS */}
      <div className="hero-mobile-bottom">
        <h3>We observe the surface and tell you what to do about it.</h3>
        <p className="hero-mobile-subtitle">
          Intelligence built to understand{"\u00A0\u00A0"}
          <span
            ref={rotateRef}
            className="hero-rotate-word"
            style={{
              opacity: rotateVisible ? 1 : 0,
              filter: rotateVisible ? "blur(0px)" : "blur(8px)",
            }}
          >
            {ROTATE_WORDS[rotateIdx]}.
          </span>
        </p>
        <div className="hero-mobile-scroll-indicator">
          <svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="26" height="42" rx="13" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
            <circle className="hero-scroll-dot" cx="14" cy="12" r="3" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
};
export default Hero;
