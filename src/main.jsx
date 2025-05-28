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
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import Error from './Error.jsx';

const projectPageData = [
  {
    id : 'rentwheels',
    title : "Rentwheels - Vehicle Rentle webapp",
    intro : "RentWheels is a dynamic web application designed to simplify car rentals through a smooth and intuitive user experience. I developed this project to practice full-stack development and improve my UI/UX skills. The platform allows users to browse available vehicles, view details, and make bookings with ease.",
    tech : [<FaReact />, <SiVite/>, <FaCss3/>, <FaNodeJs/>, <SiExpress/>, <SiMongodb/>],
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
    id : 'shopingo',
    title : "Shopingo – E-commerce Web App",
    intro : "A modern, dynamic e-commerce website built with React.js. Features include product listings via third-party APIs, user login/logout, cart functionality using React Context API, and responsive design for a smooth shopping experience.",
    tech : [<FaReact />, <SiVite/>, <FaCss3/>, <FaNodeJs/>, <SiExpress/>, <SiMongodb/>],
    img : "/images/projects/2.png",
    features : 
              ["Responsive Design: Works across all devices with a mobile-first approach",
              "Authentication: Secure user login and signup with jwt and Bearer Tokens",
              "Car Listings: Browse through cars with images, specs, and pricing",
              "Booking System: Users can book available vehicles",
              "State Management: Global state for user sessions and bookings using Redux.",
              ],
    weburl : "https://shopingo.vercel.app/",
    giturl : "/",
    conclusion : "RentWheels is more than just a practice project—it's a showcase of my ability to turn real-world requirements into a fully functional product. It highlights my proficiency in frontend development, responsive design, and cloud integration, all of which are essential for building modern web applications."
  },
  {
    id : "appsobytes",
   title : "Appsobytes – Business Portfolio Website",
       intro : "A professional business website showcasing software development services. Highlights the brand, services offered, and contact options for clients.",
       tech : [<FaReact />, <SiVite/>, <FaCss3/>, <FaNodeJs/>, <SiExpress/>, <SiMongodb/>],
       img : "/images/projects/3.png",
       features : 
              ["Responsive Design: Works across all devices with a mobile-first approach",
              "Authentication: Secure user login and signup with jwt and Bearer Tokens",
              "Car Listings: Browse through cars with images, specs, and pricing",
              "Booking System: Users can book available vehicles",
              "State Management: Global state for user sessions and bookings using Redux.",
              ],
    weburl : "https://www.appsobytes.com/",
    giturl : "/",
    conclusion : "RentWheels is more than just a practice project—it's a showcase of my ability to turn real-world requirements into a fully functional product. It highlights my proficiency in frontend development, responsive design, and cloud integration, all of which are essential for building modern web applications."
  },
  {
    title : "Deansight - IELTS Landing Page For Client",
        intro : "Developed a responsive and user-friendly landing page for an IELTS prep platform. Focused on clear content structure, modern design, and smooth user experience to boost engagement and conversions.",
        tech : [<FaReact />, <SiVite/>, <FaCss3/>, <FaNodeJs/>, <SiExpress/>, <SiMongodb/>],
        img : "/images/projects/5.png",
        id : "deansight",
        features : 
              ["Responsive Design: Works across all devices with a mobile-first approach",
              "Authentication: Secure user login and signup with jwt and Bearer Tokens",
              "Car Listings: Browse through cars with images, specs, and pricing",
              "Booking System: Users can book available vehicles",
              "State Management: Global state for user sessions and bookings using Redux.",
              ],
    weburl : "https://deansight.com/",
    giturl : "/",
    conclusion : "RentWheels is more than just a practice project—it's a showcase of my ability to turn real-world requirements into a fully functional product. It highlights my proficiency in frontend development, responsive design, and cloud integration, all of which are essential for building modern web applications."
  },
  {
    title : "Foodo – Food Delivery App UI",
        intro : "A responsive and interactive food delivery website UI, designed with React. Includes homepage, food categories, search bar, and a sleek, modern design.",
        tech : [<FaReact />, <SiVite/>, <FaCss3/>, <FaNodeJs/>, <SiExpress/>, <SiMongodb/>],
        img : "/images/projects/4.png",
        id : "foodo",
        features : 
              ["Responsive Design: Works across all devices with a mobile-first approach",
              "Authentication: Secure user login and signup with jwt and Bearer Tokens",
              "Car Listings: Browse through cars with images, specs, and pricing",
              "Booking System: Users can book available vehicles",
              "State Management: Global state for user sessions and bookings using Redux.",
              ],
    weburl : "https://myfoodo.vercel.app/",
    giturl : "/",
    conclusion : "RentWheels is more than just a practice project—it's a showcase of my ability to turn real-world requirements into a fully functional product. It highlights my proficiency in frontend development, responsive design, and cloud integration, all of which are essential for building modern web applications."
  },
  {
    title : "Edusphere – Learning Platform",
        intro : "Built a sleek and responsive website for Edusphere, focusing on intuitive navigation, course showcase, and engaging user experience to support seamless online learning.",
        tech : [<FaReact />, <SiVite/>, <FaCss3/>, <FaNodeJs/>, <SiExpress/>, <SiMongodb/>],
        img : "/images/projects/6.png",
        id : "edusphere",
        features : 
              ["Responsive Design: Works across all devices with a mobile-first approach",
              "Authentication: Secure user login and signup with jwt and Bearer Tokens",
              "Car Listings: Browse through cars with images, specs, and pricing",
              "Booking System: Users can book available vehicles",
              "State Management: Global state for user sessions and bookings using Redux.",
              ],
    weburl : "https://eduspheres.vercel.app/",
    giturl : "/",
    conclusion : "RentWheels is more than just a practice project—it's a showcase of my ability to turn real-world requirements into a fully functional product. It highlights my proficiency in frontend development, responsive design, and cloud integration, all of which are essential for building modern web applications."
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
