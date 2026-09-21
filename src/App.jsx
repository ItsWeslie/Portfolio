import "./App.css";
import "./education-record.css";
import "./about-avatar.css";
import { Toaster } from "sonner";
import SoftwarePortfolio from "./pages/SoftwarePortfolio";
import AboutAvatar from "./components/AboutAvatar";

function App() {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <SoftwarePortfolio />
      <AboutAvatar />
    </>
  );
}

export default App;
