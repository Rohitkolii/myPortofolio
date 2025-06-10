import './App.css'

import { Link } from 'react-router-dom'

// icons 
import { FaHtml5, FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

// footer icon 
import Navbar from '../Components/Navbar';
import ProjectCard from '../Components/ProjectCard';
import Footer from '../Components/Footer';
import { useEffect, useState } from 'react';
import { RiNextjsFill } from 'react-icons/ri';

// const skills = [
//   "html",
//   "css",
//   "javascript",
//   "React",
//   "Next",
//   "Redux",
//   "Tailwind",
//   "Nodejs",
//   "Expressjs",
//   "MongoDB",
//   "SQL",
// ]

const briefSkill = {
  "HTML": "I have a strong understanding of HTML5 and its semantic elements. I use HTML to structure web content effectively, ensuring accessibility and clean markup for web pages.",
  "CSS": "I am skilled in CSS, including Flexbox and Grid, to create responsive and visually appealing designs. I focus on writing organized styles and implementing media queries for different screen sizes.",
  "JavaScript": "I use JavaScript to add interactivity and dynamic features to websites. I am comfortable with ES6+ syntax and concepts like functions, events, and DOM manipulation.",
  "React": "I have experience building reusable components with React and managing state using hooks. I focus on creating efficient user interfaces and improving user experience.",
  "Next.js": "I am learning Next.js to build server-side rendered React applications. I understand routing, static generation, and API routes to optimize performance.",
  "Redux": "I am familiar with Redux for managing complex application state. I understand actions, reducers, and the store to maintain predictable state in React apps.",
  "Tailwind": "I use Tailwind CSS to rapidly style web projects using utility-first classes. It helps me build consistent and responsive layouts with minimal custom CSS.",
  "Node.js": "I have basic knowledge of Node.js for creating backend services. I understand how to set up servers and handle asynchronous operations.",
  "Express.js": "I use Express.js to build simple RESTful APIs and handle routing on the server side. It helps me manage requests, middleware, and responses efficiently.",
  "MongoDB": "I am familiar with MongoDB for NoSQL database management. I can perform CRUD operations and understand schema design with collections and documents.",
  "APIs": "I work with RESTful APIs to enable communication between frontend and backend. I understand making HTTP requests and handling responses effectively.",
  "JSON": "I use JSON as a data format to exchange information between clients and servers. It is essential for API communication and data storage.",
  "Postman": "I use Postman to test, debug, and document APIs. It helps me verify endpoints and ensure correct data handling during development.",
  "API": "I am learning to design, build, and consume APIs to connect different parts of web applications. This skill helps me in full-stack development and integration."
}

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
]


