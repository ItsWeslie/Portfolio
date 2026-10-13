import { Download, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { reveal } from "../shared/reveal";

export default function HeroSection() {
  return (
    <>
        <section id="home" className="sw-hero sw-section">
          <motion.div className="hero-copy" {...reveal}>
            <p className="eyebrow">BUILD · SOLVE · IMPROVE</p>
            <h1>
              Hi, I'm Sam Weslie
              <br />
              <span>Prabhakaran</span>
            </h1>
            <p className="hero-lead">
              Software Engineer building scalable software products. Skilled in
              both frontend and backend technologies, with writing clean and
              scalable code.
            </p>
            <div className="hero-actions">
              <a className="sw-btn primary liquid" href="#projects">
                View my work <span>→</span>
              </a>
              <a className="sw-btn" href="/Sam_Resume.pdf" download>
                <Download size={16} /> Download resume
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <strong>Java</strong>
                <small>Backend</small>
              </div>
              <div>
                <strong>React</strong>
                <small>Frontend</small>
              </div>
              <div>
                <strong>MySQL</strong>
                <small>Database</small>
              </div>
              <div>
                <strong>∞</strong>
                <small>Always learning</small>
              </div>
            </div>
            <div className="availability glass">
              <i />
              <div>
                <b>Assistant System Engineer @ TCS</b>
                <small>Chennai, Tamil Nadu.</small>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="dev-console"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="editor glass liquid-card">
              <div className="window-bar">
                <span />
                <span />
                <span />
                <b>developer.js</b>
              </div>
              <pre>
                <code>
                  <em>// Ideas into Reality</em>
                  {`\n`}const ASE = {"{"}
                  {`\n`} name: <mark>"Sam Weslie Prabhakaran"</mark>,{`\n`}{" "}
                  role: <mark>"Software Engineer"</mark>,{`\n`} focus: ["Java",
                  "React", "DBMS"],{`\n`} principle:{" "}
                  <mark>"Clean code. Real impact."</mark>
                  {`\n`}
                  {"}"};
                </code>
              </pre>
            </div>
            <div className="terminal glass liquid-card">
              <div className="window-bar">
                <Terminal size={14} />
                <b>sam@portfolio:~</b>
              </div>
              <p>
                <span>$</span> npm run dev
              </p>
              <p>✓ portfolio ready</p>
              <p>✓ building · learning · shipping</p>
              <p className="cursor">▌</p>
            </div>
            <div className="orb orb-a" />
            <div className="orb orb-b" />
          </motion.div>
        </section>
    </>
  );
}
