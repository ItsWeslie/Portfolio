import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import "./portfolio-intro.css";

const SESSION_KEY = "weslie-os-intro-seen";

const bootLines = [
  "Mounting portfolio interface",
  "Loading developer profile",
  "Indexing selected projects",
  "Preparing digital workspace",
];

function wasSeenThisSession() {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeenThisSession() {
  try {
    window.sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // The intro still works when session storage is unavailable.
  }
}

export default function PortfolioIntro() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => !wasSeenThisSession());
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(false);
      markSeenThisSession();
      return undefined;
    }

    if (!visible) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timers = [
      window.setTimeout(() => setPhase(1), 450),
      window.setTimeout(() => setPhase(2), 1450),
      window.setTimeout(() => setPhase(3), 2350),
      window.setTimeout(() => setPhase(4), 3550),
      window.setTimeout(() => {
        markSeenThisSession();
        setVisible(false);
      }, 4850),
    ];

    return () => {
      timers.forEach(window.clearTimeout);
      document.body.style.overflow = previousOverflow;
    };
  }, [prefersReducedMotion, visible]);

  const skipIntro = () => {
    markSeenThisSession();
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
            <motion.span
              className="intro-morph-shape"
              animate={{
                width: phase >= 2 ? "min(76vw, 760px)" : 92,
                height: phase >= 2 ? "min(42vw, 380px)" : 92,
                borderRadius: phase >= 2 ? "48% 52% 34% 66% / 58% 35% 65% 42%" : "28px",
                rotate: phase >= 2 ? -14 : 45,
                opacity: phase >= 2 ? 0.34 : 0.7,
              }}
              transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            />
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
