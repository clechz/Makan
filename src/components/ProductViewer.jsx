import { Canvas } from "@react-three/fiber";
import useMacbookStore from "../store";
import clsx from "clsx";
import StudioLights from "./three/StudioLights";
import MacbookModel16 from "./models/Macbook-16";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProductViewer = () => {
  const { color, setColor } = useMacbookStore();

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isMobile) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#product-viewer",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Fade in the screen overlay near the end of the scroll
      timeline.to(".screen-overlay", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        onStart: () => {
          document.querySelector(".screen-overlay")?.classList.add("active");
        },
      }, 0.85); // Start at 85% through the animation

    }
  }, [isMobile]);
  return (
    <section id="product-viewer">
      <h2>Query the world.</h2>

      <div className="canvas-container">
        <Canvas
          id="canvas"
          camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
          gl={{ antialias: false, powerPreference: "high-performance" }}
          dpr={1}
        >
          <StudioLights />

          <MacbookModel16
            scale={isMobile ? 0.05 : 0.08}
            position={[0, -0.5, 0]}
          />
        </Canvas>

        <div className="screen-overlay">
          <div className="screen-cta">
            <a href="/demo">Book a Demo</a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProductViewer;
