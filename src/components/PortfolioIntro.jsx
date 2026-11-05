import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import "./portfolio-intro.css";


const bootLines = [
  "Mounting portfolio interface",
  "Loading developer profile",
  "Indexing selected projects",
  "Preparing digital workspace",
];

export default function PortfolioIntro() {
  const prefersReducedMotion = useReducedMotion();
  const wavePathsRef = useRef([]);
  const wavePointsRef = useRef([Array(10).fill(-14), Array(10).fill(-24)]);
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!visible || prefersReducedMotion || wavePathsRef.current.length !== 2) {
      return undefined;
    }

    const points = wavePointsRef.current;
    const paths = wavePathsRef.current;
    const pointCount = points[0].length;

    // Both curtains begin above the viewport and leave in one consistent direction.
    points[0].fill(-14);
    points[1].fill(-24);

    const render = () => {
      paths.forEach((path, pathIndex) => {
        if (!path) return;
        const values = points[pathIndex];
        const firstY = values[0];
        let d = `M 0 ${firstY} C`;

        for (let index = 0; index < pointCount - 1; index += 1) {
          const x = ((index + 1) / (pointCount - 1)) * 100;
          const controlX = x - 100 / (pointCount - 1) / 2;
          d += ` ${controlX} ${values[index]} ${controlX} ${values[index + 1]} ${x} ${values[index + 1]}`;
        }

        // Close along the bottom edge: the wave always spans the full viewport.
        d += " L 100 100 L 0 100 Z";
        path.setAttribute("d", d);
      });
    };

    render();

    const timeline = gsap.timeline({ onUpdate: render });
    points.forEach((pathPoints, pathIndex) => {
      pathPoints.forEach((_, pointIndex) => {
        timeline.to(
          pathPoints,
          {
            [pointIndex]: 112 + pathIndex * 9,
            duration: 2.2,
            ease: "power2.inOut",
          },
          pointIndex * 0.11 + pathIndex * 0.35
        );
      });
    });

    return () => timeline.kill();
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
            <div className="intro-shape-overlays" aria-hidden="true">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="intro-wave-back" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0c5b40" />
                    <stop offset="100%" stopColor="#123d36" />
                  </linearGradient>
                  <linearGradient id="intro-wave-front" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#45efa0" />
                    <stop offset="100%" stopColor="#087f69" />
                  </linearGradient>
                </defs>
                <path
                  ref={(node) => { wavePathsRef.current[0] = node; }}
                  className="intro-shape-overlay intro-shape-overlay-back"
                  fill="url(#intro-wave-back)"
                  d="M 0 100 C 5 100 5 100 11 100 16 100 16 100 22 100 27 100 27 100 33 100 38 100 38 100 44 100 50 100 50 100 56 100 61 100 61 100 67 100 72 100 72 100 78 100 83 100 83 100 89 100 94 100 94 100 100 100 V 0 H 0"
                />
                <path
                  ref={(node) => { wavePathsRef.current[1] = node; }}
                  className="intro-shape-overlay intro-shape-overlay-front"
                  fill="url(#intro-wave-front)"
                  d="M 0 100 C 5 100 5 100 11 100 16 100 16 100 22 100 27 100 27 100 33 100 38 100 38 100 44 100 50 100 50 100 56 100 61 100 61 100 67 100 72 100 72 100 78 100 83 100 83 100 89 100 94 100 94 100 100 100 V 0 H 0"
                />
              </svg>
            </div>
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
