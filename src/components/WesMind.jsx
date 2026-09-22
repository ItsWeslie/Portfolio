import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Award, Code2, Layers3, Lightbulb, Paperclip, Sparkles, X } from "lucide-react";
import "../wesmind.css";

function Logo(){return <span className="wes-logo"><b>W</b><Sparkles/></span>}
const cards=[
 {title:"Backend experience",sub:"Ask about Java, Spring Boot, systems...",Icon:Code2,prompt:"Tell me about Sam's backend experience"},
 {title:"Explore projects",sub:"Get details about featured work",Icon:Layers3,prompt:"Show me Sam's projects"},
 {title:"Skills & technologies",sub:"See the full tech stack",Icon:Lightbulb,prompt:"What technologies does Sam use?"},
 {title:"Certifications",sub:"Explore learning credentials",Icon:Award,prompt:"Show me Sam's certifications"},
];
const chips=["What projects showcase Java?","Show my certifications","What technologies do you use?","Tell me about Sam"];
export default function WesMind({open=true,onClose=()=>{}}){
 const [message,setMessage]=useState(""); const [messages,setMessages]=useState([]); const [typing,setTyping]=useState(false); const [tab,setTab]=useState("Ask"); const end=useRef(null);
 useEffect(()=>{end.current?.scrollIntoView({behavior:"smooth"})},[messages,typing]);
 useEffect(()=>{const esc=e=>e.key==="Escape"&&onClose();window.addEventListener("keydown",esc);return()=>window.removeEventListener("keydown",esc)},[onClose]);
 const send=async text=>{const q=text.trim();if(!q)return;setMessages(p=>[...p,{sender:"user",text:q}]);setMessage("");setTyping(true);try{const r=await fetch("https://sam-weslie-portfolio-backend.vercel.app/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:q})});const d=await r.json();setMessages(p=>[...p,{sender:"bot",text:d.reply||"I couldn't find an answer for that."}])}catch{setMessages(p=>[...p,{sender:"bot",text:"I’m having trouble connecting right now. Please try again shortly."}])}finally{setTyping(false)}};
 return <AnimatePresence>{open&&<><motion.button className="wes-backdrop" aria-label="Close WesMind" onClick={onClose} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}/><motion.aside className="wes-panel" initial={{x:"105%"}} animate={{x:0}} exit={{x:"105%"}} transition={{type:"spring",stiffness:280,damping:30}}>
  <header className="wes-head"><div><Logo/><span><b>WesMind</b><small>Portfolio Intelligence</small></span></div><div className="wes-head-actions"><span className="wes-online"><i/>Online</span><button onClick={onClose} aria-label="Close WesMind"><X/></button></div></header>
  <nav className="wes-tabs">{["Ask","Explore","Discover","Connect"].map(x=><button className={tab===x?"active":""} onClick={()=>setTab(x)} key={x}>{x}</button>)}</nav>
  <div className="wes-chat">
   {messages.length===0&&<><div className="wes-welcome"><b>Hi, I’m WesMind 👋</b><p>I can help you explore Sam’s engineering work, skills, projects, certifications and more.</p><p>What would you like to know?</p></div><div className="wes-cards">{cards.map(({title,sub,Icon,prompt})=><button key={title} onClick={()=>send(prompt)}><span className="wes-card-icon"><Icon/></span><span><b>{title}</b><small>{sub}</small></span><strong>→</strong></button>)}</div><div className="wes-chips">{chips.map(x=><button key={x} onClick={()=>send(x)}>{x}<span>→</span></button>)}</div></>}
   {messages.map((m,i)=><motion.div key={i} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className={`wes-message ${m.sender}`}>{m.text}</motion.div>)}{typing&&<div className="wes-message bot wes-typing"><i/><i/><i/></div>}<div ref={end}/>
  </div>
  <form className="wes-composer" onSubmit={e=>{e.preventDefault();send(message)}}><span className="wes-attach"><Paperclip/></span><input value={message} onChange={e=>setMessage(e.target.value)} placeholder="Ask WesMind..." required/><button aria-label="Send"><ArrowUp/></button></form><footer>Powered by WesMind <i/> Built for meaningful conversations</footer>
 </motion.aside></>}</AnimatePresence>
}
export function WesMindMark(){return <Logo/>}
