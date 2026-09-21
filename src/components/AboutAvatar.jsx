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
  const rotateY = useTransform(sx, [-.5,.5], [-7,7]);
  const rotateX = useTransform(sy, [-.5,.5], [6,-6]);

  useEffect(() => setTarget(document.querySelector("#about")), []);
  if (!target) return null;

  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX-r.left)/r.width-.5);
    my.set((e.clientY-r.top)/r.height-.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return createPortal(
    <motion.aside className="about-avatar-stage" onMouseMove={move} onMouseLeave={reset} style={{rotateX,rotateY,transformPerspective:1000}} initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.25}} transition={{duration:.7}}>
      <div className="avatar-grid" />
      <motion.div className="avatar-orbit orbit-one" animate={{rotate:360}} transition={{duration:22,repeat:Infinity,ease:"linear"}} />
      <motion.div className="avatar-orbit orbit-two" animate={{rotate:-360}} transition={{duration:30,repeat:Infinity,ease:"linear"}} />
      <motion.div className="avatar-particle p1" animate={{y:[0,-12,0],opacity:[.35,1,.35]}} transition={{duration:3.2,repeat:Infinity}} />
      <motion.div className="avatar-particle p2" animate={{y:[0,10,0],opacity:[.25,.8,.25]}} transition={{duration:4.1,repeat:Infinity}} />
      <motion.div className="avatar-particle p3" animate={{y:[0,-8,0],opacity:[.3,.9,.3]}} transition={{duration:2.7,repeat:Infinity}} />
      <motion.img className="avatar-3d" src={avatar} alt="3D developer avatar of Sam Weslie" draggable="false" style={{x:useTransform(sx,[-.5,.5],[-8,8]),y:useTransform(sy,[-.5,.5],[-5,5])}} />
      <motion.div className="avatar-chip chip-code glass" animate={{y:[0,-7,0]}} transition={{duration:3.5,repeat:Infinity}}><Code2 size={15}/><span>clean_code</span></motion.div>
      <motion.div className="avatar-chip chip-build glass" animate={{y:[0,7,0]}} transition={{duration:4.2,repeat:Infinity}}><Terminal size={15}/><span>build → ship</span></motion.div>
      <div className="avatar-identity glass"><div><i/><span>DEVELOPER PROFILE</span></div><strong>Sam Weslie</strong><small>Software Engineer</small><p><Sparkles size={13}/> Building useful software with curiosity.</p></div>
    </motion.aside>, target
  );
}
