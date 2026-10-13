import { Moon, Sun, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import profile from "/src/assets/logo.png";

export default function Navbar({ theme, setTheme }) {
  return (
    <>
      <header className="sw-nav glass">
        <a className="sw-brand" href="#home">
          <span>
            <img src={profile} alt="" className="w-10 h-10 rounded-full" />
          </span>
          <b>Sam Weslie Prabhakaran</b>
        </a>
        <nav>
          {[
            "Home",
            "About",
            "Projects",
            "Stack",
            "Education",
            "Certifications",
            "Contact",
          ].map((x) => (
            <a key={x} href={`#${x.toLowerCase()}`} className="font-semibold">
              {x}
            </a>
          ))}
        </nav>
        <div className="sw-nav-actions">
          <button
            className="wes-nav-button"
            onClick={() => window.dispatchEvent(new Event("open-wesmind"))}
            aria-label="Open WesMind"
          >
            <span className="wes-nav-mark">
              <b>W</b>
              <Sparkles />
            </span>
            <span>WesMind</span>
          </button>
          <button
            className="theme-toggle"
            aria-label="Toggle color theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              {theme === "dark" ? <Moon size={15} /> : <Sun size={15} />}
            </motion.span>
          </button>
          <a className="sw-btn compact" href="/Sam_Resume.pdf" download>
            Resume
          </a>
        </div>
      </header>
    </>
  );
}
