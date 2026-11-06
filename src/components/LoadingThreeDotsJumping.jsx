import { motion } from "motion/react";

const dotVariants = {
  jump: {
    y: -18,
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

export default function LoadingThreeDotsJumping() {
  return (
    <motion.div
      animate="jump"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className="loading-dots"
      role="status"
      aria-label="Loading portfolio"
    >
      <motion.span className="loading-dot" variants={dotVariants} />
      <motion.span className="loading-dot" variants={dotVariants} />
      <motion.span className="loading-dot" variants={dotVariants} />
      <style>{`
        .loading-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        .loading-dot {
          display: block;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--accent, #087a4c);
          will-change: transform;
        }
        .portfolio-loader {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 22px;
          color: var(--foreground, #fff);
          background: var(--background, #09090b);
          font-family: inherit;
        }
        .portfolio-loader-label {
          font-family: inherit;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.4;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          opacity: 0.65;
        }
        @media (prefers-reduced-motion: reduce) {
          .loading-dot { animation: none; }
        }
      `}</style>
    </motion.div>
  );
}
