import React from 'react'
import profile from '/src/assets/profile 2.png'

import techstack4 from '/src/assets/tech_stack4.jpg'
import java2 from '/src/assets/java2.png'
import js from '/src/assets/js.png'
import html from '/src/assets/html.png'
import mongodb from '/src/assets/mongodb.png'
import mysql from '/src/assets/mysql.png'
import reactLogo2 from '/src/assets/react.png'
import tailwindcss2 from '/src/assets/tailwindcss2.png'
import springboot from '/src/assets/spring-boot.png'
import certification from '/src/assets/certificate2.png'
import education from '/src/assets/education.jpg'
import BlurText from '@/components/TextAnimations/BlurText/BlurText'
import SplitText from "/src/components/TextAnimations/SplitText/SplitText.jsx";
import {motion} from 'framer-motion';



function About() {
  return (
    <>
      
      <div className='mx-auto text-center'>
      <SplitText className=' font-poppins font-bold text-2xl lg:text-5xl lg:pt-35 lg:pb-10' text= 'About me'/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10'>
            <motion.img
              className="mx-auto lg:mx-50 my-8 rounded-full"
              src={profile}
              width={280}
              height={300}
              alt="sam-profile.png"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            />        
      <div>
          <BlurText text='Hi,' className='font-poppins text-2xl lg:text-3xl font-semibold pt-10 mx-15 '/>
          <ul className='text-justify font-poppins text-xl pt-2 mx-15'>
            <BlurText text='I’m Sam Weslie Prabhakaran.' className='intro-pad'/>
            <BlurText text='I recently completed my MCA and I’m skilled in Java Full Stack Development.' className='intro-pad'/>
            <BlurText text="I have worked on different projects during my academic period and worked as freelance developer." className='intro-pad'/>
            <BlurText className='intro-pad' text='I enjoy learning new things and improving my skills.'/>
            <BlurText className='intro-pad' text='My goal is to grow as a developer and take on new challenges.'/>
          </ul>
        </div>

        <div className='px-5 py-10 text-center'>
          <SplitText className='font-poppins font-semibold text-2xl lg:ml-14 pb-8' text='Technical Skills'/>
        
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 pb-10'>
            <span className='my-techstack'><img src={reactLogo2} className='tech-stack-img' alt="react-logo.png" width={40}/>React</span>
            <span className='my-techstack'><img className='rounded-full tech-stack-img' src={springboot} alt="spring-boot.png" width={40}/>Spring Boot</span>
            <span className='my-techstack'><img className='tech-stack-img' src={java2} alt="java-logo.png" width={40}/>Java</span>
            <span className='my-techstack'><img className='tech-stack-img' src={mysql} alt="mysql-logo.png" width={40}/>MySQL</span>
            <span className='my-techstack'><img className='tech-stack-img' src={mongodb} alt="mongodb-logo.png" width={40}/>Mongo DB</span>
            <span className='my-techstack'><img className='tech-stack-img' src={html} alt="html-logo.png" width={40}/>HTML</span>
            <span className='my-techstack'><img className='tech-stack-img' src={tailwindcss2} alt="css-logo.png" width={40}/>Tailwind CSS</span>
            <span className='my-techstack'><img className='tech-stack-img' src={js} alt="js-logo.png" width={40}/>JavaScript</span>
          </div>

        </div>

        <div className='py-10 hidden lg:block'>

          <motion.img 
          src={techstack4} 
          className='rounded-full  h-80 w-80  ml-60' 
          alt="techstack.png"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }} 
          />
        </div>

        <div className='py-14 hidden lg:block'>
          
          <motion.img 
          className='w-80 rounded-2xl h-50 ml-40'  
          src={certification} 
          alt="certification.png" 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          />
        </div>

        <div className='lg:py-10 px-9 text-center'>
          
          <SplitText className='font-poppins font-semibold text-center text-2xl lg:text-end pb-10' text="Certifications"/>
          <BlurText text="Programming in Core Java by T4TEQ Software Solutions" className='my-certificates'/>
          <BlurText className='my-certificates' text="Programming in Java by NPTEL with elite certificate-75%"/>
        </div>

        <div className='px-5 py-10 lg:py-15 text-center'>
          <SplitText text="Education" className='font-poppins text-2xl  font-semibold lg:text-left lg:ml-14 pb-8'/>
      
          <BlurText text="MCA - Master of Computer Applications," className='my-education'/>
          <BlurText text="Bishop Heber College - Trichy," className='my-education'/>
          <BlurText text="2023-2025." className='my-education'/>
          <br />
          <BlurText text="B.Sc Computer Science," className='my-education'/>

          <BlurText text='E.G.S Pillay Arts and Science College - Nagapattinam,' className='my-education'/>
          <BlurText text='2020-2023.' className='my-education'/>
        </div>

        <div className='hidden lg:block py-15'>
  
          <motion.img 
          className='w-70 h-70 mx-70 rounded-2xl' 
          src={education} 
          alt="education.png" 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          />
        </div>
      </div>
    </>
  )
}

export default About;