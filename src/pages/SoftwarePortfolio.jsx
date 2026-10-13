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
import CertificationVault from "../components/CertificationVault";
import "../software-portfolio.css";
import "../certification-vault.css";
import profile from "/src/assets/logo.png";
import Navbar from "../features/navigation/Navbar";
import HeroSection from "../features/hero/HeroSection";
import AboutSection from "../features/about/AboutSection";
import ProjectsSection from "../features/projects/ProjectsSection";
import TechStackSection from "../features/stack/TechStackSection";
import EducationSection from "../features/education/EducationSection";
import CertificationsSection from "../features/certifications/CertificationsSection";
import ContactSection from "../features/contact/ContactSection";
import Footer from "../features/footer/Footer";

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
export default function SoftwarePortfolio() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("sw-theme") || "dark",
  );
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [activeEducation, setActiveEducation] = useState(0);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("sw-theme", theme);
  }, [theme]);
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      toast.success("Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Unable to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const edu = education[activeEducation];
  const eduJson = JSON.stringify(
    {
      qualification: edu.fullTitle,
      period: edu.year,
      score: edu.meta,
      focus: edu.focus,
    },
    null,
    2,
  );
  return (
    <div className="sw-shell">
        <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechStackSection />
        <EducationSection activeEducation={activeEducation} setActiveEducation={setActiveEducation} edu={edu} eduJson={eduJson} />
        <CertificationsSection />
        <ContactSection form={form} setForm={setForm} loading={loading} submit={submit} />
      </main>
        <Footer />
    </div>
  );
}
