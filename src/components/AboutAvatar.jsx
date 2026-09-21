import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Sparkles, Terminal } from "lucide-react";
import avatar from "../assets/avatar-3d.webp";
import "../about-avatar.css";

export default function AboutAvatar() {
  const [target, setTarget] = useState(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 160, damping: 18 });
  const sy = useSpring(my, { stiffness: 160, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const avatarX = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const avatarY = useTransform(sy, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    setTarget(document.querySelector("#about"));
  }, []);

  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  if (!target) return null;

  return createPortal(
    <motion.aside
      className="about-avatar-stage"
      onMouseMove={move}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
    >
      <div className="avatar-grid" />
      <motion.div className="avatar-orbit orbit-one" animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} />
      <motion.div className="avatar-orbit orbit-two" animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
      <motion.div className="avatar-particle p1" animate={{ y: [0, -12, 0], opacity: [0.35, 1, 0.35] }} transition={{ duration: 3.2, repeat: Infinity }} />
      <motion.div className="avatar-particle p2" animate={{ y: [0, 10, 0], opacity: [0.25, 0.8, 0.25] }} transition={{ duration: 4.1, repeat: Infinity }} />
      <motion.div className="avatar-particle p3" animate={{ y: [0, -8, 0], opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 2.7, repeat: Infinity }} />
      <motion.img
        className="avatar-3d"
        src={avatar}
        alt="3D developer avatar of Sam Weslie"
        draggable="false"
        style={{ x: avatarX, y: avatarY }}
      />
      <motion.div className="avatar-chip chip-code glass" animate={{ y: [0, -7, 0] }} transition={{ duration: 3.5, repeat: Infinity }}><Code2 size={15}/><span>clean_code</span></motion.div>
      <motion.div className="avatar-chip chip-build glass" animate={{ y: [0, 7, 0] }} transition={{ duration: 4.2, repeat: Infinity }}><Terminal size={15}/><span>build → ship</span></motion.div>
      <div className="avatar-identity glass"><div><i/><span>DEVELOPER PROFILE</span></div><strong>Sam Weslie</strong><small>Software Engineer</small><p><Sparkles size={13}/> Building useful software with curiosity.</p></div>
    </motion.aside>,
    target
  );
}
