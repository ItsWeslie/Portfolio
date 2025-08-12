import React, { useState } from 'react'
import { Send } from 'lucide-react';
import contact from "/src/assets/contact-us.jpg"
import { Button } from '@/components/ui/button'
import SplitText from "/src/components/TextAnimations/SplitText/SplitText.jsx";
import {motion} from 'framer-motion';
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

function Contactus() {


    const[formData, setFormData] =useState({
        name:"",
        email:"",
        phone:"",
        message:""
    });

    const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    
      const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    )
    .then(() => {
      toast.success("Form successfully submitted & email sent!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      toast.error("Failed to send email. Please try again later.");
    });

    };

    const inputVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4 }
    })
  };

  

  return (
    <>
    <div className='text-center'>
    <SplitText className='font-poppins font-semibold text-2xl lg:text-5xl lg:mt-15 pt-5' text="Contact Us"/>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 mx-3 mb-10 lg:my-10 lg:mx-15  rounded-2xl'>
      <div className='m-10'>
        <motion.img 
        className='w-auto hidden lg:block h-130 p-8 mx-auto my-10' 
        src={contact} 
        alt="contact-us.png" 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        />
      </div>

    <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className='lg:m-5'>

        <div className='flex flex-col bg-black lg:mx-32 lg:my-10 rounded-2xl py-10'>
        <form className='mx-1.5 lg:mx-10 text-center lg:text-start' onSubmit={handleSubmit}>
            <label className='text-white'  htmlFor="name">Name</label>
            <input className='my-form' value={formData.name} onChange={handleChange} type="text" id='name' placeholder='Enter your name' required/>

            <label className='text-white' htmlFor="email">Email</label>
            <input className='my-form' value={formData.email} onChange={handleChange} type="email" id='email' placeholder='Enter your email id' required/>

            <label className='text-white' htmlFor="phone">Phone</label>
            <input className='my-form' value={formData.phone} onChange={handleChange} type="tel" id='phone' placeholder='Enter your phone number' required/>

            <label className='text-white' htmlFor="message">Message</label>
            <textarea className='my-form' value={formData.message} onChange={handleChange} id='message' placeholder='Enter your message' required/>

              <motion.div
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={inputVariant}
              >

            <Button type='submit' className="mx-28 my-3 lg:mx-0 lg:my-0 bg-my-colour-2 lg:w-30 text-black font-poppins hover:bg-my-colour-3 transition-transform hover:scale-105"><Send className='lg:mr-2'/> Send</Button>
            </motion.div>
        </form>
        </div>
      </div>
      </motion.div>
    </div>
    </>
  )
}

export default Contactus
