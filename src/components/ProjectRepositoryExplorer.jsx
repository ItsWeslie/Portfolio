import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Search, Star, Terminal, FolderGit2, CheckCircle2, ChevronRight } from "lucide-react";
import emsScreenshot from "../assets/ems.webp";
import busScreenshot from "../assets/bus.jpg";
import studentScreenshot from "../assets/education2.jpg";
import airlineScreenshot from "../assets/airline.jpg";

const fallbackProjects = [
  { id: 1, slug: "employee-management-system", title: "Employee Management System", description: "Manage workforce with role-based access and analytics.", github: "https://github.com/ItsWeslie/EMS", stack: ["React", "Java", "MySQL"], category: "Full Stack", featured: true, status: "Completed", image: emsScreenshot },
  { id: 2, slug: "bus-pass-management", title: "Online Bus Pass Management System", description: "Digital bus pass management for college students.", github: "https://github.com/ItsWeslie/Online-Bus-Pass-Management-System", stack: ["Web", "Database", "Java"], category: "Full Stack", status: "Completed", image: busScreenshot },
  { id: 3, slug: "student-result-system", title: "Student Result Management System", description: "Automated result publishing system for students and administrators.", github: "https://github.com/ItsWeslie/StudentsResultManagementSystem", stack: ["Java", "MySQL", "Web"], category: "Full Stack", status: "Completed", image: studentScreenshot },
  { id: 4, slug: "airline-reservation-system", title: "Airline Ticket Reservation System", description: "Flight booking simulation with an administrative dashboard.", github: "https://github.com/ItsWeslie/AirLineTicketReservationSystem", stack: ["Java", "MySQL", "UI"], category: "Full Stack", status: "Completed", image: airlineScreenshot },
];

const filters = ["All", "Full Stack", "Java", "React", "MySQL"];

export default function ProjectRepositoryExplorer({ projects = fallbackProjects }) {
  const [selectedId, setSelectedId] = useState(projects[0]?.id);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [terminalState, setTerminalState] = useState({ command: "fetch --projects", output: `✓ ${projects.length} projects loaded\n✓ repository index ready` });

  const visibleProjects = useMemo(() => projects.filter((project) => {
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || [project.title, project.slug, project.description, ...project.stack].join(" ").toLowerCase().includes(q);
    const matchesFilter = filter === "All" || project.category === filter || project.stack.includes(filter);
    return matchesQuery && matchesFilter;
  }), [projects, query, filter]);

  const selected = projects.find((project) => project.id === selectedId) || visibleProjects[0] || projects[0];

  const selectProject = (project) => {
    setSelectedId(project.id);
    setTerminalState({ command: `open ${project.slug}`, output: `✓ repository selected\n→ ${project.title}` });
  };

  const applyFilter = (nextFilter) => {
    setFilter(nextFilter);
    const count = projects.filter((project) => nextFilter === "All" || project.category === nextFilter || project.stack.includes(nextFilter)).length;
    setTerminalState({ command: `filter --${nextFilter.toLowerCase().replaceAll(" ", "-")}`, output: `✓ ${count} repositories matched\n✓ repository index updated` });
  };

  const handleSearch = (value) => {
    setQuery(value);
    if (value.trim()) setTerminalState({ command: `search "${value.trim()}"`, output: "searching local project index..." });
    else setTerminalState({ command: "filter --all", output: `✓ showing all ${projects.length} repositories` });
  };

  return <div className="project-explorer">
    <div className="project-intro">
      <div><p className="eyebrow">02. PROJECTS</p><h2>Things I’ve built.</h2><p className="section-copy">Software projects, experiments, and applications built to turn ideas into useful solutions.</p></div>
      <div className="repo-summary glass"><div className="repo-summary-title"><FolderGit2/> PROJECT REPOSITORY</div><div className="repo-summary-grid"><div><strong>{projects.length}</strong><small>Projects</small></div><div><strong>{new Set(projects.flatMap(p=>p.stack)).size}</strong><small>Technologies</small></div><div className="repo-summary-stack"><span>● Java</span><span>● React</span><span>● MySQL</span></div></div><code>// BUILD → LEARN → IMPACT</code></div>
    </div>

    <motion.div className="project-terminal glass" initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
      <div className="project-terminal-bar"><span/><span/><span/><Terminal size={14}/><b>sam@portfolio:~/projects</b><small>● ONLINE</small></div>
      <div className="project-terminal-body"><div><p><i>$</i> {terminalState.command}</p>{terminalState.output.split("\n").map((line,i)=><p className="terminal-output" key={`${line}-${i}`}>{line}</p>)}<p><i>$</i> <span className="terminal-cursor">▋</span></p></div><blockquote>“Code builds more than software; it builds opportunities.”</blockquote></div>
    </motion.div>

    <div className="project-controls">
      <label className="repo-search"><Search size={16}/><input value={query} onChange={e=>handleSearch(e.target.value)} placeholder="Search repositories..." aria-label="Search projects"/></label>
      <div className="repo-filters">{filters.map(item=><button type="button" className={filter===item?"active":""} onClick={()=>applyFilter(item)} key={item}>{item}</button>)}</div>
    </div>

    <div className="repository-layout">
      <div className="repository-list" aria-label="Project repositories">
        {visibleProjects.length ? visibleProjects.map((project,index)=><motion.button type="button" className={`repository-row ${selected?.id===project.id?"active":""}`} onClick={()=>selectProject(project)} key={project.id} whileHover={{x:4}}>
          <span className="repo-index">{String(index+1).padStart(2,"0")}</span><div className="repo-row-copy"><div className="repo-name-line"><h3>{project.slug}</h3>{project.featured&&<span className="featured-pill"><Star size={11}/> Featured</span>}</div><p>{project.description}</p><div className="repo-tags">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div></div><ChevronRight className="repo-chevron" size={18}/>
        </motion.button>) : <div className="repository-empty"><Terminal/><b>No repositories matched.</b><span>Try another search or filter.</span></div>}
      </div>

      <AnimatePresence mode="wait">{selected&&<motion.article key={selected.id} className="repository-detail glass" initial={{opacity:0,x:18}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-12}} transition={{duration:.25}}>
        <div className="repo-detail-top"><span>{String(projects.findIndex(p=>p.id===selected.id)+1).padStart(2,"0")} / {String(projects.length).padStart(2,"0")}</span>{selected.featured&&<b>Featured Project</b>}</div>
        <div className="repo-detail-title"><div><h3>{selected.title}</h3><p>{selected.description}</p></div><span className="status-pill"><CheckCircle2 size={13}/>{selected.status}</span></div>
        <div className="repo-tech-row">{selected.stack.map(tag=><span key={tag}>{tag}</span>)}</div>
        <div className="project-screenshot-placeholder real-project-preview"><div className="fake-app-bar"><i/><b>{selected.slug}</b></div>{selected.image ? <img src={selected.image} alt={`${selected.title} screenshot`} loading="lazy"/> : <div className="missing-project-image"><Terminal size={20}/><span>Screenshot unavailable</span></div>}</div>
        <div className="repo-actions">{selected.liveUrl&&<a className="sw-btn primary liquid" href={selected.liveUrl} target="_blank" rel="noreferrer"><ExternalLink size={15}/> View Live Demo</a>}<a className="sw-btn" href={selected.github} target="_blank" rel="noreferrer"><Github size={15}/> View on GitHub</a></div>
      </motion.article>}</AnimatePresence>
    </div>
  </div>;
}
