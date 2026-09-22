import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, CalendarDays, ChevronLeft, ChevronRight, Download, ExternalLink, FileBadge2, Maximize2, Search, Tag, X } from "lucide-react";
import coreJava from "../assets/coreJava.png";
import javaNptel from "../assets/javaNptel.png";
import sweCert from "../assets/SWECert.png";
import jsCert from "../assets/jsCert.png";
import sqlCert from "../assets/sqlCert.png";

const localCertifications = [
  {id:1,title:"Programming in Core Java",issuer:"T4TEQ Software Solutions",year:"2025",category:"Java",document:coreJava},
  {id:2,title:"Programming in Java",issuer:"NPTEL",year:"2025",category:"Java",document:javaNptel},
  {id:3,title:"Certified Software Engineer",issuer:"HackerRank",year:"2025",category:"Engineering",document:sweCert},
  {id:4,title:"JavaScript",issuer:"HackerRank",year:"2025",category:"Web",document:jsCert},
  {id:5,title:"SQL",issuer:"HackerRank",year:"2024",category:"Database",document:sqlCert},
];

const PAGE_SIZE=5;
export default function CertificationVault({certifications=localCertifications}){
  const [query,setQuery]=useState(""); const [category,setCategory]=useState("All"); const [sort,setSort]=useState("newest");
  const [page,setPage]=useState(1); const [selectedId,setSelectedId]=useState(certifications[0]?.id); const [lightbox,setLightbox]=useState(false);
  const categories=useMemo(()=>["All",...new Set(certifications.map(c=>c.category))],[certifications]);
  const filtered=useMemo(()=>{const q=query.trim().toLowerCase();return certifications.filter(c=>(category==="All"||c.category===category)&&(!q||`${c.title} ${c.issuer} ${c.category}`.toLowerCase().includes(q))).sort((a,b)=>sort==="newest"?Number(b.year)-Number(a.year):sort==="oldest"?Number(a.year)-Number(b.year):a.title.localeCompare(b.title));},[certifications,query,category,sort]);
  const pages=Math.max(1,Math.ceil(filtered.length/PAGE_SIZE)); const safePage=Math.min(page,pages); const start=(safePage-1)*PAGE_SIZE; const visible=filtered.slice(start,start+PAGE_SIZE);
  const selected=certifications.find(c=>c.id===selectedId) || visible[0] || certifications[0];
  const changeFilter=(value)=>{setCategory(value);setPage(1);}; const changeSearch=(value)=>{setQuery(value);setPage(1);};
  const goPage=(next)=>{const p=Math.min(Math.max(next,1),pages);setPage(p);const first=filtered[(p-1)*PAGE_SIZE];if(first)setSelectedId(first.id);};
  const pageButtons=()=>{if(pages<=7)return Array.from({length:pages},(_,i)=>i+1);const values=[1];if(safePage>4)values.push("left");for(let p=Math.max(2,safePage-1);p<=Math.min(pages-1,safePage+1);p++)values.push(p);if(safePage<pages-3)values.push("right");values.push(pages);return values;};
  return <div className="cert-vault">
    <div className="cert-toolbar glass"><label className="cert-search"><Search size={15}/><input value={query} onChange={e=>changeSearch(e.target.value)} placeholder="Search certifications..."/></label><div className="cert-filters">{categories.map(c=><button type="button" key={c} className={category===c?"active":""} onClick={()=>changeFilter(c)}>{c}<small>{c==="All"?certifications.length:certifications.filter(x=>x.category===c).length}</small></button>)}</div><label className="cert-sort">Sort by <select value={sort} onChange={e=>setSort(e.target.value)}><option value="newest">Newest</option><option value="oldest">Oldest</option><option value="title">A–Z</option></select></label></div>
    <div className="cert-vault-layout">
      <div className="cert-library glass"><div className="cert-panel-title"><span><Award size={17}/> Certification Library</span><small>{filtered.length?`Showing ${start+1}–${Math.min(start+PAGE_SIZE,filtered.length)} of ${filtered.length}`:"0 records"}</small></div><div className="cert-list">{visible.map((c,i)=><button type="button" className={`cert-row ${selected?.id===c.id?"active":""}`} key={c.id} onClick={()=>setSelectedId(c.id)}><span className="cert-index">{String(start+i+1).padStart(2,"0")}</span><FileBadge2 size={20}/><span className="cert-row-copy"><b>{c.title}</b><small>{c.issuer} · {c.year}</small></span><em>{c.category}</em><ChevronRight size={16}/></button>)}{!visible.length&&<div className="cert-empty"><Search/><b>No credentials found</b><small>Try another search or category.</small></div>}</div><div className="cert-pagination"><span>{filtered.length?`Showing ${start+1}–${Math.min(start+PAGE_SIZE,filtered.length)} of ${filtered.length} credentials`:"No credentials"}</span>{pages>1&&<nav aria-label="Certification pages"><button disabled={safePage===1} onClick={()=>goPage(safePage-1)}><ChevronLeft size={15}/></button>{pageButtons().map((p,i)=>typeof p==="number"?<button key={p} className={safePage===p?"active":""} onClick={()=>goPage(p)}>{p}</button>:<span key={`${p}-${i}`}>…</span>)}<button disabled={safePage===pages} onClick={()=>goPage(safePage+1)}><ChevronRight size={15}/></button></nav>}</div></div>
      {selected&&<motion.article className="cert-preview glass" layout><div className="cert-panel-title"><span><FileBadge2 size={17}/> Certificate Preview</span><button className="cert-fullscreen" onClick={()=>setLightbox(true)}><Maximize2 size={14}/> Full Screen</button></div><AnimatePresence mode="wait"><motion.div key={selected.id} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.22}}><button className="cert-document" onClick={()=>setLightbox(true)} aria-label={`Open ${selected.title} certificate`}><img src={selected.document} alt={`${selected.title} certificate`}/></button><div className="cert-detail"><div><h3>{selected.title}</h3><p>{selected.issuer}</p><div className="cert-meta"><span><CalendarDays/> Issued: {selected.year}</span><span><Tag/> Category: {selected.category}</span></div></div><div className="cert-actions"><button className="sw-btn primary" onClick={()=>setLightbox(true)}><ExternalLink size={14}/> View Full Certificate</button><a className="sw-btn" href={selected.document} download><Download size={14}/> Download</a></div></div></motion.div></AnimatePresence></motion.article>}
    </div>
    <AnimatePresence>{lightbox&&selected&&<motion.div className="cert-lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setLightbox(false)}><button className="cert-lightbox-close" onClick={()=>setLightbox(false)} aria-label="Close certificate"><X/></button><motion.img initial={{scale:.94,y:20}} animate={{scale:1,y:0}} src={selected.document} alt={`${selected.title} full certificate`} onClick={e=>e.stopPropagation()}/><div className="cert-lightbox-caption"><b>{selected.title}</b><span>{selected.issuer} · {selected.year}</span></div></motion.div>}</AnimatePresence>
  </div>;
}
