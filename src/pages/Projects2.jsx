import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Employee Management System",
    description: "Manage workforce with role-based access and analytics.",
    github: "https://github.com/ItsWeslie/EMS",
  },
  {
    title: "Online Bus Pass Management System",
    description: "Digital bus pass management for college students",
    github: "https://github.com/ItsWeslie/Online-Bus-Pass-Management-System",
  },
  {
    title: "Student Result Management System",
    description: "Automated result publishing system",
    github: "https://github.com/ItsWeslie/StudentsResultManagementSystem",
  },
  {
    title: "Airline Ticket Reservation System",
    description: "Flight booking simulation with admin dashboard.",
    github: "https://github.com/ItsWeslie/AirLineTicketReservationSystem",
  },
];

export default function Projects2() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const getPosition = (i) => {
    if (i === index) return "center";
    if (i === (index - 1 + projects.length) % projects.length) return "left";
    if (i === (index + 1) % projects.length) return "right";
    return "hidden";
  };

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="project"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0f1c] via-[#1a0f2e] to-[#2e1065]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>

      <div className="relative z-10 text-center mb-20">
        <p className="text-yellow-400 tracking-[0.3em] text-sm">
          MISSION LOG 04
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mt-6">
          Projects Center
        </h2>
      </div>

      <div
        className="relative w-full max-w-6xl h-[450px] flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={prev}
          className="absolute left-5 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition"
        >
          <ChevronLeft className="text-white" />
        </button>

        <button
          onClick={next}
          className="absolute right-5 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition"
        >
          <ChevronRight className="text-white" />
        </button>

        {projects.map((project, i) => {
          const position = getPosition(i);

          let styles = {};

          if (position === "center") {
            styles = {
              x: 0,
              scale: 1,
              opacity: 1,
              zIndex: 20,
            };
          } else if (position === "left") {
            styles = {
              x: -320,
              scale: 0.8,
              opacity: 0.5,
              zIndex: 10,
            };
          } else if (position === "right") {
            styles = {
              x: 320,
              scale: 0.8,
              opacity: 0.5,
              zIndex: 10,
            };
          } else {
            styles = {
              opacity: 0,
              scale: 0.6,
              zIndex: 0,
            };
          }

          return (
            <motion.div
              key={i}
              animate={styles}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="absolute w-full max-w-md p-8 text-center
              backdrop-blur-xl bg-white/10
              border border-white/20
              rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <h3 className="text-2xl font-bold text-[var(--gold-rich)] mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6">{project.description}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-white/20 border border-white/30 text-white rounded-lg hover:bg-white/30 transition"
              >
                View on GitHub
              </a>
            </motion.div>
          );
        })}
      </div>

      <div className="flex gap-3 mt-10">
        {projects.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index
                ? "bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
