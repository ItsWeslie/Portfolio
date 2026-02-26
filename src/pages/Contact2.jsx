import { useState } from "react";
import { motion } from "framer-motion";
import linkedinLogo from "/src/assets/linkedin logo.png";
import gmailLogo from "/src/assets/gmail logo.webp";
import githubLogo from "/src/assets/github logo.jpg";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function Contact2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      .then(() => {
        toast.success("Transmission completed!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        toast.error("Failed to send email. Please try again later.");
      });
  };

  const contactDetails = [
    {
      id: 1,
      img: gmailLogo,
      description: "Itssamwesliehere@gmail.com",
    },
    {
      id: 2,
      img: linkedinLogo,
      description: "linkedin.com/in/samweslie14",
    },
    {
      id: 3,
      img: githubLogo,
      description: "github.com/ItsWeslie",
    },
  ];

  const [loading, setLoading] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="relative min-h-screen bg-gradient-to-b from-[#2e1065] via-[#1a0f2e] to-[#0A0F1C] flex items-center justify-center overflow-hidden px-2.5 xl:px-6"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] 
        [background-size:50px_50px] opacity-50"
        ></div>

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-400 tracking-[0.4em] text-sm">
              MISSION LOG 07
            </p>

            <h2 className="text-4xl xl:text-6xl font-bold text-white mt-4">
              Establish Connection
            </h2>

            <p className="text-gray-400 mt-6">
              Ready to collaborate, build something impactful, or discuss
              opportunities? Send a transmission and let’s make it happen.
            </p>

            <div className="mt-10 space-y-4 text-gray-300">
              {contactDetails.map((data) => {
                return (
                  <div key={data.id} className="flex gap-5">
                    <span>
                      <img
                        className="w-6 h-6 rounded-full"
                        src={data.img}
                        alt="LinkedIn.png"
                      />
                    </span>
                    <p>{data.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 shadow-[0_0_40px_var(--gold-rich)] mb-25 xl:mb-0"
          >
            <div className="space-y-6">
              <input
                value={formData.name}
                onChange={handleChange}
                id="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition"
              />

              <input
                value={formData.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition"
              />

              <textarea
                value={formData.message}
                onChange={handleChange}
                id="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition"
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold text-white transition 
              ${
                loading
                  ? "bg-bg-[var(--gold-deep)] cursor-not-allowed"
                  : "bg-[var(--gold-rich)] hover:bg-[var(--gold-dark)] shadow-[0_0_25px_var(--gold-rich)]"
              }`}
              >
                {loading ? "Transmitting..." : "Send Transmission"}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}
