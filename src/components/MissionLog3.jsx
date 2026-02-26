import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import coreJava from "/src/assets/coreJava.png";
import javaNptel from "/src/assets/javaNptel.png";
import jsCert from "/src/assets/jsCert.png";
import SWECert from "/src/assets/SWECert.png";
import sqlCert from "/src/assets/sqlCert.png";

export default function MissionLog3() {
  const [selectedCert, setSelectedCert] = useState(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  const opacity = useTransform(smoothScroll, [0, 0.3], [0, 1]);
  const y = useTransform(smoothScroll, [0, 0.3], [80, 0]);

  const certifications = [
    {
      title: "Programming in Core Java",
      issuer: "T4TEQ Software Solutions",
      year: "2025",
      img: coreJava,
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL",
      year: "2025",
      img: javaNptel,
    },
    {
      title: "Certified Software Engineer",
      issuer: "HackerRank",
      year: "2025",
      img: SWECert,
    },
    {
      title: "JavaScript",
      issuer: "HackerRank",
      year: "2025",
      img: jsCert,
    },
    {
      title: "SQL",
      issuer: "HackerRank",
      year: "2024",
      img: sqlCert,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b 
      from-[#2e1065] via-[#1a0f2e] to-[#0a0f1c] 
      overflow-hidden py-32"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] 
        [background-size:50px_50px] opacity-50"
      ></div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center mb-20"
      >
        <p className="text-yellow-400 tracking-[0.3em] text-sm">
          MISSION LOG 03
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mt-6">
          Certifications Archive
        </h2>
      </motion.div>

      <div
        className="relative z-10 max-w-6xl mx-auto grid 
        md:grid-cols-3 gap-10 px-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div
              className="absolute -inset-1 bg-yellow-400/20 
              blur-xl opacity-0 group-hover:opacity-100 
              transition duration-500 rounded-xl"
            ></div>

            <div
              className="relative backdrop-blur-xl bg-white/10 
              border border-white/20 rounded-xl 
              p-8 text-white shadow-2xl 
              transition duration-500 
              group-hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-yellow-400">
                {cert.title}
              </h3>

              <p className="text-gray-300 mt-4">Issued by: {cert.issuer}</p>

              <p className="text-gray-400 mt-2">Year: {cert.year}</p>

              <button
                onClick={() => setSelectedCert(cert)}
                className="mt-6 px-4 py-2 text-sm 
                bg-[var(--gold-rich)] border border-yellow-400/40 
                rounded-lg hover:bg-yellow-400/40 
                transition"
              >
                View Credential
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}

function CertificateModal({ cert, onClose }) {

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      ></div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 max-w-4xl w-[90%] 
        bg-white/10 backdrop-blur-xl 
        border border-white/20 
        rounded-2xl shadow-2xl p-6"
      >
       
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ✕
        </button>

        <h3 className="text-yellow-400 text-lg font-semibold mb-4">
          {cert.title}
        </h3>

        <div className="overflow-hidden rounded-lg">
          <img
            src={cert.img}
            alt={cert.title}
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
