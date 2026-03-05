import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const videoRef = useRef(null);
  const maskImgRef = useRef(null);

  // Match video height to mask image height
  useEffect(() => {
    const matchHeight = () => {
      if (videoRef.current && maskImgRef.current) {
        const maskHeight = maskImgRef.current.offsetHeight;
        videoRef.current.style.height = `${maskHeight}px`;
      }
    };

    matchHeight();
    window.addEventListener('resize', matchHeight);

    // Wait for image to load
    if (maskImgRef.current) {
      maskImgRef.current.onload = matchHeight;
    }

    return () => window.removeEventListener('resize', matchHeight);
  }, []);

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .fromTo(".mask img",
          { opacity: 0, scale: 1 },
          { opacity: 1, scale: 1, ease: "power1.in" }
        )
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media">
        {/* Black background layer */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#000',
          zIndex: 0
        }} />

        <video ref={videoRef} src="/videos/game.mp4" loop muted autoPlay playsInline style={{ borderRadius: '24px' }} />
        <div className="mask">
          <img ref={maskImgRef} src="/makan-mask.jpg" style={{ borderRadius: '24px' }} />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>AI-Powered Intelligence</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing{" "}
                <span className="text-white">
                  Makan, the next generation of geospatial AI
                </span>
                . Makan transforms satellite imagery into actionable intelligence.
              </p>
              <p>
                It powers real-time analysis across construction, land use, and infrastructure,
                enabling you to make data-driven decisions with unprecedented accuracy and speed.
                All powered by cutting-edge AI models.
              </p>
              <p>
                Advanced computer vision and deep learning deliver breathtaking precision
                in object detection, classification, and temporal analysis. State-of-the-art
                algorithms bring enterprise-grade geospatial intelligence to your fingertips.
              </p>
              <p className="text-primary">
                Explore Makan Platform
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>95% accuracy</h3>
              <p>in construction detection and classification</p>
            </div>
            <div className="space-y-2">
              <p>Process</p>
              <h3>1000+ km²</h3>
              <p>of satellite imagery per day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Showcase;
