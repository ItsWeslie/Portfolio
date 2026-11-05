import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import "./portfolio-intro.css";

export default function PortfolioIntro() {
  const prefersReducedMotion = useReducedMotion();
  const wavePathsRef = useRef([]);
  const wavePointsRef = useRef([Array(10).fill(-14), Array(10).fill(-24)]);
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!visible || phase < 5 || prefersReducedMotion || wavePathsRef.current.length !== 2) {
      return undefined;
    }

    const points = wavePointsRef.current;
    const paths = wavePathsRef.current;
    const pointCount = points[0].length;
    points[0].fill(-14);
    points[1].fill(-24);

    const render = () => {
      paths.forEach((path, pathIndex) => {
        if (!path) return;
        const values = points[pathIndex];
        let d = `M 0 ${values[0]} C`;
        for (let index = 0; index < pointCount - 1; index += 1) {
          const x = ((index + 1) / (pointCount - 1)) * 100;
          const controlX = x - 100 / (pointCount - 1) / 2;
          d += ` ${controlX} ${values[index]} ${controlX} ${values[index + 1]} ${x} ${values[index + 1]}`;
        }
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
  }, [visible, phase, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(false);
      return undefined;
    }
    if (!visible) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timers = [
      window.setTimeout(() => setPhase(1), 2000),
      window.setTimeout(() => setPhase(2), 3900),
      window.setTimeout(() => setPhase(3), 5600),
      window.setTimeout(() => setPhase(4), 8000),
      window.setTimeout(() => setPhase(5), 9900),
      window.setTimeout(() => setVisible(false), 14000),
    ];

    return () => {
      timers.forEach(window.clearTimeout);
      document.body.style.overflow = previousOverflow;
    };
  }, [prefersReducedMotion, visible]);

  const skipIntro = () => setVisible(false);

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
              animate={{ rotate: phase >= 4 ? 150 : 0, scale: phase >= 4 ? 1.18 : 0.8 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="intro-orbit intro-orbit-two"
              animate={{ rotate: phase >= 4 ? -115 : 0, scale: phase >= 4 ? 1.05 : 0.72 }}
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
              {phase === 0 && (
                <motion.section
                  key="dots"
                  className="intro-dots-scene"
                  aria-label="Bouncing dots"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.86, filter: "blur(8px)" }}
                  transition={{ duration: 0.35 }}
                >
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      className="intro-bouncing-dot"
                      key={dot}
                      animate={{ y: [0, -18, 0], scaleY: [1, 1.08, 0.94, 1] }}
                      transition={{ duration: 1.12, delay: dot * 0.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))}
                </motion.section>
              )}

              {phase === 1 && (
                <motion.section
                  key="eyes"
                  className="intro-eyes-scene"
                  aria-label="Playful cartoon eyes looking up"
                  initial={{ opacity: 0, y: 12, scale: 0.82 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(7px)" }}
                  transition={{ type: "spring", stiffness: 115, damping: 20, duration: 0.95 }}
                >
                  {[0, 1].map((eye) => (
                    <motion.span
                      className="intro-cartoon-eye"
                      key={eye}
                      animate={{ scaleY: [1, 1, 0.16, 1] }}
                      transition={{ duration: 0.85, times: [0, 0.72, 0.84, 1], delay: eye * 0.1 }}
                    >
                      <motion.span
                        className="intro-eye-pupil"
                        animate={{ y: -9, x: eye === 0 ? 2 : -2 }}
                        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <span className="intro-eye-glint" />
                    </motion.span>
                  ))}
                </motion.section>
              )}

              {phase === 2 && (
                <motion.section
                  key="hi"
                  className="intro-hi-scene"
                  initial={{ opacity: 0, y: 22, scale: 0.72, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, y: -12, scale: 1.08, filter: "blur(8px)" }}
                  transition={{ type: "spring", stiffness: 105, damping: 19, duration: 1.05 }}
                >
                  <span className="intro-hi-sparkle" aria-hidden="true">✳</span>
                  <h1>hi<span>!</span></h1>
                  <span className="intro-hi-sparkle intro-hi-sparkle-two" aria-hidden="true">✳</span>
                </motion.section>
              )}

              {phase === 3 && (
                <motion.section
                  key="name"
                  className="intro-welcome"
                  initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
                  transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="intro-eyebrow">NICE TO MEET YOU</p>
                  <h1>I'M WESLIE<span>.</span></h1>
                  <p className="intro-role">SOFTWARE ENGINEER</p>
                </motion.section>
              )}

              {phase >= 4 && (
                <motion.section
                  key="morph"
                  className="intro-morph-copy"
                  initial={{ opacity: 0, scale: 0.68, filter: "blur(16px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.12, filter: "blur(10px)" }}
                  transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="intro-eyebrow">LET'S MAKE SOMETHING MATTER.</span>
                  <motion.div
                    className="intro-monogram"
                    layout
                    animate={{ rotate: [0, -8, 8, 0], scale: [0.8, 1.12, 1] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  >W</motion.div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>

          <div className="intro-footer">
            <span>BUILD <i>·</i> SOLVE <i>·</i> IMPROVE</span>
            <span>CHENNAI, INDIA <b>© 2026</b></span>
          </div>
          <div className="intro-bottom-progress" aria-hidden="true">
            <motion.span animate={{ width: `${Math.min(100, ((phase + 1) / 6) * 100)}%` }} transition={{ duration: 0.35 }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
