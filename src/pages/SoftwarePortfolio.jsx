import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import "../software-portfolio.css";
import "../certification-vault.css";
import { education } from "../features/education/data/education";
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
  const [theme, setTheme] = useState(
    () => localStorage.getItem("sw-theme") || "dark",
  );
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [activeEducation, setActiveEducation] = useState(0);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("sw-theme", theme);
  }, [theme]);
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      toast.success("Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Unable to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const edu = education[activeEducation];
  const eduJson = JSON.stringify(
    {
      qualification: edu.fullTitle,
      period: edu.year,
      score: edu.meta,
      focus: edu.focus,
    },
    null,
    2,
  );
  return (
    <div className="sw-shell">
        <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechStackSection />
        <EducationSection activeEducation={activeEducation} setActiveEducation={setActiveEducation} edu={edu} eduJson={eduJson} />
        <CertificationsSection />
        <ContactSection form={form} setForm={setForm} loading={loading} submit={submit} />
      </main>
        <Footer />
    </div>
  );
}
