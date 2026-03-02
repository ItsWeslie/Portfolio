import Navbar from "@/components/Navbar";
import React from "react";
import TextPressure from "../components/TextAnimations/TextPressure/TextPressure";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

function Home2() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);
  return (
    <>
      <main id="home" className="relative overflow-hidden min-h-screen bg-[url(/src/assets/bg-gif.gif)] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />
        <motion.div
          ref={ref}
          style={{ y, scale, opacity }}
          className="relative z-10 flex items-center justify-center min-h-screen p-8"
        >
          <TextPressure
            text="Welcome, Voyager!"
            textColor="white"
            className="flex justify-self-center tracking-widest"
          />
        </motion.div>
      </main>
    </>
  );
}

export default Home2;
