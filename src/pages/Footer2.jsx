import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer2() {
  const [showTop, setShowTop] = useState(false);

  const navigationDetails = [
    { section: "Home", id: "#home" },
    { section: "About", id: "#about" },
    { section: "Projects", id: "#projects" },
    { section: "Education", id: "#education" },
    { section: "Achievements", id: "#achievements" },
    { section: "Contact", id: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0A0F1C] to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:60px_60px] opacity-20 pointer-events-none" />

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-yellow-400 tracking-widest text-sm">MISSION STATUS</h3>
          <h2 className="text-3xl font-bold mt-4">Operational & Ready</h2>
          <p className="text-gray-400 mt-4">
            Currently open to exciting opportunities, collaborations, and impactful engineering missions.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="text-green-400 text-sm">Available for Projects</p>
          </div>
        </div>

        <div>
          <h3 className="text-yellow-400 tracking-widest text-sm">NAVIGATION</h3>
          <ul className="mt-6 space-y-3 text-gray-300">
            {navigationDetails.map((item) => (
              <li key={item.id}>
                <a
                  href={item.id}
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  {item.section}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-yellow-400 tracking-widest text-sm">SIGNAL CHANNELS</h3>
          <div className="flex gap-6 mt-6">
            <a
              href="https://github.com/ItsWeslie"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/samweslie14"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="text-gray-500 mt-6 text-sm">Let's build something legendary.</p>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sam Weslie | Built with React & Tailwind
      </div>

      {showTop && (
        <button
          onClick={scrollToTop}
          className="z-50 fixed bottom-8 right-2 xl:right-8 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}