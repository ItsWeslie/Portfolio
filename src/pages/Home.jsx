import React from "react";
import { motion } from "framer-motion";

import logo from "/src/assets/logo.png";
import gmailLogo from "/src/assets/gmail logo.webp";
import linkedinLogo from "/src/assets/linkedin logo.png";
import githubLogo from "/src/assets/github logo.jpg";
import profile from "/src/assets/profile.jpg";

import SplitText from "/src/components/TextAnimations/SplitText/SplitText.jsx";
import TextPressure from "../components/TextAnimations/TextPressure/TextPressure";
import { Button } from "@/components/ui/button";
import { File } from 'lucide-react';


const SocialLink = ({ icon, label, url, ...rest }) => (
  <a
    href={url}
    {...rest}
    className="flex items-center gap-2 text-sm font-medium font-poppins hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={icon} alt={`${label} logo`} className="w-8 h-8 rounded-full" />
    {label}
  </a>
);


const MotionSocialLink = motion(SocialLink);

function Home() {
  return (
    <>
      
      <header className="gap-8 mx-auto px-5 sm:px-6 lg:px-8">
        <nav className="flex flex-col sm:flex-row justify-between items-center py-5 gap-4">
          <div className="text-center">
            <a href="#">
              <img
                src={logo}
                alt="logo"
                className="h-10 w-10 rounded-full mx-auto sm:mx-0"
              />
            </a>
            <p className="pt-2 font-semibold font-poppins">Hi!</p>
          </div>

          <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8 font-semibold font-poppins">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      
      <main className="mx-auto sm:px-6 px-5 lg:px-8 my-10 md:my-20">
        <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
          
          <div className="md:ml-20 text-center md:text-left">
            <TextPressure
              text="Hello!"
              className="text-4xl sm:text-4xl md:text-5xl font-bold font-poppins w-full max-w-md mx-auto md:mx-0"
            />

            <SplitText
              text="I'm Sam Weslie Prabhakaran"
              className="text-base sm:text-xl md:text-5xl font-semibold font-poppins py-4 block mb-2"
            />

            <SplitText
              text="Java Full Stack Developer."
              className=" sm: text-lg lg:mr-60 md:text-xl font-medium font-poppins ml-0"
            />

            
            <div className="flex flex-wrap justify-center md:justify-start gap-5 py-5">
              <MotionSocialLink
                icon={gmailLogo}
                label="Mail"
                url="mailto:itssamwesliehere@gmail.com"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <MotionSocialLink
                icon={linkedinLogo}
                label="LinkedIn"
                url="https://www.linkedin.com/in/samweslie14/"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <MotionSocialLink
                icon={githubLogo}
                label="GitHub"
                url="https://github.com/ItsWeslie"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  asChild
                  className="font-poppins font-medium"
                >
                  <a 
                    href="/Sam_Weslie_Resume.pdf"
                    download
                  >
                   <File size={18}/> Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>

          
          <motion.div
            className="w-48 h-48 md:w-80 md:h-80 md:mr-25"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={profile}
              alt="Sam Weslie Prabhakaran"
              className="rounded-full w-full h-full object-cover"
            />
          </motion.div>
        </section>
      </main>
    </>
  );
}

export default Home;
