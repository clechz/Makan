import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis();

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after everything loads
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main style={{ overflow: 'hidden' }}>
      <NavBar />
      <div style={{ height: '600vh', position: 'relative' }}>
        <Hero />
      </div>
      <Performance />
      <ProductViewer />
      <Showcase />
    </main>
  );
};

export default App;
