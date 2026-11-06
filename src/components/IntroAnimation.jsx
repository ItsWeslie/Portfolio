import { useEffect, useState } from "react";
import "../intro-animation.css";

const INTRO_KEY = "sam-portfolio-intro-seen";

export default function IntroAnimation() {
  const [visible, setVisible] = useState(() => {
    try {
      return !sessionStorage.getItem(INTRO_KEY);
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!visible) return undefined;

    const finish = () => {
      try {
        sessionStorage.setItem(INTRO_KEY, "1");
      } catch {
        // The animation still works when storage is unavailable.
      }
      setVisible(false);
    };

    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        finish();
        return undefined;
      }
    } catch {
      // Continue with the standard animation if matchMedia is unavailable.
    }

    const timeout = window.setTimeout(finish, 4700);
    return () => window.clearTimeout(timeout);
  }, [visible]);

  if (!visible) return null;

  const skip = () => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // Ignore storage restrictions.
    }
    setVisible(false);
  };

  return (
    <div className="cinematic-intro" role="status" aria-label="Introducing Sam Weslie Prabhakaran">
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

      <button className="intro-skip" type="button" onClick={skip} aria-label="Skip intro animation">
        SKIP INTRO <span aria-hidden="true">↗</span>
      </button>
      <div className="intro-progress" aria-hidden="true"><span /></div>
    </div>
  );
}
