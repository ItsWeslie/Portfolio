import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink, Moon, Sun, Send, Code2, Terminal, GraduationCap, Award } from "lucide-react";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiSpringboot, SiMysql, SiTailwindcss } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import "../software-portfolio.css";

const projects = [
  { title: "Employee Management System", description: "Manage workforce with role-based access and analytics.", github: "https://github.com/ItsWeslie/EMS", stack: ["React", "Java", "MySQL"] },
  { title: "Online Bus Pass Management System", description: "Digital bus pass management for college students.", github: "https://github.com/ItsWeslie/Online-Bus-Pass-Management-System", stack: ["Web", "Database", "Java"] },
  { title: "Student Result Management System", description: "Automated result publishing system for students and administrators.", github: "https://github.com/ItsWeslie/StudentsResultManagementSystem", stack: ["Java", "MySQL", "Web"] },
  { title: "Airline Ticket Reservation System", description: "Flight booking simulation with an administrative dashboard.", github: "https://github.com/ItsWeslie/AirLineTicketReservationSystem", stack: ["Java", "MySQL", "UI"] },
];

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
  { year: "2023–2025", title: "MCA", meta: "73%", detail: "DSA · DBMS · Java" },
  { year: "2020–2023", title: "B.Sc Computer Science", meta: "75%", detail: "Java · SQL · C" },
  { year: "2018–2020", title: "HSC", meta: "74%", detail: "Computer Science stream" },
  { year: "2017–2018", title: "SSLC", meta: "81%", detail: "Secondary education" },
];
const certifications = [
  ["Programming in Core Java", "T4TEQ Software Solutions · 2025"],
  ["Programming in Java", "NPTEL · 2025"],
  ["Certified Software Engineer", "HackerRank · 2025"],
  ["JavaScript", "HackerRank · 2025"],
  ["SQL", "HackerRank · 2024"],
];

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .15 }, transition: { duration: .65 } };

