import "./App.css";
import { Toaster } from "sonner";
import Home2 from "./pages/Home2";
import About2 from "./pages/About2";
import Projects2 from "./pages/Projects2";
import Contact2 from "./pages/Contact2";
import Footer2 from "./pages/Footer2";
import PersonalAchievements from "./pages/PersonalAchievements";
import Education2 from "./pages/Education2";
import WesMind from "./components/WesMind";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [showWesMind, setShowWesMind] = useState(false);
  return (
    <>
      <Navbar showWesMind={showWesMind} setShowWesMind={setShowWesMind} />
      <Toaster position="bottom-right" richColors />
      <section id="home">
        <Home2 />
      </section>
      <section id="about">
        <About2 />
      </section>
      <section id="projects">
        <Projects2 />
      </section>
      <section id="education">
        <Education2 />
      </section>
      <section id="achievements">
        <PersonalAchievements />
      </section>
      <section id="contact">
        <Contact2 />
      </section>
      <section id="footer">
        <Footer2 />
      </section>
      <AnimatePresence>
      {showWesMind && <WesMind onClose={() => setShowWesMind(false)} />}
      </AnimatePresence>
    </>
  );
}

export default App;
