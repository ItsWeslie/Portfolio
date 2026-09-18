import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Menu, X } from "lucide-react";
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

const projects=[
 {title:"Employee Management System",description:"Manage workforce with role-based access and analytics.",github:"https://github.com/ItsWeslie/EMS",image:ems},
 {title:"Online Bus Pass Management System",description:"Digital bus pass management for college students",github:"https://github.com/ItsWeslie/Online-Bus-Pass-Management-System",image:bus},
 {title:"Student Result Management System",description:"Automated result publishing system",github:"https://github.com/ItsWeslie/StudentsResultManagementSystem",image:educationImg},
 {title:"Airline Ticket Reservation System",description:"Flight booking simulation with admin dashboard.",github:"https://github.com/ItsWeslie/AirLineTicketReservationSystem",image:airline}
];
const education=[
 {title:"MCA",year:"2023–2025",meta:"Percentage: 73%",detail:"DSA, DBMS, Java"},
 {title:"B.Sc Computer Science",year:"2020–2023",meta:"Percentage: 75%",detail:"Java, SQL, C"},
 {title:"HSC",year:"2018–2020",meta:"Percentage: 74%",detail:"Tamil, English, Maths, Physics, Chemistry, Computer Science"},
 {title:"SSLC",year:"2017–2018",meta:"Percentage: 81%",detail:"Tamil, English, Science, Maths, Social"}
];
const skills=[
 {group:"Frontend Systems",items:[["React",reactLogo],["JavaScript",jsLogo],["Tailwind CSS",tailwindLogo],["HTML",htmlLogo],["CSS",cssLogo]]},
 {group:"Backend Systems",items:[["Java",javaLogo],["Spring Boot",springLogo]]},
 {group:"Data Layer",items:[["MySQL",mysqlLogo]]}
];
const achievements=[
 {title:"Chairman",text:"Led a team of 150+ members and successfully organized a state level technical symposium.",image:chairman},
 {title:"Campus President",text:"Served as Campus President for YUCI - Youth United Council of India and worked on campus initiatives and youth engagement.",image:campusPresident},
 {title:"Overall Champion",text:"Won first place in Technical Quiz and runner-up in Treasure Hunt at a National Level Technical Symposium conducted by Christ University, Bangalore.",image:gateways}
];
const nav=[["Home","home"],["About","about"],["Experience","experience"],["Skills","skills"],["Projects","projects"],["Achievements","achievements"],["Contact","contact"]];
const Label=({children})=><p className="cp-label">{children}</p>;
const Glass=({children,className=""})=><div className={`cp-glass ${className}`}>{children}</div>;