function App() {

  const [skillValue, setskillValue] = useState(Object.keys(briefSkill)[0])
  const handleSkill = (skill) => {
    const value = Object.keys(briefSkill).filter((v)=> v == skill)
    setskillValue(value)
  }

  return (
    <>
     <Navbar />

     <header className='w-[100%] bg-gray-950 text-gray-400 selection:text-blue-500 overflow-x-hidden'>
      
      <div className='w-[90%] max-w-[1400px] m-auto text-center py-[300px]'>
        <p className='text-2xl italic'>Hello there!</p>
        {/* <h4 style={{fontSize:(70+fontsize), transition:".7s"}} className='font-bold'>I'm Rohit koli</h4> */}
        <h4 style={{transition:".7s"}} className='max-sm:text-[35px] max-md:text-[50px] font-bold text-[70px]'>I'm Rohit koli</h4>
        <h4 className='text-[25px]'>{"<A Fullstack Developer/>"}</h4>
      </div>

      <div className='ma m1'></div>
      <div className='ma m2'></div>
      <div className='ma m3'></div>
      <div className='ma m4'></div>
      <div className='ma m5'></div>
      <div className='ma m6'></div>
     </header>


     {/* //About Me */}

     <section className='bg-black text-gray-400'>
      <div className='max-lg:w-[95%] w-[75%] max-w-[1400px] m-auto lg:py-20 pt-20'>
        <div>
          <h4 className='text-4xl font-bold capitalize'>hey, it's about me</h4>
          <h5 className='font-semibold text-xl'>Frontend Developer | Web Enthusiast | UI/UX Explorer</h5>
          {/* <br /> */}
          <p className='text-gray-600 mt-2'>I craft interactive, user-friendly websites that blend functionality with beautiful design. With a strong foundation in HTML, CSS, JavaScript, React.js, and Next.js, I build responsive web applications that deliver smooth user experiences. Whether it's dynamic e-commerce sites, modern UI layouts, or creative web concepts, I'm passionate about bringing ideas to life through clean code and thoughtful design.</p>
          {/* <br /> */}
          <p className='text-gray-600 mt-1'>Currently building innovative projects like [mention one or two projects, e.g., “Shopingo – a dynamic e-commerce site” and “Appsobytes – my software service platform”].</p>
          <p className='text-gray-600 mt-1'>Let’s build something amazing together!</p>
        </div>
      </div>
     </section>

     
     {/* Skills  */}

    <section id='skills' className='bg-black text-gray-500 py-20'>
        {/* <h3 className='text-4xl text-gray-600 font-bold capitalize'>Technologies i work on</h3> */}
        
      <div className='max-lg:grid-cols-[100%] max-lg:w-[95%] grid grid-cols-[60%_40%] gap-20 items-center w-[75%] max-w-[1400px] m-auto'>
        <div>
          <h4 className='text-4xl font-bold capitalize'>Skills & Technologies</h4>
          <p>As a fresher in web development, I’ve worked with HTML, CSS, JavaScript, React, Next.js, Redux, and Tailwind on the frontend. I also have basic experience with Node.js, Express.js, MongoDB, APIs, JSON, and Postman for backend and API testing. I'm eager to keep learning and building real-world projects.</p>
          <div className='flex flex-wrap gap-x-2 gap-y-2 mt-5'>
            {
              Object.keys(briefSkill).map((skill, i)=> {
                return <p onClick={()=> handleSkill(skill)} key={i} className='bg-gray-900 py-1 px-5 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer transition-all'>{skill}</p>
              })
            }
          </div>
        </div>

        <div className='bg-gray-900 h-fit p-10 rounded-xl'>
          <p className='text-gray-300 font-semibold'>{skillValue && skillValue}</p>
          <p>{skillValue && briefSkill[skillValue]}</p>
          </div>
      </div>
    </section>

     {/* Projects  */}

     <div className='bg-black'>
      <div className='max-lg:w-[95%] w-[75%] max-w-[1400px] m-auto text-white py-10'>
        <h4 className='py-5 text-2xl text-gray-400 font-semibold capitalize'>Projects that define my skills</h4>
        
        <div className='max-sm:grid-cols-1 max-lg:grid-cols-2 max-lg:gap-3 grid gap-5 grid-cols-[45%_55%]'>
          <ProjectCard projects={projects[0]} height1={"300px"} height2={"230px"} />
          <ProjectCard projects={projects[1]} height1={"350px"} height2={"300px"} height3={"230px"} />
        </div> <br />
        
        <div className='max-sm:grid-cols-1 max-lg:grid-cols-2 grid gap-5 grid-cols-[55%_45%]'>
          <ProjectCard projects={projects[2]} height1={"350px"} height2={"300px"} height3={"230px"} />
          <ProjectCard projects={projects[3]} height1={"300px"} height2={"230px"} />
        </div>

        <br /> <br />
        <div className='text-center'>
          <Link to="/projects" className='bg-gray-900 hover:bg-blue-500 py-4 px-12 rounded-md transition' >View more</Link>
        </div>
        
      </div>
     </div>

    <Footer />
    </>
  )
}

export default App
