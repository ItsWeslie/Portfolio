import "../software-portfolio.css";
import "../certification-vault.css";
import Navbar from "../features/navigation/Navbar";
import HeroSection from "../features/hero/HeroSection";
import AboutSection from "../features/about/AboutSection";
import ProjectsSection from "../features/projects/ProjectsSection";
import TechStackSection from "../features/stack/TechStackSection";
import EducationSection from "../features/education/EducationSection";
import CertificationsSection from "../features/certifications/CertificationsSection";
import ContactSection from "../features/contact/ContactSection";
import Footer from "../features/footer/Footer";

export default function SoftwarePortfolio() {
  return (
    <div className="sw-shell">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechStackSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
