import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Sparkles, X } from "lucide-react";
import "../wesmind.css";

function Logo(){return <span className="wes-logo"><b>W</b><Sparkles/></span>}
export default function WesMind({open=true,onClose=()=>{}}){
 const [message,setMessage]=useState(""); const [messages,setMessages]=useState([{sender:"bot",text:"Hi, I'm WesMind 👋 I can help you explore Sam's engineering work and experience. Ask me anything!"}]); const [typing,setTyping]=useState(false); const end=useRef(null);
 const suggestions=["Tell me about Sam's experience","Show me his projects","What technologies does he use?","Show Java certifications","Summarize his profile"];
 useEffect(()=>{end.current?.scrollIntoView({behavior:"smooth"})},[messages,typing]);
 useEffect(()=>{const esc=e=>e.key==="Escape"&&onClose();window.addEventListener("keydown",esc);return()=>window.removeEventListener("keydown",esc)},[onClose]);
 const send=async text=>{const q=text.trim();if(!q)return;setMessages(p=>[...p,{sender:"user",text:q}]);setMessage("");setTyping(true);try{const r=await fetch("https://sam-weslie-portfolio-backend.vercel.app/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:q})});const d=await r.json();setMessages(p=>[...p,{sender:"bot",text:d.reply||"I couldn't find an answer for that."}])}catch{setMessages(p=>[...p,{sender:"bot",text:"I’m having trouble connecting right now. Please try again shortly."}])}finally{setTyping(false)}};
 const submit=e=>{e.preventDefault();send(message)};
 return <AnimatePresence>{open&&<><motion.button className="wes-backdrop" aria-label="Close WesMind" onClick={onClose} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}/><motion.aside className="wes-panel" initial={{x:"105%",opacity:0}} animate={{x:0,opacity:1}} exit={{x:"105%",opacity:0}} transition={{type:"spring",stiffness:260,damping:28}}>
  <header className="wes-head"><div><Logo/><span><b>WesMind</b><small>Portfolio Intelligence</small></span></div><button onClick={onClose} aria-label="Close WesMind"><X/></button></header>
  <div className="wes-chat">{messages.map((m,i)=><motion.div key={i} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className={`wes-message ${m.sender}`}>{m.text}</motion.div>)}{messages.length===1&&<div className="wes-suggestions">{suggestions.map(s=><button key={s} onClick={()=>send(s)}>{s}<span>→</span></button>)}</div>}{typing&&<div className="wes-message bot wes-typing"><i/><i/><i/></div>}<div ref={end}/></div>
  <form className="wes-composer" onSubmit={submit}><input value={message} onChange={e=>setMessage(e.target.value)} placeholder="Ask WesMind..." required/><button aria-label="Send"><ArrowUp/></button></form><footer>Powered by WesMind · Built for meaningful conversations</footer>
 </motion.aside></>}</AnimatePresence>
}
export function WesMindMark(){return <Logo/>}
