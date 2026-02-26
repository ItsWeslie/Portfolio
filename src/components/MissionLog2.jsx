import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useRef, useEffect } from "react";
import planet1 from "/src/assets/planet5.jpg";
import planet2 from "/src/assets/planet2.webp";
import planet3 from "/src/assets/planet3.jpg";
import planet4 from "/src/assets/planet4.jpg";

export default function MissionLog2() {
  const sectionRef = useRef(null);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  // SVG path animation
  const pathLength = useTransform(smoothScroll, [0, 1], [0, 1]);

  // Energy dot movement
  const energyOffset = useTransform(smoothScroll, [0, 1], [0, 1]);

  // Mouse tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const tiltX = useTransform(mouseY, [-30, 30], [10, -10]);
  const tiltY = useTransform(mouseX, [-30, 30], [-10, 10]);

  const roadmap = [
    {
      title: "Frontend Technologies",
      experience: "1+ Years",
      skills: ["React", "Tailwind", "JavaScript"],
      position: { top: "15%", left: "30%" },
      icon: planet1,
    },
    {
      title: "Backend Systems",
      experience: "2+ Years",
      skills: ["Java", "Spring Boot"],
      position: { top: "40%", left: "65%" },
      icon: planet2,
    },
    {
      title: "Database",
      experience: "1.5 Years",
      skills: ["MySQL"],
      position: { top: "65%", left: "35%" },
      icon: planet3,
    },
    {
      title: "Web Foundations",
      experience: "1+ Years",
      skills: ["HTML", "CSS"],
      position: { top: "85%", left: "60%" },
      icon: planet4,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[150vh] bg-gradient-to-b 
      from-[#0a0f1c] via-[#1a0f2e] to-[#2e1065] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] 
        [background-size:40px_40px] opacity-40"
      ></div>

      <div className="relative z-10 text-center pt-32">
        <p className="text-yellow-400 tracking-[0.3em] text-sm">
          MISSION LOG 02
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mt-6">
          Skills and Experience
        </h2>
      </div>

      <motion.div
        style={{ rotateX: tiltX, rotateY: tiltY }}
        className="relative h-[1200px] mt-32"
      >
        <svg viewBox="0 0 1000 1200" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="energyGradient">
              <stop offset="0%" stopColor="var(--gold-light)" />
              <stop offset="50%" stopColor="var(--gold-rich)" />
              <stop offset="100%" stopColor="var(--gold-deep)" />
            </linearGradient>
          </defs>

          <motion.path
            d="M300 0 Q700 300 400 600 Q200 900 600 1200"
            stroke="url(#energyGradient)"
            strokeWidth="4"
            fill="none"
            style={{ pathLength }}
          />

          <motion.circle
            r="12"
            fill="#facc15"
            style={{
              offsetPath: "path('M300 0 Q700 300 400 600 Q200 900 600 1200')",
              offsetDistance: energyOffset,
            }}
          />
        </svg>

        {roadmap.map((item, index) => (
          <Planet key={index} data={item} />
        ))}
      </motion.div>
    </section>
  );
}

function Planet({ data }) {
  return (
    <div
      className="absolute group"
      style={{
        top: data.position.top,
        left: data.position.left,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        className="
        relative w-28 h-28 rounded-full
        overflow-hidden
        transition duration-500
        group-hover:scale-110
        group-hover:shadow-[0_0_80px_rgba(250,204,21,0.8)]
        shadow-[0_0_40px_rgba(250,204,21,0.4)]
        "
        style={{
          backgroundImage: `url(${data.icon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 rounded-full border border-white/20"></div>

        <div
          className="absolute top-0 left-0 w-full h-full 
    bg-gradient-to-br from-white/30 via-transparent to-transparent 
    opacity-40"
        ></div>
      </motion.div>

      <div
        className="absolute left-32 top-1/2 -translate-y-1/2 
        opacity-0 group-hover:opacity-100 
        transition duration-500"
      >
        <div
          className="w-64 p-6 rounded-xl 
          backdrop-blur-xl bg-white/10 
          border border-white/20 
          shadow-2xl text-white"
        >
          <h3 className="text-lg font-semibold text-yellow-400">
            {data.title}
          </h3>
          <p className="text-sm text-gray-300 mt-2">
            Experience: {data.experience}
          </p>
          <ul className="mt-3 text-sm space-y-1">
            {data.skills.map((skill, i) => (
              <li key={i}>• {skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
