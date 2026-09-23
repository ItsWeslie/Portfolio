import { useState } from "react";
import { X } from "lucide-react";
import "../development-ticker.css";

const updates = [
  "This portfolio is actively being engineered",
  "New features, projects & WesMind integration are in development",
  "More engineering work coming soon",
  "git status: active",
  "Building · learning · shipping",
];

function TickerTrack(){
  return <div className="dev-ticker-track" aria-hidden="true">
    {updates.map((text,index)=><span className={text.startsWith("git status")?"dev-ticker-git":""} key={`${text}-${index}`}><i>◆</i>{text}</span>)}
  </div>;
}

export default function DevelopmentTicker(){
  const [visible,setVisible]=useState(()=>sessionStorage.getItem("portfolio-status-dismissed")!=="true");
  const dismiss=()=>{sessionStorage.setItem("portfolio-status-dismissed","true");setVisible(false)};
  if(!visible)return null;
  return <aside className="dev-ticker" aria-label="Portfolio development status">
    <div className="dev-ticker-status"><i/><strong>PORTFOLIO STATUS</strong><b aria-hidden="true">|</b></div>
    <div className="dev-ticker-window">
      <div className="dev-ticker-marquee"><TickerTrack/><TickerTrack/></div>
    </div>
    <button className="dev-ticker-close" onClick={dismiss} aria-label="Dismiss portfolio status"><X/></button>
  </aside>;
}