export default function SoftwarePortfolio() {
  const [theme, setTheme] = useState(() => localStorage.getItem("sw-theme") || "dark");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("sw-theme", theme);
  }, [theme]);

  const submit = async (e) => {
    e.preventDefault(); setLoading(true);
    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form, { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });
      toast.success("Message sent successfully"); setForm({ name: "", email: "", message: "" });
    } catch { toast.error("Unable to send. Please try again."); }
    finally { setLoading(false); }
  };

  return <div className="sw-shell">
    <header className="sw-nav glass">
      <a className="sw-brand" href="#home"><span>SW</span><b>Sam Weslie</b></a>
      <nav>{["Home","About","Projects","Stack","Education","Contact"].map(x => <a key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</nav>
      <div className="sw-nav-actions">
        <button className="theme-toggle" aria-label="Toggle color theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <motion.span layout transition={{ type:"spring", stiffness:400, damping:28 }}>{theme === "dark" ? <Moon size={15}/> : <Sun size={15}/>}</motion.span>
        </button>
        <a className="sw-btn compact" href="/Sam_Resume.pdf" download>Resume</a>
      </div>
    </header>

    <main>
      <section id="home" className="sw-hero sw-section">
        <motion.div className="hero-copy" {...reveal}>
          <p className="eyebrow">BUILD · SOLVE · IMPROVE</p>
          <h1>Software Engineer<br/>Building <span>Real Solutions</span></h1>
          <p className="hero-lead">I build reliable software and intuitive web experiences with a focus on clean code, thoughtful engineering, and continuous learning.</p>
          <div className="hero-actions"><a className="sw-btn primary liquid" href="#projects">View my work <span>→</span></a><a className="sw-btn" href="/Sam_Resume.pdf" download><Download size={16}/> Download resume</a></div>
          <div className="hero-meta"><div><strong>Java</strong><small>Backend</small></div><div><strong>React</strong><small>Frontend</small></div><div><strong>MySQL</strong><small>Database</small></div><div><strong>∞</strong><small>Always learning</small></div></div>
          <div className="availability glass"><i/> <div><b>Open to software engineering opportunities</b><small>Let’s build useful products and solve real problems.</small></div></div>
        </motion.div>

        <motion.div className="dev-console" initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} transition={{duration:.8,delay:.15}}>
          <div className="editor glass liquid-card">
            <div className="window-bar"><span/><span/><span/><b>developer.js</b></div>
            <pre><code><em>// building useful software</em>{`\n`}const developer = {'{'}{`\n`}  name: <mark>"Sam Weslie"</mark>,{`\n`}  role: <mark>"Software Engineer"</mark>,{`\n`}  focus: ["Java", "React", "Systems"],{`\n`}  principle: <mark>"Clean code. Real impact."</mark>{`\n`}{'}'};</code></pre>
          </div>
          <div className="terminal glass liquid-card"><div className="window-bar"><Terminal size={14}/><b>sam@portfolio:~</b></div><p><span>$</span> npm run dev</p><p>✓ portfolio ready</p><p>✓ building · learning · shipping</p><p className="cursor">▌</p></div>
          <div className="orb orb-a"/><div className="orb orb-b"/>
        </motion.div>
      </section>

      <section id="about" className="sw-section sw-block">
        <motion.div {...reveal}><p className="eyebrow">01. ABOUT</p><h2>Engineering with curiosity.</h2><p className="section-copy">I’m Sam Weslie Prabhakaran, a Software Engineer focused on turning ideas into maintainable applications. I enjoy understanding how systems work, solving problems with code, and continuously expanding my engineering toolkit.</p></motion.div>
        <motion.div className="principles" {...reveal}>{[[Code2,"Problem solver"],[Terminal,"Clean-code mindset"],[GraduationCap,"Continuous learner"]].map(([Icon,t])=><div className="principle" key={t}><Icon/><b>{t}</b></div>)}</motion.div>
      </section>

      <section id="projects" className="sw-section sw-block">
        <motion.div className="section-head" {...reveal}><div><p className="eyebrow">02. FEATURED PROJECTS</p><h2>Things I’ve built.</h2></div><a href="https://github.com/ItsWeslie" target="_blank" rel="noreferrer">View GitHub <ExternalLink size={14}/></a></motion.div>
        <div className="project-grid">{projects.map((p,i)=><motion.article className={`project-card ${i===0?"featured":""}`} key={p.title} {...reveal} transition={{duration:.55,delay:i*.07}}><div className="project-preview"><div className="preview-bar"><i/><i/><i/></div><Code2 size={34}/><span>{p.title}</span></div><div className="project-body"><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div><a href={p.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a></div></motion.article>)}</div>
      </section>

      <section id="stack" className="sw-section sw-block">
        <motion.div {...reveal}><p className="eyebrow">03. TECH STACK</p><h2>Technologies I work with.</h2><p className="section-copy">A practical toolkit for building modern applications from interface to backend.</p></motion.div>
        <motion.div className="stack-grid" {...reveal}>{stack.map(({name,Icon,className})=><motion.div whileHover={{y:-6,scale:1.03}} className="stack-item" key={name}><span className={`tech-logo ${className}`}><Icon aria-hidden="true"/></span><b>{name}</b></motion.div>)}</motion.div>
      </section>

      <section id="education" className="sw-section sw-block">
        <motion.div {...reveal}><p className="eyebrow">04. EDUCATION</p><h2>Learning timeline.</h2></motion.div>
        <div className="timeline">{education.map((e,i)=><motion.div className="timeline-item" key={e.title} {...reveal}><span className="timeline-dot"/><time>{e.year}</time><div><h3>{e.title}</h3><p>{e.detail}</p><b>{e.meta}</b></div></motion.div>)}</div>
      </section>

      <section id="certifications" className="sw-section sw-block">
        <motion.div {...reveal}><p className="eyebrow">05. CERTIFICATIONS</p><h2>Validated learning.</h2></motion.div>
        <div className="cert-grid">{certifications.map(([title,meta])=><motion.div className="cert-card" whileHover={{y:-5}} key={title}><Award/><div><b>{title}</b><small>{meta}</small></div></motion.div>)}</div>
      </section>

      <section id="contact" className="sw-section contact-section">
        <motion.div className="contact-copy" {...reveal}><p className="eyebrow">06. CONTACT</p><h2>Let’s build something useful.</h2><p>Have an opportunity, project, or engineering problem worth discussing? I’d be happy to connect.</p><div className="contact-links"><a href="mailto:itssamwesliehere@gmail.com"><Mail/>itssamwesliehere@gmail.com</a><a href="https://www.linkedin.com/in/samweslie14/" target="_blank" rel="noreferrer"><Linkedin/>LinkedIn</a><a href="https://github.com/ItsWeslie" target="_blank" rel="noreferrer"><Github/>GitHub</a></div></motion.div>
        <motion.form className="contact-form glass liquid-card" onSubmit={submit} {...reveal}><div className="form-title"><i/> Send a message</div><div className="form-row"><input aria-label="Name" placeholder="Name" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/><input aria-label="Email" type="email" placeholder="Email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div><textarea aria-label="Message" placeholder="Your message..." required rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/><button className="sw-btn primary liquid" disabled={loading}>{loading?"Sending...":"Send message"}<Send size={15}/></button></motion.form>
      </section>
    </main>

    <footer className="sw-footer"><div className="sw-brand"><span>SW</span><b>Sam Weslie</b></div><p>Software Engineer · Building better software with code.</p><div><a href="https://github.com/ItsWeslie" target="_blank" rel="noreferrer"><Github/></a><a href="https://www.linkedin.com/in/samweslie14/" target="_blank" rel="noreferrer"><Linkedin/></a><a href="mailto:itssamwesliehere@gmail.com"><Mail/></a></div></footer>
  </div>;
}