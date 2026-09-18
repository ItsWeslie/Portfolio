import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, File, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import profile from "/src/assets/profile.jpg";
import ems from "/src/assets/ems.webp";
import bus from "/src/assets/bus.jpg";
import educationImg from "/src/assets/education2.jpg";
import airline from "/src/assets/airline.jpg";
import chairman from "/src/assets/chairman.jpg";
import campusPresident from "/src/assets/campusPresident.jpeg";
import gateways from "/src/assets/gateways.jpg";
import reactLogo from "/src/assets/react.png";
import jsLogo from "/src/assets/js.png";
import mysqlLogo from "/src/assets/mysql.png";
import javaLogo from "/src/assets/java.png";
import tailwindLogo from "/src/assets/tailwindcss.png";
import springLogo from "/src/assets/spring-boot.png";
import htmlLogo from "/src/assets/html.png";
import cssLogo from "/src/assets/css.png";

const projects = [
  { title: "Employee Management System", description: "Manage workforce with role-based access and analytics.", github: "https://github.com/ItsWeslie/EMS", image: ems },
  { title: "Online Bus Pass Management System", description: "Digital bus pass management for college students", github: "https://github.com/ItsWeslie/Online-Bus-Pass-Management-System", image: bus },
  { title: "Student Result Management System", description: "Automated result publishing system", github: "https://github.com/ItsWeslie/StudentsResultManagementSystem", image: educationImg },
  { title: "Airline Ticket Reservation System", description: "Flight booking simulation with admin dashboard.", github: "https://github.com/ItsWeslie/AirLineTicketReservationSystem", image: airline },
];

const education = [
  { title: "MCA", year: "2023–2025", meta: "Percentage: 73%", detail: "DSA, DBMS, Java" },
  { title: "B.Sc Computer Science", year: "2020–2023", meta: "Percentage: 75%", detail: "Java, SQL, C" },
  { title: "HSC", year: "2018–2020", meta: "Percentage: 74%", detail: "Tamil, English, Maths, Physics, Chemistry, Computer Science" },
  { title: "SSLC", year: "2017–2018", meta: "Percentage: 81%", detail: "Tamil, English, Science, Maths, Social" },
];

const skills = [
  { group: "Frontend Systems", items: [["React", reactLogo], ["JavaScript", jsLogo], ["Tailwind", tailwindLogo]] },
  { group: "Backend Systems", items: [["Java", javaLogo], ["Spring Boot", springLogo]] },
  { group: "Data Layer", items: [["MySQL", mysqlLogo]] },
  { group: "Web Foundations", items: [["HTML", htmlLogo], ["CSS", cssLogo]] },
];

const achievements = [
  { title: "Chairman", text: "Led a team of 150+ members and successfully organized a state level technical symposium.", image: chairman },
  { title: "Campus President", text: "Served as Campus President for YUCI - Youth United Council of India and worked on campus initiatives and youth engagement.", image: campusPresident },
  { title: "Overall Champion", text: "Won first place in Technical Quiz and runner-up in Treasure Hunt at a National Level Technical Symposium conducted by Christ University, Bangalore.", image: gateways },
];

const nav = [["Home", "home"], ["About", "about"], ["Experience", "experience"], ["Skills", "skills"], ["Projects", "projects"], ["Contact", "contact"]];

function Label({ children }) { return <p className="cp-label">{children}</p>; }
function Glass({ children, className = "" }) { return <div className={`cp-glass ${className}`}>{children}</div>; }

