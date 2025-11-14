import React, { useState } from 'react'

import education from '/src/assets/education2.jpg'
import bus from '/src/assets/bus.jpg'
import ems from '/src/assets/ems.webp'
import airline from '/src/assets/airline.jpg'
import { Github } from 'lucide-react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SplitText from "/src/components/TextAnimations/SplitText/SplitText.jsx";
import {motion} from "framer-motion";


import { Button } from '@/components/ui/button';

function Projects() {

    const[project,setProjects] = useState([
        {
           Name:'Employee Management System',
           Img : ems,
           Description:"EMS to manage employee details.",
           url:"https://github.com/ItsWeslie/EMS"
        },
        {
          Name: 'online bus pass management',
          Img : bus,
          Description: "To manage bus pass through online",
          url:"https://github.com/ItsWeslie/Online-Bus-Pass-Management-System"
        },
        {
          Name:'students result management',
          Img : education,
          Description: "Manage students result details through online",
          url:"https://github.com/ItsWeslie/StudentsResultManagementSystem"
        },
        {
          Name:'Airline ticket reservation System',
          Img : airline,
          Description:"Simulation of airline ticket booking through online",
          url:"https://github.com/ItsWeslie/AirLineTicketReservationSystem"
        }
        
    ]);

    function handleOnClick(url)
    {

      if(url)
      {
        window.open(url,"__blank");
      }

    }


  return (
    <>
        <div className='text-center'>
            <SplitText className='font-poppins text-2xl font-bold lg:text-5xl py-8 lg:py-15' text="Projects"/>
        </div>
        <div className='pt-10 pb-20'>
        <div className='flex shadow-xl/10 bg-my-colour lg:mx-10 rounded-2xl'>

            <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
            }}
            >
            
            {project.map((project,index)=> (
            <SwiperSlide key={index}>
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='shadow-xl/10 rounded-b-xl w-60 h-90 text-center mx-auto my-20'>
                <img className='w-60 h-40' src={project.Img} alt="project-img.png" />
                <div className='rounded-xl bg-black'>
                <h3 className='p-4 text-white font-poppins font-semibold capitalize'>{project.Name}</h3>
                <p className='px-2 text-gray-400'>{project.Description}</p>
                <Button onClick={() => handleOnClick(project.url)} className="font-poppins bg-white text-black font-semibold hover:cursor-pointer hover:scale-105 
             transition-all duration-300 ease-in-out  hover:bg-gray-300 w-25 my-5"><Github/> GitHub</Button> 
                </div>
                </motion.div>   
            </SwiperSlide>  
            ))}
            </Swiper>
        </div>
        </div>
    </>
  )
}

export default Projects