export default function CinematicPortfolio({onOpenWesMind}){
 const [menu,setMenu]=useState(false),[project,setProject]=useState(0),[loading,setLoading]=useState(false);
 const [form,setForm]=useState({name:"",email:"",message:""});
 const submit=async(e)=>{e.preventDefault();setLoading(true);try{await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID,import.meta.env.VITE_EMAILJS_TEMPLATE_ID,form,{publicKey:import.meta.env.VITE_EMAILJS_PUBLIC_KEY});toast.success("Transmission completed!");setForm({name:"",email:"",message:""})}catch(err){console.error(err);toast.error("Failed to send email. Please try again later.")}finally{setLoading(false)}};
 return <main className="cp-site">
  <nav className="cp-nav"><a href="#home" className="cp-brand"><span>SW</span><b>SAM WESLIE</b></a><div className="cp-navlinks">{nav.map(([n,id])=><a key={id} href={`#${id}`}>{n}</a>)}</div><a className="cp-resume" href="/Sam_Resume.pdf" download>RESUME <ArrowUpRight/></a><button className="cp-wesmind" onClick={onOpenWesMind}>WesMind</button><button className="cp-menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<Menu/>}</button></nav>
  <AnimatePresence>{menu&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="cp-mobile-nav">{nav.map(([n,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{n}<ArrowUpRight/></a>)}</motion.div>}</AnimatePresence>

  <section id="home" className="cp-hero cp-scene">
   <div className="cp-scene-image"/><div className="cp-hero-shade"/><div className="cp-grain"/>
   <motion.div initial={{opacity:0,y:26}} animate={{opacity:1,y:0}} transition={{duration:.85}} className="cp-hero-copy"><Label>SOFTWARE ENGINEER</Label><h1>BUILDING<br/>INTELLIGENT<br/>SOLUTIONS <span>FOR A<br/>BRIGHTER TOMORROW</span></h1><p className="cp-lead">I architect scalable systems, craft exceptional digital experiences, and turn complex problems into elegant solutions.</p><div className="cp-actions"><a href="#projects" className="cp-primary">VIEW MY WORK <ArrowUpRight/></a><a href="#contact" className="cp-secondary">GET IN TOUCH</a></div><div className="cp-social"><a href="mailto:itssamwesliehere@gmail.com"><Mail/> Mail</a><a href="https://github.com/ItsWeslie" target="_blank" rel="noreferrer"><Github/> GitHub</a><a href="https://www.linkedin.com/in/samweslie14/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a></div></motion.div>
   <div className="cp-hero-side"><span>◇</span><p>ENGINEER<br/>LEARN<br/>BUILD<br/>IMPROVE<br/>REPEAT</p></div>
  </section>

  <section id="about" className="cp-section cp-about cp-scene"><div className="cp-scene-image cp-scene-image-soft"/><div className="cp-section-shade"/><div className="cp-about-grid">
   <Glass className="cp-profile-panel"><div className="cp-profile-wrap"><img src={profile} alt="Sam Weslie Prabhakaran"/></div><blockquote>“Technology is most powerful when it empowers people.”</blockquote><small>— Sam Weslie</small></Glass>
   <div className="cp-about-copy"><Label>02 // ABOUT ME</Label><h2>TURNING IDEAS<br/>INTO <span>IMPACT</span></h2><p>I’m a passionate Software Engineer who loves building scalable applications, exploring emerging technologies, and creating solutions that make a real difference.</p><p>My journey in tech is driven by curiosity, continuous learning, and a desire to build products that matter.</p><div className="cp-traits"><span>◉ Problem Solver</span><span>◉ Continuous Learner</span><span>◉ Team Player</span><span>◉ Impact Driven</span></div><a href="#projects" className="cp-secondary">MORE ABOUT ME <ArrowUpRight/></a></div>
   <Glass className="cp-about-status"><Label>CURRENTLY</Label><h3><i/> Open to Opportunities</h3><p>Looking for exciting opportunities to contribute and grow.</p><dl><dt>Focus</dt><dd>Full Stack Development</dd><dt>Core</dt><dd>React · Java · Spring Boot</dd><dt>Interests</dt><dd>Modern Web Systems</dd></dl><a href="/Sam_Resume.pdf" download className="cp-primary">DOWNLOAD RESUME <Download/></a></Glass>
  </div></section>

  <section id="experience" className="cp-section cp-experience"><div className="cp-section-head centered"><Label>03 // MY JOURNEY</Label><h2>EXPERIENCE <span>& EDUCATION</span></h2></div><div className="cp-timeline-list"><div className="cp-timeline-line"/>{education.map((item,i)=><motion.div key={item.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="cp-timeline-row"><div className="cp-node">0{i+1}</div><div className="cp-date">{item.year}</div><Glass><h3>{item.title}</h3><p>{item.meta}</p><small>{item.detail}</small></Glass></motion.div>)}</div></section>

  <section id="skills" className="cp-section cp-skills"><div className="cp-section-head"><Label>04 // TECHNOLOGY ARSENAL</Label><h2>TOOLS I USE TO<br/><span>BUILD THE FUTURE.</span></h2></div><div className="cp-arsenal">{skills.map((g,i)=><Glass key={g.group} className={`cp-skill-group g${i}`}><Label>ARSENAL 0{i+1}</Label><h3>{g.group}</h3><div className="cp-skill-items">{g.items.map(([name,img])=><div className="cp-skill" key={name}><img src={img} alt=""/><span>{name}</span><i/></div>)}</div></Glass>)}</div></section>

  <section id="projects" className="cp-section cp-projects"><div className="cp-section-head"><Label>05 // PROJECT COMMAND CENTER</Label><h2>SELECTED <span>BUILDS.</span></h2></div><div className="cp-project-console"><div className="cp-project-index">{projects.map((p,i)=><button key={p.title} onClick={()=>setProject(i)} className={project===i?"active":""}><span>0{i+1}</span><b>{p.title}</b></button>)}</div><Glass className="cp-project-screen"><div className="cp-screen-top"><span>LIVE ARCHIVE // 0{project+1}</span><i/></div><AnimatePresence mode="wait"><motion.img key={project} initial={{opacity:0,x:15}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-15}} src={projects[project].image} alt={`${projects[project].title} screenshot`}/></AnimatePresence></Glass><Glass className="cp-project-info"><Label>PROJECT // 0{project+1}</Label><h3>{projects[project].title}</h3><p>{projects[project].description}</p><a href={projects[project].github} target="_blank" rel="noreferrer" className="cp-primary"><Github/> VIEW ON GITHUB</a></Glass></div></section>

  <section id="achievements" className="cp-section cp-achievements"><div className="cp-section-head"><Label>06 // ACHIEVEMENTS</Label><h2>LEADERSHIP <span>& MILESTONES.</span></h2></div><div className="cp-achievement-grid">{achievements.map(a=><Glass key={a.title} className="cp-achievement"><img src={a.image} alt={a.title}/><div><Label>ARCHIVE ENTRY</Label><h3>{a.title}</h3><p>{a.text}</p></div></Glass>)}</div></section>

  <section id="contact" className="cp-section cp-contact cp-scene"><div className="cp-scene-image cp-scene-image-soft"/><div className="cp-section-shade"/><div className="cp-contact-copy"><Label>07 // COMMUNICATION TERMINAL</Label><h2>LET'S BUILD<br/><span>SOMETHING MEANINGFUL.</span></h2><p>Ready to collaborate, build something impactful, or discuss opportunities? Send a transmission and let’s make it happen.</p><div className="cp-contact-links"><a href="mailto:itssamwesliehere@gmail.com"><Mail/> itssamwesliehere@gmail.com</a><a href="https://linkedin.com/in/samweslie14" target="_blank" rel="noreferrer"><Linkedin/> linkedin.com/in/samweslie14</a><a href="https://github.com/ItsWeslie" target="_blank" rel="noreferrer"><Github/> github.com/ItsWeslie</a></div></div><form onSubmit={submit} className="cp-terminal"><div className="cp-terminal-bar"><span>TRANSMISSION // READY</span><i/><i/><i/></div><label>NAME<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>EMAIL<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>MESSAGE<textarea required rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell me about the mission..."/></label><button disabled={loading} className="cp-primary">{loading?"TRANSMITTING...":"SEND TRANSMISSION"}<ArrowUpRight/></button></form></section>

  <footer className="cp-footer cp-scene"><div className="cp-scene-image"/><div className="cp-footer-shade"/><div className="cp-footer-giant">SAM WESLIE</div><div className="cp-footer-content"><div><Label>END // SIGNAL REMAINS OPEN</Label><h3>Sam Weslie</h3><p>Software Engineer</p></div><div className="cp-footer-nav">{nav.map(([n,id])=><a key={id} href={`#${id}`}>{n}</a>)}</div><div><div className="cp-status"><i/> SYSTEM ONLINE</div><p>© {new Date().getFullYear()} Sam Weslie</p></div></div></footer>
 </main>
}