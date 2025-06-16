import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import Projects from './Projects.jsx';
import About from './About.jsx';
import Resume from './Resume.jsx';
import ProjectDocumentation from './ProjectDocumentation.jsx';

// icons 
import { FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import Error from './Error.jsx';
import { RiNextjsFill } from 'react-icons/ri';

const projectPageData = [
  {
    id : 'rentwheels',
    title : "Rentwheels - Vehicle Rentle webapp",
    intro : "RentWheels is a dynamic web application designed to simplify car rentals through a smooth and intuitive user experience. I developed this project to practice full-stack development and improve my UI/UX skills. The platform allows users to browse available vehicles, view details, and make bookings with ease.",
    tech : [<FaReact />, <SiVite/>,<FaHtml5 />, <FaCss3/>, <FaNodeJs/>, <SiExpress/>, <SiMongodb/>],
    img : "/images/projects/1.png",
    features : 
              ["Responsive Design: Works across all devices with a mobile-first approach",
              "Authentication: Secure user login and signup with jwt and Bearer Tokens",
              "Car Listings: Browse through cars with images, specs, and pricing",
              "Booking System: Users can book available vehicles",
              "State Management: Global state for user sessions and bookings using Redux.",
              ],
    weburl : "https://rentwheelss.vercel.app/",
    giturl : "/",
    conclusion : "RentWheels is more than just a practice project—it's a showcase of my ability to turn real-world requirements into a fully functional product. It highlights my proficiency in frontend development, responsive design, and cloud integration, all of which are essential for building modern web applications."
  },
  {
    id : 'clothiqs',
    title : "Clothiqs – A clothing Web Application",
    intro : "Clothiqs is a sleek and responsive clothing web app that offers a smooth shopping experience. Users can browse fashion collections, view product details, and shop with ease. Built to showcase modern UI and e-commerce functionality, it's a highlight of my frontend development skills.",
    tech : [<FaReact />, <FaHtml5 />, <FaCss3/>, <FaNodeJs/>, <SiExpress/>, <SiMongodb/>],
    img : "/images/projects/2.png",
    features : 
              ["Responsive Design: Works across all devices with a mobile-first approach",
              "Authentication: Secure user login and signup with jwt and Bearer Tokens",
              "Car Listings: Browse through cars with images, specs, and pricing",
              "Booking System: Users can book available vehicles",
              "State Management: Global state for user sessions and bookings using Redux.",
              ],
    weburl : "https://clothiqs.vercel.app/",
    giturl : "/",
    conclusion : "..."
  },
  {
    id : "appsobytes",
   title : "Appsobytes – Business Portfolio Website",
       intro : "Appsobytes is a professional business website developed for an Client to promote software development services. It functions as a digital identity for a tech service provider, highlighting offerings, showcasing expertise, and enabling client interaction through a clean and responsive interface.",
       tech : [<FaReact />,<RiNextjsFill />, <FaHtml5 />, <FaCss3/>],
       img : "/images/projects/3.png",
       features : 
              [  "Modern UI: Clean and minimal design to highlight services and professionalism",
                  "Service Sections: Detailed service descriptions with call-to-action buttons",
                  "Contact Form: Easy-to-use contact section for client inquiries",
                  "Responsive Layout: Mobile-friendly design that adapts across devices",
                  "SEO Optimization: Structured content for better search engine visibility",
                  "Fast Load Speed: Optimized assets and server-side rendering with Next.js"
              ],
    weburl : "https://www.appsobytes.com/",
    giturl : "/",
    conclusion : "Appsobytes demonstrates my ability to build clean, efficient, and user-centric websites tailored to business needs. It reflects not only my technical proficiency but also my understanding of what clients look for in a modern, trustworthy web presence."
  },
  {
    title : "Deansight - IELTS Landing Page For Client",
        intro : "DeanSight is a clean, responsive landing page built using pure HTML, CSS, and JavaScript for an Client. Designed for a modern brand or service, it focuses on delivering a smooth, focused user experience with a functional contact form that enables user interaction without any frameworks.",
        tech : [<FaHtml5 />, <FaCss3/>, <FaJsSquare />],
        img : "/images/projects/5.png",
        id : "deansight",
        features : 
              ["Clean UI: Minimalist and modern design",
                "Responsive Layout: Mobile-friendly and adjusts well across devices",
                "Interactive Form: Contact form with real-time input validation",
                "Smooth Scroll: JavaScript-enabled scroll behavior for enhanced UX",
                "No Frameworks: Built from scratch using core web technologies"
              ],
    weburl : "https://deansight.com/",
    giturl : "/",
    conclusion : "DeanSight may be a simple project, but it’s a solid representation of clean design and hands-on frontend work without relying on frameworks. It highlights my ability to build polished, functional landing pages from scratch—essential for many real-world projects and clients."
  },
  {
    title : "BiteBuddy – Food Delivery App UI",
        intro : "BiteBuddy is a sleek and intuitive food ordering web app where users can explore dishes, view descriptions, and order effortlessly. It showcases my skills in building responsive interfaces and smooth user experiences.",
        tech : [<RiNextjsFill />, <FaCss3/>, <FaNodeJs/>, <SiExpress/>, <SiMongodb/>],
        img : "/images/projects/4.png",
        id : "bitebuddy",
        features : 
              ["Modern UI Design: Clean and responsive layout with engaging visuals",
                "Dynamic Food Menu: Fetched using Axios from backend/API",
                "Cart Functionality: Add, remove, and update items in real-time using Redux",
                "Order Summary: Checkout page displaying selected items and totals",
                "Responsive Design: Works flawlessly on mobile, tablet, and desktop",
                "Performance Optimized: Fast loading and SEO-ready with Next.js SSR/SSG"
              ],
    weburl : "https://bitebudy.vercel.app/",
    giturl : "/",
    conclusion : "Foodo is a production-ready food delivery app that reflects my understanding of building scalable, real-world web applications using modern React frameworks and tools. It showcases not only my technical skills in Next.js, Redux, and Axios, but also my ability to design clean user interfaces and manage dynamic application flow."
  },
  {
    title : "Edusphere – Learning Platform",
        intro : "Edusphere is an intelligent, web-based platform currently in development, designed to help students and professionals discover the right career paths using AI-powered insights. This project aims to bridge the gap between education and real-world careers by offering personalized recommendations based on user interests, skills, and academic background.",
        tech : [<RiNextjsFill />, <FaHtml5/>, <FaCss3/>, <FaNodeJs/>, <SiExpress/>, <SiMongodb/>],
        img : "/images/projects/6.png",
        id : "edusphere",
        features : 
              ["User Profile Input: Users can enter academic info, skills, and interests",
                "AI Career Suggestion Engine: Returns personalized career paths using OpenAI API",
                "Skill Gap Analysis: Shows what's missing and how to improve",
                "Course Recommendations: Suggests learning resources (e.g. Coursera, Udemy, etc.)",
                "Interactive UI: Clean, mobile-friendly, and accessible design",
                "User Dashboard: View results, track history, and receive updates (planned)"
              ],
    weburl : "https://eduspheres.vercel.app/",
    giturl : "/",
    conclusion : "Edusphere is an ambitious career guidance web application that brings together modern web technologies and artificial intelligence to support smarter educational decisions. As development progresses, it will stand as a testament to my growing full-stack capabilities and interest in building tools that create real impact."
  },

]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/:id" element={<ProjectDocumentation projectdata={projectPageData} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
