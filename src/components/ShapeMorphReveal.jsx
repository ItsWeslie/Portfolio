import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const POINT_COUNT = 10;
const PATH_COUNT = 2;
const POINT_DELAY = 0.28;
const PATH_DELAY = 0.22;

function createPath(points) {
  let d = `M 0 ${points[0]} C`;
  for (let index = 0; index < POINT_COUNT - 1; index += 1) {
    const x = ((index + 1) / (POINT_COUNT - 1)) * 100;
    const controlX = x - (100 / (POINT_COUNT - 1)) / 2;
    d += ` ${controlX} ${points[index]} ${controlX} ${points[index + 1]} ${x} ${points[index + 1]}`;
  }
  return `${d} V 0 H 0`;
}

export default function ShapeMorphReveal({ onComplete }) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete?.();
      return undefined;
    }

    const paths = Array.from(root.querySelectorAll(".shape-morph-path"));
    const allPoints = Array.from({ length: PATH_COUNT }, () => Array(POINT_COUNT).fill(100));

    const render = () => {
      paths.forEach((path, pathIndex) => {
        path.setAttribute("d", createPath(allPoints[pathIndex]));
      });
    };

    render();

    const timeline = gsap.timeline({
      onUpdate: render,
      onComplete: () => onComplete?.(),
      defaults: { duration: 0.95, ease: "power2.inOut" },
    });

    for (let pathIndex = PATH_COUNT - 1; pathIndex >= 0; pathIndex -= 1) {
      const points = allPoints[pathIndex];
      const pathDelay = (PATH_COUNT - pathIndex - 1) * PATH_DELAY;

      for (let pointIndex = 0; pointIndex < POINT_COUNT; pointIndex += 1) {
        timeline.to(
          points,
          { [pointIndex]: 0 },
          pathDelay + Math.random() * POINT_DELAY
        );
      }
    }

    return () => timeline.kill();
  }, [onComplete]);

  return (
    <svg
      ref={rootRef}
      className="shape-morph-reveal"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path className="shape-morph-path shape-morph-base" />
      <path className="shape-morph-path shape-morph-accent" />
    </svg>
  );
}
