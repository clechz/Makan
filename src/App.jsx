import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Performance />
      <Showcase />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