export default function CinematicPortfolio({ onOpenWesMind }) {
  const [menu, setMenu] = useState(false);
  const [project, setProject] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async (e) => {
    e.preventDefault(); setLoading(true);
    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form, { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });
      toast.success("Transmission completed!"); setForm({ name: "", email: "", message: "" });
    } catch (err) { console.error(err); toast.error("Failed to send email. Please try again later."); }
    finally { setLoading(false); }
  };

  return <main className="cp-site">
    <nav className="cp-nav">
      <a href="#home" className="cp-brand"><span>SW</span><b>SAM WESLIE</b></a>
      <div className="cp-navlinks">{nav.map(([n,id]) => <a key={id} href={`#${id}`}>{n}</a>)}</div>
      <button className="cp-wesmind" onClick={onOpenWesMind}>WesMind <span>↗</span></button>
      <button className="cp-menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X/> : <Menu/>}</button>
    </nav>
    <AnimatePresence>{menu && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="cp-mobile-nav">{nav.map(([n,id]) => <a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{n}<ArrowUpRight/></a>)}</motion.div>}</AnimatePresence>

    <section id="home" className="cp-hero cp-world">
      <div className="cp-architecture" aria-hidden="true"><i/><i/><i/><i/><i/></div>
      <div className="cp-energy" aria-hidden="true"/>
      <div className="cp-mist cp-mist-a"/><div className="cp-mist cp-mist-b"/>
      <div className="cp-silhouette" aria-hidden="true"><div className="cp-hood"/><div className="cp-cloak"/></div>
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="cp-hero-copy">
        <Label>01 // PORTFOLIO · SOFTWARE ENGINEER</Label>
        <h1>SAM<br/><span>WESLIE</span></h1>
        <p className="cp-kicker">Software Engineer</p>
        <p className="cp-lead">Building thoughtful software experiences across modern frontend and backend systems.</p>
        <div className="cp-actions"><a href="#projects" className="cp-primary">Explore my work <ArrowUpRight/></a><a href="/Sam_Resume.pdf" download className="cp-secondary"><File/> Resume</a></div>
        <div className="cp-social"><a href="mailto:itssamwesliehere@gmail.com"><Mail/> Mail</a><a href="https://github.com/ItsWeslie" target="_blank"><Github/> GitHub</a><a href="https://www.linkedin.com/in/samweslie14/" target="_blank"><Linkedin/> LinkedIn</a></div>
      </motion.div>
      <div className="cp-scroll">SCROLL TO ENTER <span>↓</span></div>
    </section>

    <section id="about" className="cp-section cp-about cp-world">
      <div className="cp-section-head"><Label>02 // ABOUT</Label><h2>Engineer by craft.<br/><span>Explorer by mindset.</span></h2></div>
      <div className="cp-about-grid">
        <Glass className="cp-profile-panel"><div className="cp-profile-wrap"><img src={profile} alt="Sam Weslie Prabhakaran"/></div><Label>IDENTITY // 001</Label><h3>Sam Weslie Prabhakaran</h3><p>Software Engineer</p><div className="cp-status"><i/> AVAILABLE FOR OPPORTUNITIES</div></Glass>
        <Glass className="cp-about-copy"><Label>PROFILE // ACTIVE</Label><p className="cp-about-big">I build software with a focus on clear interfaces, dependable systems and meaningful user experiences.</p><p>My toolkit spans React, Java, Spring Boot, MySQL and modern web foundations. I enjoy turning ideas into working products and continuously expanding how I approach engineering problems.</p><div className="cp-actions"><a href="#projects" className="cp-primary">View projects <ArrowUpRight/></a><a href="/Sam_Resume.pdf" download className="cp-secondary">Download resume</a></div></Glass>
        <Glass className="cp-mini"><Label>CORE STACK</Label><strong>React · Java<br/>Spring Boot · MySQL</strong></Glass>
        <Glass className="cp-mini"><Label>CHANNELS</Label><strong>GitHub · LinkedIn<br/>Email</strong></Glass>
      </div>
    </section>

    <section id="experience" className="cp-section cp-timeline cp-world">
      <div className="cp-section-head"><Label>03 // EXPERIENCE & EDUCATION</Label><h2>The journey<br/><span>so far.</span></h2><p>Education and technical growth mapped as one continuous energy line.</p></div>
      <div className="cp-timeline-list"><div className="cp-timeline-line"/>{education.map((item,i)=><motion.div key={item.title} initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="cp-timeline-row"><div className="cp-node">0{i+1}</div><Glass><Label>{item.year}</Label><h3>{item.title}</h3><p>{item.meta}</p><small>{item.detail}</small></Glass></motion.div>)}</div>
    </section>

    <section id="skills" className="cp-section cp-skills cp-world">
      <div className="cp-section-head"><Label>04 // TECHNOLOGY ARSENAL</Label><h2>Systems behind<br/><span>the work.</span></h2></div>
      <div className="cp-arsenal">{skills.map((g,i)=><Glass key={g.group} className={`cp-skill-group g${i}`}><Label>MODULE 0{i+1}</Label><h3>{g.group}</h3><div className="cp-skill-items">{g.items.map(([name,img])=><div className="cp-skill" key={name}><img src={img} alt=""/><span>{name}</span><i/></div>)}</div></Glass>)}</div>
    </section>

    <section id="projects" className="cp-section cp-projects cp-world">
      <div className="cp-section-head"><Label>05 // PROJECT COMMAND CENTER</Label><h2>Selected<br/><span>builds.</span></h2></div>
      <div className="cp-project-console">
        <div className="cp-project-index">{projects.map((p,i)=><button key={p.title} onClick={()=>setProject(i)} className={project===i?"active":""}><span>0{i+1}</span><b>{p.title}</b></button>)}</div>
        <Glass className="cp-project-screen"><div className="cp-screen-top"><span>LIVE ARCHIVE // 0{project+1}</span><i/></div><AnimatePresence mode="wait"><motion.img key={project} initial={{opacity:0,scale:.98}} animate={{opacity:1,scale:1}} exit={{opacity:0}} src={projects[project].image} alt={`${projects[project].title} screenshot`}/></AnimatePresence></Glass>
        <Glass className="cp-project-info"><Label>PROJECT // 0{project+1}</Label><h3>{projects[project].title}</h3><p>{projects[project].description}</p><a href={projects[project].github} target="_blank" rel="noreferrer" className="cp-primary"><Github/> View on GitHub</a></Glass>
      </div>
    </section>

    <section id="achievements" className="cp-section cp-achievements cp-world">
      <div className="cp-section-head"><Label>06 // ACHIEVEMENTS</Label><h2>Leadership &<br/><span>milestones.</span></h2></div>
      <div className="cp-achievement-grid">{achievements.map(a=><Glass key={a.title} className="cp-achievement"><img src={a.image} alt={a.title}/><div><Label>ARCHIVE ENTRY</Label><h3>{a.title}</h3><p>{a.text}</p></div></Glass>)}</div>
    </section>

    <section id="contact" className="cp-section cp-contact cp-world">
      <div className="cp-contact-copy"><Label>07 // COMMUNICATION TERMINAL</Label><h2>Let's build<br/><span>something meaningful.</span></h2><p>Ready to collaborate, build something impactful, or discuss opportunities? Send a transmission and let’s make it happen.</p><div className="cp-contact-links"><a href="mailto:itssamwesliehere@gmail.com"><Mail/> itssamwesliehere@gmail.com</a><a href="https://linkedin.com/in/samweslie14" target="_blank"><Linkedin/> linkedin.com/in/samweslie14</a><a href="https://github.com/ItsWeslie" target="_blank"><Github/> github.com/ItsWeslie</a></div></div>
      <form onSubmit={submit} className="cp-terminal"><div className="cp-terminal-bar"><span>TRANSMISSION // READY</span><i/><i/><i/></div><label>NAME<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>EMAIL<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>MESSAGE<textarea required rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell me about the mission..."/></label><button disabled={loading} className="cp-primary">{loading?"Transmitting...":"Send transmission"}<ArrowUpRight/></button></form>
    </section>

    <footer className="cp-footer cp-world"><div className="cp-energy footer-energy"/><div className="cp-silhouette footer-figure"><div className="cp-hood"/><div className="cp-cloak"/></div><div className="cp-footer-giant">SAM WESLIE</div><div className="cp-footer-content"><div><Label>END // SIGNAL REMAINS OPEN</Label><h3>Sam Weslie</h3><p>Software Engineer</p></div><div className="cp-footer-nav">{nav.map(([n,id])=><a key={id} href={`#${id}`}>{n}</a>)}</div><div><div className="cp-status"><i/> SYSTEM ONLINE</div><p>© {new Date().getFullYear()} Sam Weslie</p></div></div></footer>
  </main>;
}