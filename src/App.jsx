import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

// icons 
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHeart } from "react-icons/fa";

// footer icon 

import { MdMenuOpen } from "react-icons/md";

import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const skills = [
  "html",
  "css",
  "javascript",
  "React",
  "Next",
  "Redux",
  "Tailwind",
  "Nodejs",
  "Expressjs",
  "MongoDB",
  "SQL",
]

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

function App() {

  // const [fontsize, setFontsize] = useState(0)
  
  document.body.classList = "selection:text-blue-500"
  
  // document.addEventListener("scroll", ()=> {
    // if(window.pageYOffset < 250){
      // document.getElementById("nav").style.position = 'absolute';
      // setFontsize(window.pageYOffset/4)
    // }else if(window.pageYOffset > 250){
      // document.getElementById("nav").style.position="fixed";
      // // document.getElementById("nav").style.width = "100vw"
      // }
    // console.log(Math.round(window.pageYOffset))
    // console.log(fontsize)
  // })

  
  const [menuStatus, setmenuStatus] = useState(false)

  const handleMenu = () => {
    if(menuStatus) {
      setmenuStatus(false)
      document.body.style.overflowY = 'scroll'
    }else {
      setmenuStatus(true)
      document.body.style.overflowY = 'hidden'
    }
  }

  return (
    <>
     <nav id='nav' className='max-md:w-[100%] max-md:top-0 max-md:rounded-none max-[1250px]:w-[80%] first-line: bg-gray-900 px-6 py-3 flex justify-between items-center w-[50%] max-w-[1400px] m-auto rounded-2xl absolute left-[50%] top-[20px] translate-x-[-50%]'>
      <div className='text-blue-500 text-3xl font-extrabold'>RK</div>
      {menuStatus ?
      <div className='text-red-500 navlinks'>
        <ul className='max-md:py-10 max-lg:flex-col max-lg:bg-gray-900 max-lg:p-5 max-lg:gap-2 max-lg:rounded-lg flex gap-10 font-semibold text-gray-500'>
          <Link to="/" className='hover:text-blue-500' >Home</Link>
          <Link to="about" className='hover:text-blue-500' >About</Link>
          <Link to="/" className='hover:text-blue-500' >Projects</Link>
          <Link to="/" className='hover:text-blue-500' >Skills</Link>
        </ul>
      </div>

      : ""
      }

      <button className='max-lg:hidden bg-blue-500 hover:bg-blue-600 py-3 px-12 font-semibold rounded-xl text-white transition'>Resume</button>
      
      <MdMenuOpen onClick={() => handleMenu()} className='text-[35px] text-white cursor-pointer lg:hidden' />
     </nav>

     <header className='w-[100%] bg-gray-950 text-gray-400 selection:text-blue-500 shadow-lg shadow-gray-100/50'>
      
      <div className='max-md:py-[250px] w-[90%] max-w-[1400px] m-auto text-center py-[300px]'>
        <p className='text-2xl italic'>Hello there!</p>
        {/* <h4 style={{fontSize:(70+fontsize), transition:".7s"}} className='font-bold'>I'm Rohit koli</h4> */}
        <h4 style={{transition:".7s"}} className='max-sm:text-[35px] max-md:text-[50px] font-bold text-[70px]'>I'm Rohit koli</h4>
        <h4 className='text-[25px]'>{"A Fullstack Developer/>"}</h4>
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
      <div className='max-lg:grid-cols-[100%] max-lg:w-[95%] grid grid-cols-[40%_60%] gap-[100px] w-[75%] max-w-[1400px] m-auto py-20 items-center'>
        <div>
          <img className='max-lg:w-[60%] max-lg:m-auto max-md:w-[90%] rounded-b-[35%]' src="images/user.svg" alt="" />
        </div>
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

    <section className='bg-black text-gray-500 py-20'>
        {/* <h3 className='text-4xl text-gray-600 font-bold capitalize'>Technologies i work on</h3> */}
        
      <div className='max-lg:grid-cols-[100%] max-lg:w-[95%] grid grid-cols-[60%_40%] gap-20 items-center w-[75%] max-w-[1400px] m-auto'>
        <div>
          <h4 className='text-4xl font-bold capitalize'>Skills & Technologies</h4>
          <p>As a fresher in web development, I’ve worked with HTML, CSS, JavaScript, React, Next.js, Redux, and Tailwind on the frontend. I also have basic experience with Node.js, Express.js, MongoDB, APIs, JSON, and Postman for backend and API testing. I'm eager to keep learning and building real-world projects.</p>
          <div className='flex flex-wrap gap-x-2 gap-y-2 mt-5'>
            {
              skills.map((skill, i)=> {
                return <p className='bg-gray-900 py-1 px-5 rounded-md'>{skill}</p>
              })
            }
          </div>
        </div>

        <div className='bg-gray-900 h-[100%] p-10 rounded-xl'>
          <p>CSS</p>
          <p>As a fresher, I have a good understanding of CSS and use it to style and layout web pages effectively. I’m familiar with Flexbox, Grid, and media queries for responsive design. I enjoy experimenting with animations and improving my skills through hands-on projects.</p>
          </div>
      </div>
    </section>

     

     {/* Projects  */}

     <div className='bg-black'>
      <div className='max-lg:w-[95%] w-[75%] max-w-[1400px] m-auto text-white py-10'>
        <h4 className='py-5 text-2xl text-gray-400 font-semibold capitalize'>Projects that define my skills</h4>
        
        <div className='max-sm:grid-cols-1 max-lg:grid-cols-2 max-lg:gap-3 grid gap-5 grid-cols-[45%_55%]'>
          <div className='max-lg:p-3 bg-gray-900 p-5  rounded-xl'>
            <img src="images/projects/1.png" className="max-md:h-[230px] w-[100%] h-[300px] rounded-[12px]" alt="" />
            <p className='text-[22px] font-semibold pt-2'>Rentwheels – Vehicle Rentle webapp</p>
            <p className='text-gray-500 text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis non molestiae quia ullam vel maxime dolor esse. Molestias, quibusdam distinctio.</p>

            <div className='flex gap-3 my-3 flex-wrap'>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaReact /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiVite /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaCss3 /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaNodeJs /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiExpress /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiMongodb /></div>
            </div>
            <div className='w-[100%] flex gap-4 pt-4 text-center'>
              <Link to="/" href="/" className='w-[100%] py-3 bg-blue-500 rounded-xl'>Documentation</Link>
              <Link to="/" href="/" className='w-[100%] py-3 bg-gray-700 rounded-xl'>Visit Site</Link>
            </div>
          </div>

          <div className='max-lg:p-3 bg-gray-950 p-5  rounded-xl'>
            <img src="images/projects/2.png" className="max-md:h-[230px] max-lg:h-[300px] w-[100%] h-[350px] rounded-[12px]" alt="" />
            <p className='text-[22px] font-semibold pt-2'>Rentwheels – Vehicle Rentle webapp</p>
            <p className='text-gray-500 text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis non molestiae quia ullam vel maxime dolor esse. Molestias, quibusdam distinctio.</p>

            <div className='flex gap-3 my-3 flex-wrap'>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaReact /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiVite /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaCss3 /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaNodeJs /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiExpress /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiMongodb /></div>
            </div>
            <div className='w-[100%] flex gap-4 pt-4 text-center'>
              <Link to="/" href="/" className='w-[100%] py-3 bg-blue-500 rounded-xl'>Documentation</Link>
              <Link to="/" href="/" className='w-[100%] py-3 bg-gray-700 rounded-xl'>Visit Site</Link>
            </div>
          </div>
        </div> <br />
        
        <div className='max-sm:grid-cols-1 max-lg:grid-cols-2 grid gap-5 grid-cols-[55%_45%]'>
          <div className='max-lg:p-3 bg-gray-950 p-5  rounded-xl'>
            <img src="images/projects/3.png" className="max-md:h-[230px] max-lg:h-[300px] w-[100%] h-[350px] rounded-[12px]" alt="" />
            <p className='text-[22px] font-semibold pt-2'>Rentwheels – Vehicle Rentle webapp</p>
            <p className='text-gray-500 text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis non molestiae quia ullam vel maxime dolor esse. Molestias, quibusdam distinctio.</p>

            <div className='flex gap-3 my-3 flex-wrap'>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaReact /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiVite /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaCss3 /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaNodeJs /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiExpress /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiMongodb /></div>
            </div>
            <div className='w-[100%] flex gap-4 pt-4 text-center'>
              <Link to="/" href="/" className='w-[100%] py-3 bg-blue-500 rounded-xl'>Documentation</Link>
              <Link to="/" href="/" className='w-[100%] py-3 bg-gray-700 rounded-xl'>Visit Site</Link>
            </div>
          </div>

          <div className='max-lg:p-3 bg-gray-900 p-5  rounded-xl'>
            <img src="images/projects/4.png" className="max-md:h-[230px] w-[100%] h-[300px] rounded-[12px]" alt="" />
            <p className='text-[22px] font-semibold pt-2'>Rentwheels – Vehicle Rentle webapp</p>
            <p className='text-gray-500 text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis non molestiae quia ullam vel maxime dolor esse. Molestias, quibusdam distinctio.</p>

            <div className='flex gap-3 my-3 flex-wrap'>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaReact /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiVite /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaCss3 /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaNodeJs /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiExpress /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiMongodb /></div>
            </div>
            <div className='w-[100%] flex gap-4 pt-4 text-center'>
              <Link to="/" href="/" className='w-[100%] py-3 bg-blue-500 rounded-xl'>Documentation</Link>
              <Link to="/" href="/" className='w-[100%] py-3 bg-gray-700 rounded-xl'>Visit Site</Link>
            </div>
          </div>
        </div>
        <br /> <br />
        <div className='text-center'>
          <Link to="/" className='bg-gray-900 hover:bg-blue-500 py-4 px-12 rounded-md transition' >View more</Link>
        </div>
        
      </div>
     </div>
     {/* <div className='h-[100vh] bg-cyan-700'></div> */}

    {/* //footer  */}
     <footer className='bg-black text-white'>
      <div className='max-lg:w-[95%] max-lg:px-0 max-md:flex-col w-[80%] max-w-[1400px] m-auto p-20 border-t border-gray-800 flex justify-between'>
        <div>
          <p className='text-blue-500 font-bold text-4xl'>RK<span className='text-white'>.</span></p>
          <p className='text-gray-700 text-sm'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Blanditiis, perspiciatis.</p>
          <div className='flex gap-3 my-3'>
            <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaLinkedin /></div>
            <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaGithub /></div>
            <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaInstagram /></div>
            <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><IoIosMail /></div>
            <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaXTwitter /></div>
          </div>
        </div>

        <div>
          <p>Usefull links</p>
          <ul className='text-gray-500 text-sm/6 mt-3'>
            <li><Link to="/" href="/">About</Link></li>
            <li><Link to="/" href="/">Projects</Link></li>
            <li><Link to="/" href="/">Blogs</Link></li>
            <li><Link to="/" href="/">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p>More</p>
          <ul className='text-gray-500 text-sm/6 mt-3'>
            <li><Link to="/" href="/">Resume</Link></li>
            <li><Link to="/" href="/">Facts</Link></li>
          </ul>
        </div>

        <div>
          <p>Contact</p>
          <ul className='text-gray-500 text-sm/7 mt-3'>
            <li><Link to="/" className='flex items-center gap-2' href="/"><IoIosMail className='text-xl' />Rohitkolisd@gmail.com</Link></li>
            <li><Link to="/" className='flex items-center gap-2' href="/"><MdCall className='text-xl' />+91 9582207407</Link></li>
            <li><Link to="/" className='flex items-center gap-2' href="/"><FaLinkedin className='text-xl' />/rohit-koli1</Link></li>
          </ul>
        </div>
      </div>

      <div className='py-10 w-[80%] max-w-[1400px] m-auto border-t border-gray-900'>
        <p className='flex justify-center items-center'>Made with <FaHeart className='mx-1 text-red-600'/> by Rohit</p>
      </div>
     </footer>
    </>
  )
}

export default App
