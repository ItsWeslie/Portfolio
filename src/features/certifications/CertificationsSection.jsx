import { motion } from "framer-motion";
import CertificationVault from "../../components/CertificationVault";
import { reveal } from "../shared/reveal";

export default function CertificationsSection() {
  return (
    <>
        <section id="certifications" className="sw-section sw-block">
          <motion.div {...reveal}>
            <p className="eyebrow">05. CERTIFICATIONS</p>
            <h2>Validated learning.</h2>
            <p className="section-copy">
              Professional certifications and learning achievements that
              strengthen my skills as a software engineer.
            </p>
          </motion.div>
          <CertificationVault />
        </section>
    </>
  );
}
