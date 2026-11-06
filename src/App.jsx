import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./App.css";
import "./education-record.css";
import "./about-avatar.css";
import "./project-screenshots.css";
import "./apple-terminal.css";
import { Toaster } from "sonner";
import SoftwarePortfolio from "./pages/SoftwarePortfolio";
import AboutAvatar from "./components/AboutAvatar";
import ProjectExplorerMount from "./components/ProjectExplorerMount";
import WesMind, { WesMindMark } from "./components/WesMind";
import DevelopmentTicker from "./components/DevelopmentTicker";
import IntroAnimation from "./components/IntroAnimation";

function App() {
  const [wesMindOpen, setWesMindOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const open = () => setWesMindOpen(true);
    window.addEventListener("open-wesmind", open);
    return () => window.removeEventListener("open-wesmind", open);
  }, []);

  useEffect(() => {
    if (!introComplete || !portfolioRef.current) return undefined;

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(portfolioRef.current, {
        visibility: "visible",
        clipPath: "inset(0% round 0px)",
        scale: 1,
        filter: "blur(0px)",
      });
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        portfolioRef.current,
        {
          visibility: "visible",
          clipPath: "circle(0% at 50% 48%)",
          scale: 0.94,
          filter: "blur(18px)",
          transformOrigin: "50% 50%",
        },
        {
          clipPath: "circle(150% at 50% 48%)",
          scale: 1,
          filter: "blur(0px)",
          duration: 1.45,
          ease: "power4.inOut",
          clearProps: "filter,transform",
        }
      );
    }, portfolioRef);

    return () => context.revert();
  }, [introComplete]);

  return (
    <>
      <IntroAnimation onComplete={() => setIntroComplete(true)} />
      <div
        ref={portfolioRef}
        className="portfolio-entry"
        style={{ visibility: "hidden" }}
      >
        <Toaster position="bottom-right" richColors />
        <DevelopmentTicker />
        <SoftwarePortfolio />
        <AboutAvatar />
        <ProjectExplorerMount />
        {!wesMindOpen && (
          <button className="wes-float" onClick={() => setWesMindOpen(true)} aria-label="Ask WesMind">
            <WesMindMark />
            <span className="wes-float-label">Ask WesMind</span>
          </button>
        )}
        <WesMind open={wesMindOpen} onClose={() => setWesMindOpen(false)} />
      </div>
    </>
  );
}

export default App;
