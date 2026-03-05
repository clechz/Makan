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
      gsap.timeline({
        scrollTrigger: {
          trigger: "#product-viewer",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });
    }
  }, [isMobile]);
  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
    </section>
  );
};

export default ProductViewer;
