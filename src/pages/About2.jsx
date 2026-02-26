import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useTime,
} from "framer-motion";
import { useRef } from "react";
import profile from "/src/assets/profile.jpg";
import reactLogo from "/src/assets/react.png";
import jsLogo from "/src/assets/js.png";
import mysql from "/src/assets/mysql.png";
import java from "/src/assets/java.png";
import tailwindLogo from "/src/assets/tailwindcss.png";
import springboot from "/src/assets/spring-boot.png";
import html from "/src/assets/html.png";
import css from "/src/assets/css.png";
import gmailLogo from "/src/assets/gmail logo.webp";
import linkedinLogo from "/src/assets/linkedin logo.png";
import githubLogo from "/src/assets/github logo.jpg";
import { Button } from "@/components/ui/button";
import { File } from "lucide-react";
import MissionLog2 from "@/components/MissionLog2";
import MissionLog3 from "@/components/MissionLog3";

export default function About2() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  const time = useTime();

  const baseOuterRotate = useTransform(time, (t) => t * 0.01);
  const baseInnerRotate = useTransform(time, (t) => -t * 0.015);

  const scrollOuterBoost = useTransform(smoothScroll, [0, 1], [0, 360]);
  const scrollInnerBoost = useTransform(smoothScroll, [0, 1], [0, -360]);

  const rotateOuter = useTransform(
    [baseOuterRotate, scrollOuterBoost],
    ([base, boost]) => base + boost,
  );

  const rotateInner = useTransform(
    [baseInnerRotate, scrollInnerBoost],
    ([base, boost]) => base + boost,
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const tiltX = useTransform(mouseY, [-20, 20], [10, -10]);
  const tiltY = useTransform(mouseX, [-20, 20], [-10, 10]);

  const innerSkillsData = [
    { img: reactLogo, name: "React" },
    { img: java, name: "Java" },
    { img: mysql, name: "MySQL" },
    { img: springboot, name: "Spring Boot" },
  ];

  const outerSkillsData = [
    { img: tailwindLogo, name: "Tailwind" },
    { img: jsLogo, name: "JavaScript" },
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
  ];

  const innerSkills = innerSkillsData.map((skill, index) => ({
    ...skill,
    angle: (360 / innerSkillsData.length) * index,
  }));

  const outerSkills = outerSkillsData.map((skill, index) => ({
    ...skill,
    angle: (360 / outerSkillsData.length) * index,
  }));

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

  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="relative min-h-screen bg-gradient-to-b from-[#2e1065] via-[#1a0f2e] to-[#0A0F1C] overflow-hidden flex items-center"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] 
        [background-size:50px_50px] opacity-50"
        ></div>
        <div className="relative z-10 max-w-9xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-400 tracking-[0.3em] text-sm text-center xl:text-start">
              MISSION LOG 01
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-white mt-6 text-center">
              About the Explorer
            </h2>

            <p className="text-gray-300 mt-8 leading-relaxed text-xl font-semibold text-center xl:text-start">
              I’m Sam Weslie Prabhakaran.
            </p>
            <p className="text-gray-300 mt-2 leading-relaxed text-lg mb-3 text-center xl:text-start">
              Software Engineer
            </p>

            <div className="flex flex-wrap justify-center md:justify-start py-5 text-white gap-5">
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
                  className="font-poppins font-medium bg-[var(--gold-rich)] hover:bg-[var(--gold-deep)]"
                >
                  <a href="/Sam_Resume.pdf" download>
                    <File size={18} /> Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div
            style={{ rotateX: tiltX, rotateY: tiltY, perspective: "1000px" }}
            className="relative flex items-center justify-center xl:ml-40 mt-20 mb-10"
          >
            <div
              className="relative xl:w-52 xl:h-52 rounded-full 
                          backdrop-blur-xl bg-white/10 
                          border border-white/20 
                          flex items-center justify-center"
            >
              <img
                src={profile}
                alt="profile"
                className="w-30 h-30 xl:w-40 xl:h-40 rounded-full object-cover"
              />
            </div>

            <motion.div
              style={{ rotate: rotateInner }}
              className="absolute w-62 h-62 xl:w-72 xl:h-72 rounded-full 
                       border border-yellow-400/30 
                       shadow-[0_0_40px_rgba(255,215,0,0.3)]"
            >
              {innerSkills.map((skill, i) => (
                <OrbitSkill
                  key={i}
                  skill={skill}
                  radius={136}
                  counterRotate={rotateInner}
                />
              ))}
            </motion.div>

            <motion.div
              style={{ rotate: rotateOuter }}
              className="absolute w-86 h-86 xl:w-96 xl:h-96 rounded-full 
                       border border-yellow-500/20 
                       shadow-[0_0_60px_rgba(255,215,0,0.2)]"
            >
              {outerSkills.map((skill, i) => (
                <OrbitSkill
                  key={i}
                  skill={skill}
                  radius={164}
                  counterRotate={rotateOuter}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <MissionLog2 />
      <MissionLog3 />
    </>
  );
}

function OrbitSkill({ skill, radius, counterRotate }) {
  const rad = ((skill.angle - 90) * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  const iconSize = 28;

  const negativeRotate = useTransform(counterRotate, (r) => -r);

  return (
    <motion.div
      className="absolute group"
      style={{
        left: `calc(50% + ${x}px - ${iconSize}px)`,
        top: `calc(50% + ${y}px - ${iconSize}px)`,
        rotate: negativeRotate,
      }}
    >
      <div
        className="relative flex items-center justify-center 
                      w-14 h-14 rounded-full 
                      bg-white/10 backdrop-blur-lg 
                      border border-white/20 cursor-pointer
                      hover:bg-white/20 transition-colors"
      >
        <img src={skill.img} alt={skill.name} className="w-7 h-7" />

        <span
          className="absolute -bottom-8 left-1/2 -translate-x-1/2
                         opacity-0 group-hover:opacity-100 
                         transition text-xs text-white 
                         bg-black/80 px-2 py-1 rounded whitespace-nowrap"
        >
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}
