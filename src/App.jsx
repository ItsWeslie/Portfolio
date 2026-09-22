import { useState } from "react";
import "./App.css";
import "./education-record.css";
import "./about-avatar.css";
import "./project-screenshots.css";
import "./apple-terminal.css";
import { Toaster } from "sonner";
import SoftwarePortfolio from "./pages/SoftwarePortfolio";
import AboutAvatar from "./components/AboutAvatar";
import ProjectExplorerMount from "./components/ProjectExplorerMount";
import WesMind, { WesMindMark } from "./components/WesMind";

function App() {
  const [wesMindOpen,setWesMindOpen]=useState(false);
  return <>
    <Toaster position="bottom-right" richColors />
    <SoftwarePortfolio />
    <AboutAvatar />
    <ProjectExplorerMount />
    {!wesMindOpen&&<button className="wes-float" onClick={()=>setWesMindOpen(true)} aria-label="Ask WesMind"><WesMindMark/><span className="wes-float-label">Ask WesMind</span></button>}
    <WesMind open={wesMindOpen} onClose={()=>setWesMindOpen(false)}/>
  </>;
}
export default App;
