import { motion } from "framer-motion";
import { reveal } from "../../features/shared/reveal";

export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <motion.div {...reveal}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{children}</p>
    </motion.div>
  );
}
