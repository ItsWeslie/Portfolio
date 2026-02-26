import { motion } from "framer-motion";
import { useState } from "react";

export default function Education2() {
  const [active, setActive] = useState(null);

  const modules = [
    {
      id: "pg",
      title: "MCA",
      year: "2023–2025",
      gpa: "Percentage: 73%",
      subjects: "DSA, DBMS, Java",
      offsetX: -320,
      offsetY: -120,
      width: 220,
    },
    {
      id: "ug",
      title: "B.Sc Computer Science",
      year: "2020–2023",
      gpa: "Percentage: 75%",
      subjects: "Java, SQL, C",
      offsetX: -220,
      offsetY: 220,
      width: 220,
    },
    {
      id: "hsc",
      title: "HSC",
      year: "2018–2020",
      gpa: "Percentage: 74%",
      subjects: "Tamil, English, Maths, Physics, Chemistry, Computer Science",
      offsetX: 300,
      offsetY: -90,
      width: 180,
    },
    {
      id: "sslc",
      title: "SSLC",
      year: "2017–2018",
      gpa: "Percentage: 81%",
      subjects: "Tamil, English, Science, Maths, Social",
      offsetX: 240,
      offsetY: 170,
      width: 150,
    },
  ];

  return (
    <section
      id="education"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2e1065] via-[#1a0f2e] to-[#0a0f1c]  overflow-hidden pb-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-30 pointer-events-none" />

      <div className="absolute top-16 text-center z-20">
        <p className="text-yellow-400 tracking-[0.3em] text-sm">
          MISSION LOG 05
        </p>
        <h2 className="text-6xl font-bold text-white mt-6">
          Education Station
        </h2>
      </div>

      <div className="relative w-full h-[650px] flex items-center justify-center mt-30">
        <motion.div
          animate={{ scale: active ? 1.08 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute w-44 h-44 rounded-full 
            bg-gradient-to-br from-yellow-300 via-orange-400 to-yellow-200
            shadow-[0_0_120px_60px_rgba(255,200,0,0.8)]
            flex items-center justify-center text-white text-xs font-poppins font-bold text-center px-4 z-20"
        >
          SOFTWARE ENGINEER
        </motion.div>

        <div className="absolute w-72 h-72 border-2 border-[var(--gold-classic)]/40 rounded-full rotate-ring" />

        <svg
          className="absolute w-full h-full pointer-events-none"
          overflow="visible"
        >
          {modules.map((m) => (
            <Beam
              key={m.id}
              active={active === m.id}
              x={m.offsetX}
              y={m.offsetY}
            />
          ))}
        </svg>

        {modules.map((m) => (
          <DockModule
            key={m.id}
            data={m}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </section>
  );
}

function DockModule({ data, active, setActive }) {
  const isActive = active === data.id;

  return (
    <motion.div
      onMouseEnter={() => setActive(data.id)}
      onMouseLeave={() => setActive(null)}
      cursor="pointer"
      initial={{ x: data.offsetX, y: data.offsetY, opacity: 0 }}
      animate={{ x: data.offsetX, y: data.offsetY, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ opacity: { duration: 0.5 } }}
      className="absolute cursor-pointer"
      style={{
        top: "50%",
        left: "50%",
        marginTop: -(40 + (isActive ? 40 : 0)),
        marginLeft: -data.width / 2,
        width: data.width,
        zIndex: isActive ? 30 : 10,
      }}
    >
      <div
        className="relative backdrop-blur-xl bg-white/10 
          border border-white
          rounded-2xl p-5 text-white 
          shadow-[0_0_25px_var(--gold-rich)]"
      >
        <div className="font-bold text-lg">{data.title}</div>
        <div className="text-xs opacity-70">{data.year}</div>

        <div
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5
          bg-[var(--gold-rich)] rounded-full
          shadow-[0_0_30px_var(--gold-rich)]"
        />

        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-xs bg-white/10 border border-white/20 rounded-lg p-3"
          >
            <p className="font-semibold">{data.gpa}</p>
            <p className="mt-1 opacity-80">{data.subjects}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function Beam({ active, x, y }) {
  return (
    <>
      <line
        x1="50%"
        y1="50%"
        x2={`calc(50% + ${x}px)`}
        y2={`calc(50% + ${y}px)`}
        stroke="var(--gold-light)"
        strokeWidth={active ? 4 : 2}
        opacity={active ? 1 : 0.3}
      />
      {active && (
        <motion.circle
          cx="50%"
          cy="50%"
          r="6"
          fill="var(--gold-light)"
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x, y, opacity: [1, 1, 0] }}
          transition={{ duration: 1.2, ease: "linear" }}
        />
      )}
    </>
  );
}
