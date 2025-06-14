import React from 'react'
import Navbar from '../Components/Navbar'
import ProjectCard from '../Components/ProjectCard'

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";


import Footer from '../Components/Footer';


const projects = [
  {
    title : "Rentwheels – Vehicle Rentle webapp",
    intro : "A conceptual project focused on creating a Software Requirements Specification for a car rental web platform. The aim is to define features like vehicle booking, user registration, pricing, and admin management.",
    skils : [<FaReact />, <SiVite/>,<FaHtml5 />, <FaCss3/>, <FaNodeJs/>, <SiExpress/>, <SiMongodb/>],
    img : "images/projects/1.png",
    id : "rentwheels",
    link2 : "https://rentwheelss.vercel.app/"
  },
  {
    title : "Appsobytes – Business Portfolio Website",
    intro : "A professional business website showcasing software development services. Highlights the brand, services offered, and contact options for clients.",
    skils : [<FaReact />,<RiNextjsFill />, <FaHtml5 />, <FaCss3/>],
    img : "images/projects/3.png",
    id : "appsobytes",
    link2 : "https://appsobytes.com/"
  },
  {
    title : "Deansight - IELTS Landing Page For Client",
    intro : "Developed a responsive and user-friendly landing page for an IELTS prep platform. Focused on clear content structure, modern design, and smooth user experience to boost engagement and conversions.",
    skils : [<FaHtml5 />, <FaCss3/>, <FaJsSquare />],
    img : "images/projects/5.png",
    id : "deansight",
    link2 : "https://deansight.com/"
  },
  {
    title : "Shopingo – E-commerce Web App",
    intro : "A modern, dynamic e-commerce website built with React.js. Features include product listings via third-party APIs, user login/logout, cart functionality using React Context API, and responsive design for a smooth shopping experience.",
    skils : [<FaReact />, <FaHtml5 />, <FaCss3/>, <FaNodeJs/>, <SiExpress/>, <SiMongodb/>],
    img : "images/projects/2.png",
    id : "shopingo",
    link2 : "https://shopingo.vercel.app/"
  },
  {
    title : "Foodo – Food Delivery App UI",
    intro : "A responsive and interactive food delivery website UI, designed with React. Includes homepage, food categories, search bar, and a sleek, modern design.",
    skils : [<RiNextjsFill />, <FaCss3/>, <FaNodeJs/>, <SiExpress/>, <SiMongodb/>],
    img : "images/projects/4.png",
    id : "foodo",
    link2 : "https://myfoodo.vercel.app/"
  },
  {
    title : "Edusphere – Learning Platform",
    intro : "Built a sleek and responsive website for Edusphere, focusing on intuitive navigation, course showcase, and engaging user experience to support seamless online learning.",
    skils : [<RiNextjsFill />, <FaHtml5/>, <FaCss3/>, <FaNodeJs/>, <SiExpress/>, <SiMongodb/>],
    img : "images/projects/6.png",
    id : "edusphere",
    link2 : "https://eduspheres.vercel.app/"
  },
]

const Projects = () => {
  return (
    <>
        <Navbar />

        <header className='w-[100%] bg-gray-950 text-gray-400 selection:text-blue-500 shadow-lg shadow-gray-100/50 overflow-x-hidden'>
      
      <div className='w-[90%] max-w-[1400px] m-auto text-center py-[300px]'>
        <h4 style={{transition:".7s"}} className='max-sm:text-[35px] max-md:text-[50px] font-bold text-[70px]'>Projects</h4>
        <h4 className='text-[25px]'>{"<That showcase my skills/>"}</h4>
      </div>

      <div className='ma m1'></div>
      <div className='ma m2'></div>
      <div className='ma m3'></div>
      <div className='ma m4'></div>
      <div className='ma m5'></div>
      <div className='ma m6'></div>
     </header>

    <div className='bg-black pt-[100px]'>
      <div className='max-lg:w-[95%] w-[75%] max-w-[1400px] mx-auto text-white py-10'>
        <h4 className='text-2xl text-gray-400 font-semibold capitalize'>Projects that define my skills</h4>
        <p className=' pb-5 text-gray-600'>Each project blends clean code, thoughtful design, and a passion for building great user experiences.</p>
        <div className='max-sm:grid-cols-1 max-lg:grid-cols-2 max-lg:gap-3 grid gap-5 grid-cols-[45%_55%]'>
          <ProjectCard projects={projects[0]} height1={"300px"} height2={"230px"} />
          <ProjectCard projects={projects[1]} height1={"350px"} height2={"300px"} height3={"230px"} />
        </div> <br />
        
        <div className='max-sm:grid-cols-1 max-lg:grid-cols-2 grid gap-5 grid-cols-[55%_45%]'>
          <ProjectCard projects={projects[2]} height1={"350px"} height2={"300px"} height3={"230px"} />
          <ProjectCard projects={projects[3]} height1={"300px"} height2={"230px"} />
        </div><br />

        <div className='max-sm:grid-cols-1 max-lg:grid-cols-2 max-lg:gap-3 grid gap-5 grid-cols-[45%_55%]'>
          <ProjectCard projects={projects[4]} height1={"300px"} height2={"230px"} />
          <ProjectCard projects={projects[5]} height1={"350px"} height2={"300px"} height3={"230px"} />
        </div>
        </div>
    </div>

    <Footer />
    </>
  )
}

export default Projects