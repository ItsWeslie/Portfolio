import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import "./portfolio-intro.css";

gsap.registerPlugin(MorphSVGPlugin);

const bootLines = [
  "Mounting portfolio interface",
  "Loading developer profile",
  "Indexing selected projects",
  "Preparing digital workspace",
];

export default function PortfolioIntro() {
  const prefersReducedMotion = useReducedMotion();
  const morphSvgRef = useRef(null);
  const morphPathRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!visible || prefersReducedMotion || !morphPathRef.current || !morphSvgRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const morphTimeline = gsap.timeline({
        repeat: -1,
        defaults: { duration: 1.85, ease: "sine.inOut" },
      });

      morphTimeline
        .to(morphPathRef.current, {
          morphSVG: {
            shape: "M300 24 C350 24 376 90 426 96 C488 104 552 154 532 220 C512 286 450 292 422 340 C390 394 316 406 264 370 C214 336 166 370 116 326 C60 276 88 208 116 164 C146 116 194 114 220 70 C240 38 268 24 300 24 Z",
            type: "rotational",
            smooth: true,
          },
        })
        .to(morphPathRef.current, {
          morphSVG: {
            shape: "M300 38 C348 72 432 40 470 104 C510 170 466 202 500 258 C534 318 452 370 388 352 C330 336 320 402 250 378 C184 356 194 304 130 282 C64 258 82 178 138 148 C194 118 232 2 300 38 Z",
            type: "rotational",
            smooth: true,
          },
        })
        .to(morphPathRef.current, {
          morphSVG: {
            shape: "M300 48 C370 34 442 78 486 132 C538 196 514 270 466 318 C416 370 344 390 274 368 C198 345 112 328 88 258 C63 185 116 112 180 77 C218 56 258 56 300 48 Z",
            type: "rotational",
            smooth: true,
          },
        });

      gsap.to(morphSvgRef.current, {
        rotation: 12,
        scale: 1.08,
        duration: 5.55,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "50% 50%",
      });
    }, morphSvgRef);

    return () => ctx.revert();
  }, [visible, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(false);
      return undefined;
    }

    if (!visible) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timers = [
      window.setTimeout(() => setPhase(1), 750),
      window.setTimeout(() => setPhase(2), 2500),
      window.setTimeout(() => setPhase(3), 4200),
      window.setTimeout(() => setPhase(4), 6200),
      window.setTimeout(() => {
        setVisible(false);
      }, 8000),
    ];

    return () => {
      timers.forEach(window.clearTimeout);
      document.body.style.overflow = previousOverflow;
    };
  }, [prefersReducedMotion, visible]);

  const skipIntro = () => {
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="portfolio-intro"
          role="dialog"
          aria-modal="true"
          aria-label="Welcome to Sam Weslie Prabhakaran's portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.42, ease: "easeInOut" } }}
        >
          <div className="portfolio-intro-grid" aria-hidden="true" />
          <div className={`intro-atmosphere phase-${phase}`} aria-hidden="true">
            <motion.span
              className="intro-orbit intro-orbit-one"
              animate={{ rotate: phase >= 2 ? 150 : 0, scale: phase >= 2 ? 1.18 : 0.8 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="intro-orbit intro-orbit-two"
              animate={{ rotate: phase >= 2 ? -115 : 0, scale: phase >= 2 ? 1.05 : 0.72 }}
              transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
            />
            <svg
              ref={morphSvgRef}
              className="intro-morph-svg"
              viewBox="0 0 600 420"
              role="presentation"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="intro-morph-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#35e99a" stopOpacity=".42" />
                  <stop offset="52%" stopColor="#24b98e" stopOpacity=".22" />
                  <stop offset="100%" stopColor="#398bd0" stopOpacity=".16" />
                </linearGradient>
              </defs>
              <path
                ref={morphPathRef}
                className="intro-morph-path"
                d="M300 48 C370 34 442 78 486 132 C538 196 514 270 466 318 C416 370 344 390 274 368 C198 345 112 328 88 258 C63 185 116 112 180 77 C218 56 258 56 300 48 Z"
                fill="url(#intro-morph-gradient)"
              />
            </svg>
          </div>

          <div className="intro-topline">
            <span className="intro-wordmark"><i /> WESLIE.OS <small>PORTFOLIO SYSTEM</small></span>
            <span className="intro-version">V 1.0.0 <b>● ONLINE</b></span>
          </div>

          <button className="intro-skip" type="button" onClick={skipIntro}>
            Skip intro <span aria-hidden="true">↗</span>
          </button>

          <div className="intro-content">
            <AnimatePresence mode="wait" initial={false}>
              {phase <= 1 && (
                <motion.section
                  key="terminal"
                  className="intro-terminal"
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.96, filter: "blur(8px)" }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="intro-window-bar">
                    <span /><span /><span />
                    <b>sam@weslie: ~/portfolio</b>
                  </div>
                  <div className="intro-terminal-body">
                    <p className="intro-terminal-kicker">INITIALIZING PERSONAL WORKSPACE</p>
                    {bootLines.slice(0, phase === 0 ? 1 : 4).map((line, index) => (
                      <motion.p
                        className="intro-boot-line"
                        key={line}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.13, duration: 0.25 }}
                      >
                        <span>$</span> {line}<b> [OK]</b>
                      </motion.p>
                    ))}
                    <div className="intro-progress-row">
                      <div className="intro-progress"><motion.span animate={{ width: phase === 0 ? "28%" : "100%" }} transition={{ duration: 0.65 }} /></div>
                      <strong>{phase === 0 ? "28" : "100"}%</strong>
                    </div>
                  </div>
                </motion.section>
              )}

              {phase === 2 && (
                <motion.section
                  key="morph"
                  className="intro-morph-copy"
                  initial={{ opacity: 0, scale: 0.72, filter: "blur(14px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.12, filter: "blur(10px)" }}
                  transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="intro-eyebrow">SYSTEM READY · IDENTITY SYNCHRONIZED</span>
                  <motion.div
                    className="intro-monogram"
                    layout
                    animate={{ rotate: [0, -8, 8, 0], scale: [0.8, 1.12, 1] }}
                    transition={{ duration: 0.85, ease: "easeInOut" }}
                  >W</motion.div>
                </motion.section>
              )}

              {phase >= 3 && (
                <motion.section
                  key="welcome"
                  className="intro-welcome"
                  initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="intro-eyebrow">HELLO, WORLD.</p>
                  <h1>Sam Weslie <span>Prabhakaran</span></h1>
                  <p className="intro-role">SOFTWARE ENGINEER</p>
                  <motion.div
                    className="intro-enter"
                    initial={{ opacity: 0, y: 12, scale: 0.92 }}
                    animate={{ opacity: phase >= 4 ? 1 : 0, y: phase >= 4 ? 0 : 12, scale: phase >= 4 ? 1 : 0.92 }}
                    transition={{ duration: 0.4 }}
                  >
                    ENTERING DIGITAL SPACE <span aria-hidden="true">→</span>
                  </motion.div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>

          <div className="intro-footer">
            <span>BUILD <i>·</i> SOLVE <i>·</i> IMPROVE</span>
            <span>CHENNAI, INDIA <b>© 2026</b></span>
          </div>
          <div className="intro-bottom-progress" aria-hidden="true">
            <motion.span animate={{ width: `${Math.min(100, (phase + 1) * 20)}%` }} transition={{ duration: 0.35 }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
