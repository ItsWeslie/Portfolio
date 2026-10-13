import SectionHeading from "../../components/ui/SectionHeading";
import { motion } from "framer-motion";
import CertificationVault from "../../components/CertificationVault";
import { reveal } from "../shared/reveal";

export default function CertificationsSection() {
  return (
    <>
        <section id="certifications" className="sw-section sw-block">
          <SectionHeading eyebrow="05. CERTIFICATIONS" title="Validated learning.">
              Professional certifications and learning achievements that
              strengthen my skills as a software engineer.
            </SectionHeading>
          <CertificationVault />
        </section>
    </>
  );
}
