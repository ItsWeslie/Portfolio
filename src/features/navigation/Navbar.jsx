import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Moon,
  Sun,
  Send,
  Code2,
  Terminal,
  GraduationCap,
  BookOpen,
  CalendarDays,
  BarChart3,
  Sparkles,
} from "lucide-react";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import CertificationVault from "../../components/CertificationVault";
import "../../software-portfolio.css";
import "../../certification-vault.css";
import profile from "/src/assets/logo.png";


const stack = [
  { name: "JavaScript", Icon: SiJavascript, className: "tech-js" },
  { name: "React", Icon: FaReact, className: "tech-react" },
  { name: "Java", Icon: FaJava, className: "tech-java" },
  { name: "Spring Boot", Icon: SiSpringboot, className: "tech-spring" },
  { name: "MySQL", Icon: SiMysql, className: "tech-mysql" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, className: "tech-tailwind" },
  { name: "HTML", Icon: FaHtml5, className: "tech-html" },
  { name: "CSS", Icon: FaCss3Alt, className: "tech-css" },
  { name: "Git", Icon: FaGitAlt, className: "tech-git" },
  { name: "GitHub", Icon: FaGithub, className: "tech-github" },
];
const education = [
  {
    id: "mca",
    file: "mca.json",
    year: "2023–2025",
    title: "MCA",
    fullTitle: "Master of Computer Applications",
    meta: "73%",
    detail: "DSA · DBMS · Java",
    focus: ["DSA", "DBMS", "Java"],
  },
  {
    id: "bsc",
    file: "bsc.json",
    year: "2020–2023",
    title: "B.Sc Computer Science",
    fullTitle: "Bachelor of Science in Computer Science",
    meta: "75%",
    detail: "Java · SQL · C",
    focus: ["Java", "SQL", "C"],
  },
  {
    id: "hsc",
    file: "hsc.json",
    year: "2018–2020",
    title: "HSC",
    fullTitle: "Higher Secondary Certificate",
    meta: "74%",
    detail: "Computer Science stream",
    focus: ["Computer Science"],
  },
  {
    id: "sslc",
    file: "sslc.json",
    year: "2017–2018",
    title: "SSLC",
    fullTitle: "Secondary School Leaving Certificate",
    meta: "81%",
    detail: "Secondary education",
    focus: ["Secondary Education"],
  },
];
const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65 },
};

export default function Navbar({ theme, setTheme }) {
  return (
    <>
      <header className="sw-nav glass">
        <a className="sw-brand" href="#home">
          <span>
            <img src={profile} alt="" className="w-10 h-10 rounded-full" />
          </span>
          <b>Sam Weslie Prabhakaran</b>
        </a>
        <nav>
          {[
            "Home",
            "About",
            "Projects",
            "Stack",
            "Education",
            "Certifications",
            "Contact",
          ].map((x) => (
            <a key={x} href={`#${x.toLowerCase()}`} className="font-semibold">
              {x}
            </a>
          ))}
        </nav>
        <div className="sw-nav-actions">
          <button
            className="wes-nav-button"
            onClick={() => window.dispatchEvent(new Event("open-wesmind"))}
            aria-label="Open WesMind"
          >
            <span className="wes-nav-mark">
              <b>W</b>
              <Sparkles />
            </span>
            <span>WesMind</span>
          </button>
          <button
            className="theme-toggle"
            aria-label="Toggle color theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              {theme === "dark" ? <Moon size={15} /> : <Sun size={15} />}
            </motion.span>
          </button>
          <a className="sw-btn compact" href="/Sam_Resume.pdf" download>
            Resume
          </a>
        </div>
      </header>
    </>
  );
}
