import "./App.css";
import "./education-record.css";
import "./about-avatar.css";
import "./project-screenshots.css";
import { Toaster } from "sonner";
import SoftwarePortfolio from "./pages/SoftwarePortfolio";
import AboutAvatar from "./components/AboutAvatar";
import ProjectExplorerMount from "./components/ProjectExplorerMount";

function App() {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <SoftwarePortfolio />
      <AboutAvatar />
      <ProjectExplorerMount />
    </>
  );
}

export default App;
