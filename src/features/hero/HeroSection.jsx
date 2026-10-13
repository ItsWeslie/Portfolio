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

export default function HeroSection({  }) {
  return (
    <>
        <section id="home" className="sw-hero sw-section">
          <motion.div className="hero-copy" {...reveal}>
            <p className="eyebrow">BUILD · SOLVE · IMPROVE</p>
            <h1>
              Hi, I'm Sam Weslie
              <br />
              <span>Prabhakaran</span>
            </h1>
            <p className="hero-lead">
              Software Engineer building scalable software products. Skilled in
              both frontend and backend technologies, with writing clean and
              scalable code.
            </p>
            <div className="hero-actions">
              <a className="sw-btn primary liquid" href="#projects">
                View my work <span>→</span>
              </a>
              <a className="sw-btn" href="/Sam_Resume.pdf" download>
                <Download size={16} /> Download resume
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <strong>Java</strong>
                <small>Backend</small>
              </div>
              <div>
                <strong>React</strong>
                <small>Frontend</small>
              </div>
              <div>
                <strong>MySQL</strong>
                <small>Database</small>
              </div>
              <div>
                <strong>∞</strong>
                <small>Always learning</small>
              </div>
            </div>
            <div className="availability glass">
              <i />
              <div>
                <b>Assistant System Engineer @ TCS</b>
                <small>Chennai, Tamil Nadu.</small>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="dev-console"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="editor glass liquid-card">
              <div className="window-bar">
                <span />
                <span />
                <span />
                <b>developer.js</b>
              </div>
              <pre>
                <code>
                  <em>// Ideas into Reality</em>
                  {`\n`}const ASE = {"{"}
                  {`\n`} name: <mark>"Sam Weslie Prabhakaran"</mark>,{`\n`}{" "}
                  role: <mark>"Software Engineer"</mark>,{`\n`} focus: ["Java",
                  "React", "DBMS"],{`\n`} principle:{" "}
                  <mark>"Clean code. Real impact."</mark>
                  {`\n`}
                  {"}"};
                </code>
              </pre>
            </div>
            <div className="terminal glass liquid-card">
              <div className="window-bar">
                <Terminal size={14} />
                <b>sam@portfolio:~</b>
              </div>
              <p>
                <span>$</span> npm run dev
              </p>
              <p>✓ portfolio ready</p>
              <p>✓ building · learning · shipping</p>
              <p className="cursor">▌</p>
            </div>
            <div className="orb orb-a" />
            <div className="orb orb-b" />
          </motion.div>
        </section>
    </>
  );
}
