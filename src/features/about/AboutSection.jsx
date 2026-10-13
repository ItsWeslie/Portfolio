import { Code2, Terminal, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { reveal } from "../shared/reveal";

export default function AboutSection() {
  return (
    <>
        <section id="about" className="sw-section sw-block">
          <motion.div {...reveal}>
            <p className="eyebrow">01. ABOUT</p>
            <h2>Engineering with curiosity.</h2>
            <p className="section-copy">
              I’m Sam Weslie Prabhakaran, a Software Engineer focused on turning
              ideas into real world solutions. I enjoy understanding how systems
              work, solving real world problems, and continuously expanding my
              engineering knowledge.
            </p>
          </motion.div>
          <motion.div className="principles" {...reveal}>
            {[
              [Code2, "Problem solver"],
              [Terminal, "Clean-code mindset"],
              [GraduationCap, "Continuous learner"],
            ].map(([Icon, t]) => (
              <div className="principle" key={t}>
                <Icon />
                <b>{t}</b>
              </div>
            ))}
          </motion.div>
        </section>
    </>
  );
}
