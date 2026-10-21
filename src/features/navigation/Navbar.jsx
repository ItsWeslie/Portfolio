import { Moon, Sun, Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import profile from "/src/assets/logo.png";
import useTheme from "../../hooks/useTheme";

export default function Navbar() {
  const [theme, setTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigationItems = ["Home", "About", "Projects", "Stack", "Education", "Certifications", "Contact"];
  return (
      <header className="sw-nav glass">
        <a className="sw-brand" href="#home">
          <span>
            <img src={profile} alt="" className="w-10 h-10 rounded-full" />
          </span>
          <b>Sam Weslie Prabhakaran</b>
        </a>
        <nav>
          {navigationItems.map((x) => (
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
          <button
            className="sw-mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="sw-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a className="sw-btn compact" href="/Sam_Resume.pdf" download>
            Resume
          </a>
        </div>
        <div
          id="sw-mobile-menu"
          className={`sw-mobile-menu glass ${menuOpen ? "is-open" : ""}`}
          aria-hidden={!menuOpen}
        >
          {navigationItems.map((x) => (
            <a
              key={x}
              href={`#${x.toLowerCase()}`}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              {x}
            </a>
          ))}
        </div>
      </header>
  );
}
