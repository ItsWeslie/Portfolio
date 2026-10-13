import SectionHeading from "../../components/ui/SectionHeading";
import { motion } from "framer-motion";
import { stack } from "./data/technologies";
import { reveal } from "../shared/reveal";

export default function TechStackSection() {
  return (
    <>
        <section id="stack" className="sw-section sw-block">
          <SectionHeading eyebrow="03. TECH STACK" title="Technologies I work with.">
              A practical toolkit for building modern applications from
              interface to backend.
            </SectionHeading>
          <motion.div className="stack-grid" {...reveal}>
            {stack.map(({ name, Icon, className }) => (
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="stack-item"
                key={name}
              >
                <span className={`tech-logo ${className}`}>
                  <Icon aria-hidden="true" />
                </span>
                <b>{name}</b>
              </motion.div>
            ))}
          </motion.div>
        </section>
    </>
  );
}
