import { useEffect, useState } from "react";
import "./App.css";
import "./education-record.css";
import "./about-avatar.css";
import "./project-screenshots.css";
import "./apple-terminal.css";
import { Toaster } from "sonner";
import { AnimatePresence, motion } from "motion/react";
import LoadingThreeDotsJumping from "./components/LoadingThreeDotsJumping";
import WelcomeTextReveal from "./components/WelcomeTextReveal";
import ShapeMorphReveal from "./components/ShapeMorphReveal";
import SoftwarePortfolio from "./pages/SoftwarePortfolio";
import AboutAvatar from "./components/AboutAvatar";
import ProjectExplorerMount from "./components/ProjectExplorerMount";
import WesMind, { WesMindMark } from "./components/WesMind";
import DevelopmentTicker from "./components/DevelopmentTicker";

function App() {
  const [wesMindOpen,setWesMindOpen]=useState(false);
  const [isLoading,setIsLoading]=useState(true);
  const [introStage,setIntroStage]=useState("dots");
  useEffect(()=>{const greetingTimer=window.setTimeout(()=>setIntroStage("greeting"),2000);const welcomeTimer=window.setTimeout(()=>setIntroStage("welcome"),4700);const revealTimer=window.setTimeout(()=>setIntroStage("reveal"),7300);return()=>{window.clearTimeout(greetingTimer);window.clearTimeout(welcomeTimer);window.clearTimeout(revealTimer)}},[]);
  useEffect(()=>{const open=()=>setWesMindOpen(true);window.addEventListener("open-wesmind",open);return()=>window.removeEventListener("open-wesmind",open)},[]);
  return <>
    <AnimatePresence>
      {isLoading && <motion.div className="portfolio-loader" initial={{opacity:1}} exit={{opacity:0}} transition={{duration:0.45}}>
        {introStage === "dots" ? <><LoadingThreeDotsJumping /><span className="portfolio-loader-label">Preparing your experience</span></> : introStage === "greeting" ? <motion.div className="portfolio-greeting" aria-label="hi...">
          {Array.from("hi...").map((character,index)=><motion.span key={`${character}-${index}`} initial={{opacity:0,y:18,filter:"blur(8px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}} transition={{duration:0.75,delay:index*0.42,ease:[0.22,1,0.36,1]}}>{character}</motion.span>)}
        </motion.div> : introStage === "welcome" ? <WelcomeTextReveal /> : <ShapeMorphReveal onComplete={()=>setIsLoading(false)} /> }
      </motion.div>}
    </AnimatePresence>
    <Toaster position="bottom-right" richColors />
    <DevelopmentTicker />
    <SoftwarePortfolio />
    <AboutAvatar />
    <ProjectExplorerMount />
    {!wesMindOpen&&<button className="wes-float" onClick={()=>setWesMindOpen(true)} aria-label="Ask WesMind"><WesMindMark/><span className="wes-float-label">Ask WesMind</span></button>}
    <WesMind open={wesMindOpen} onClose={()=>setWesMindOpen(false)}/>
  </>;
}
export default App;
