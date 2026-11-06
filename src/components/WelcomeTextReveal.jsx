import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const firstLine = "Welcome to my";
const secondLine = "Portfolio.";

function CharacterLine({ text, className }) {
  return (
    <span className={className} aria-hidden="true">
      {Array.from(text).map((character, index) => (
        <span className="welcome-char" key={index}>{character === " " ? "\u00a0" : character}</span>
      ))}
    </span>
  );
}

export default function WelcomeTextReveal() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const context = gsap.context(() => {
      const chars = root.querySelectorAll(".welcome-char");
      const timeline = gsap.timeline();

      timeline.fromTo(root.querySelector(".welcome-track"),
        { x: window.innerWidth * 0.72 },
        { x: 0, duration: 1.15, ease: "power3.out" },
        0
      );
      timeline.fromTo(chars,
        {
          autoAlpha: 0,
          yPercent: () => gsap.utils.random(-180, 180),
          rotation: () => gsap.utils.random(-20, 20),
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          rotation: 0,
          duration: 0.9,
          stagger: { each: 0.055, from: "start" },
          ease: "back.out(1.2)",
        },
        0.08
      );
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div className="welcome-reveal" ref={rootRef} role="img" aria-label="Welcome to my Portfolio.">
      <div className="welcome-track">
        <CharacterLine text={firstLine} className="welcome-line welcome-line-primary" />
        <CharacterLine text={secondLine} className="welcome-line welcome-line-accent" />
      </div>
    </div>
  );
}
