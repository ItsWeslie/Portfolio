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

export default function EducationSection({ activeEducation, setActiveEducation, edu, eduJson }) {
  return (
    <>
        <section
          id="education"
          className="sw-section sw-block education-section"
        >
          <motion.div {...reveal}>
            <p className="eyebrow">04. EDUCATION</p>
            <h2>My academic journey.</h2>
            <p className="section-copy">
              Formal learning that built the foundation for my problem-solving
              and software engineering skills.
            </p>
          </motion.div>
          <div className="education-layout">
            <div className="timeline education-timeline">
              {education.map((e, i) => (
                <motion.button
                  type="button"
                  className={`timeline-item education-entry ${activeEducation === i ? "active" : ""}`}
                  key={e.id}
                  onClick={() => setActiveEducation(i)}
                  {...reveal}
                >
                  <span className="timeline-dot" />
                  <time className="ml-3 mt-1">{e.year}</time>
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.detail}</p>
                    <b>{e.meta}</b>
                  </div>
                </motion.button>
              ))}
            </div>
            <motion.div
              className="academic-record glass liquid-card"
              {...reveal}
            >
              <div
                className="academic-tabs"
                role="tablist"
                aria-label="Education records"
              >
                {education.map((e, i) => (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeEducation === i}
                    className={activeEducation === i ? "active" : ""}
                    key={e.id}
                    onClick={() => setActiveEducation(i)}
                  >
                    <BookOpen size={13} />
                    {e.file}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={edu.id}
                  className="academic-content"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="academic-code">
                    <div className="code-label">
                      <Code2 size={14} /> education/{edu.file}
                    </div>
                    <pre>{eduJson}</pre>
                  </div>
                  <div className="academic-summary">
                    <span className="record-status">ACADEMIC RECORD</span>
                    <h3>{edu.fullTitle}</h3>
                    <p>{edu.detail}</p>
                    <div className="focus-chips">
                      {edu.focus.map((x) => (
                        <span key={x}>{x}</span>
                      ))}
                    </div>
                    <div className="record-metrics">
                      <div>
                        <CalendarDays />
                        <span>
                          <b>{edu.year}</b>
                          <small>Academic period</small>
                        </span>
                      </div>
                      <div>
                        <BarChart3 />
                        <span>
                          <b>{edu.meta}</b>
                          <small>Score</small>
                        </span>
                      </div>
                      <div>
                        <GraduationCap />
                        <span>
                          <b>{edu.title}</b>
                          <small>Qualification</small>
                        </span>
                      </div>
                    </div>
                    <div className="record-note">
                      <Terminal size={15} />
                      <span>foundation → practice → software engineering</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
    </>
  );
}
