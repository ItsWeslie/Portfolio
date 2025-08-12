import React from 'react'
import { Mail } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { House } from 'lucide-react';
import { Info } from 'lucide-react';
import { FolderOpenDot } from 'lucide-react';
import { Contact } from 'lucide-react';
import { Copyright } from 'lucide-react';

function Footer() {
  return (
    <>
    <div className='bg-black lg:flex lg:flex-row flex-col justify-between lg:mt-40 pt-3 lg:pt-10 pb-15'>
      <div className=' lg:mx-20'>
        <h2 className='text-white font-poppins font-semibold text-2xl lg:text-3xl mt-25 text-center px-8'>Sam Weslie Prabhakaran</h2>
        <p className=' text-white font-poppins lg:text-2xl font-medium py-5 text-center'>Java Full Stack Developer</p>
        </div>

      <div className='text-white flex flex-col  lg:w-25 text-center gap-8'>
        <h2 className='text-white font-semibold text-xl mt-8'>Social</h2>
        <a className='my-a' href="mailto:itssamwesliehere@gmail.com"><Mail className='inline-block mr-2'/>Mail</a>
        <a className='my-a' href="https://www.linkedin.com/in/samweslie14/" target='__blank'><Linkedin className='inline-block mr-2'/>LinkedIn</a>
        <a className='my-a' href="https://github.com/ItsWeslie" target='__blank'><Github className='inline-block mr-2'/> GitHub</a>
      </div>


      <div className=' text-white lg:pt-0 pt-7 lg:mr-20 text-center lg:w-80'>
        <h2 className='font-semibold text-xl text-white mt-8 mb-6'>Navigation</h2>
        <ul className="flex flex-col lg:ml-27 gap-5 font-light font-poppins hover:cursor-pointer lg:w-25">
            <li className='my-hover'>
              <a href="#home"><House className='inline-block mr-2'/> Home</a>
            </li>
            <li className='my-hover'>
              <a href="#about"><Info className='inline-block mr-2'/> About</a>
            </li>
            <li className='my-hover'>
              <a href="#projects"><FolderOpenDot className='inline-block mr-2'/> Projects</a>
            </li>
            <li className='my-hover'>
               <a href="#contact"><Contact className='inline-block mr-2'/>Contact</a>
            </li>
          </ul>
      </div>
    </div>
    <div className='bg-black'>
        <small className='text-white flex justify-center py-10'><Copyright className='mr-2'/>copyright's 2025 reserved by sam</small>
      </div>
    </>
  )
}

export default Footer
