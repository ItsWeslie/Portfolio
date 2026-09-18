import "./App.css";
import "./cinematic.css";
import { Toaster } from "sonner";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import WesMind from "./components/WesMind";
import CinematicPortfolio from "./pages/CinematicPortfolio";

function App() {
  const [showWesMind, setShowWesMind] = useState(false);
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <CinematicPortfolio onOpenWesMind={() => setShowWesMind(true)} />
      <AnimatePresence>
        {showWesMind && <WesMind onClose={() => setShowWesMind(false)} />}
      </AnimatePresence>
    </>
  );
}

export default App;
