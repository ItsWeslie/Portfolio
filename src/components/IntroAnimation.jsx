import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../intro-animation.css";

export default function IntroAnimation() {
  const [visible, setVisible] = useState(true);
  const introRef = useRef(null);
  const exitingRef = useRef(false);

  const exitIntro = useCallback(() => {
    if (exitingRef.current || !introRef.current) return;
    exitingRef.current = true;

    gsap.set(introRef.current, {
      clipPath: "circle(150% at 50% 48%)",
      transformOrigin: "50% 48%",
      willChange: "clip-path",
    });

    gsap.to(introRef.current, {
      clipPath: "circle(0% at 50% 48%)",
      duration: 1.25,
      ease: "power4.inOut",
      onComplete: () => setVisible(false),
    });
  }, []);

  useEffect(() => {
    let reduceMotion = false;
    try {
      reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      // Keep the animated intro when matchMedia is unavailable.
    }

    if (reduceMotion) {
      setVisible(false);
      return undefined;
    }

    const timeout = window.setTimeout(exitIntro, 4700);
    return () => window.clearTimeout(timeout);
  }, [exitIntro]);

  if (!visible) return null;

  return (
    <div
      ref={introRef}
      className="cinematic-intro"
      role="status"
      aria-label="Introducing Sam Weslie Prabhakaran"
    >
      <div className="intro-curtain intro-curtain-left" />
      <div className="intro-curtain intro-curtain-right" />

      <div className="intro-content" aria-hidden="true">
        <span className="intro-kicker">PORTFOLIO · 2026</span>
        <div className="intro-name">
          <span className="intro-name-line">SAM WESLIE</span>
          <span className="intro-name-line intro-name-second">PRABHAKARAN<span className="intro-period">.</span></span>
        </div>
        <span className="intro-role">SOFTWARE ENGINEER <i /> BUILDING DIGITAL EXPERIENCES</span>
      </div>

      <div className="intro-footer" aria-hidden="true">
        <span>CHENNAI, INDIA</span>
        <span>DESIGNING · DEVELOPING · DELIVERING</span>
      </div>

      <button className="intro-skip" type="button" onClick={exitIntro} aria-label="Skip intro animation">
        SKIP INTRO <span aria-hidden="true">↗</span>
      </button>
      <div className="intro-progress" aria-hidden="true"><span /></div>
    </div>
  );
}
