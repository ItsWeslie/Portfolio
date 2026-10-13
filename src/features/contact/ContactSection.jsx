import { useState } from "react";
import { toast } from "sonner";
import { sendContactMessage } from "./emailService";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { reveal } from "../shared/reveal";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendContactMessage(form);
      toast.success("Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Unable to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
        <section id="contact" className="sw-section contact-section">
          <motion.div className="contact-copy" {...reveal}>
            <p className="eyebrow">06. CONTACT</p>
            <h2>Let’s build something useful.</h2>
            <p>
              Have an opportunity, project, or engineering problem worth
              discussing? I’d be happy to connect.
            </p>
            <div className="contact-links">
              <a href="mailto:itssamwesliehere@gmail.com">
                <Mail />
                itssamwesliehere@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/samweslie14/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
                LinkedIn
              </a>
              <a
                href="https://github.com/ItsWeslie"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
                GitHub
              </a>
            </div>
          </motion.div>
          <motion.form
            className="contact-form glass liquid-card"
            onSubmit={submit}
            {...reveal}
          >
            <div className="form-title">
              <i /> Send a message
            </div>
            <div className="form-row">
              <input
                aria-label="Name"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                aria-label="Email"
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <textarea
              aria-label="Message"
              placeholder="Your message..."
              required
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button className="sw-btn primary liquid" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
              <Send size={15} />
            </button>
          </motion.form>
        </section>
  );
}
