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


function App() {

  const [fontsize, setFontsize] = useState(0)

  document.body.classList = "selection:text-blue-500"

  document.addEventListener("scroll", ()=> {
    if(window.pageYOffset < 250){
      document.getElementById("nav").style.display="flex";
      setFontsize(window.pageYOffset/4)
    }else if(window.pageYOffset > 250){
      document.getElementById("nav").style.display="none";
    }
    // console.log(Math.round(window.pageYOffset))
    console.log(fontsize)

  })
  // const paralax1 = () => {
  // }

  return (
    <>
     <nav id='nav' className='bg-gray-900 px-6 py-3 flex justify-between items-center w-[50%] m-auto mt-5 rounded-2xl fixed left-[50%] translate-x-[-50%]'>
      <div className='text-blue-500 text-3xl font-extrabold'>RK</div>
      <div className='text-red-500'>
        <ul className='flex gap-10 font-semibold text-gray-500'>
          <a className='hover:text-blue-500' href="">Home</a>
          <a className='hover:text-blue-500' href="">About</a>
          <a className='hover:text-blue-500' href="">Projects</a>
          <a className='hover:text-blue-500' href="">Skills</a>
        </ul>
      </div>

      <button className='bg-blue-500 hover:bg-blue-600 py-3 px-12 font-semibold rounded-xl text-white transition'>Resume</button>
     </nav>

     <header className='w-[100%] bg-gray-950 h-[100vh] text-gray-400 selection:text-blue-500 shadow-lg shadow-gray-100/50'>
      
      <div className='w-[90%] m-auto text-center pt-[250px]'>
        <p className='text-2xl italic'>Hello there!</p>
        <h4 style={{fontSize:(70+fontsize), transition:".2s"}} className='font-bold'>I'm Rohit koli</h4>
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
      <div className='grid grid-cols-[40%_60%] gap-[100px] w-[70%] m-auto py-20 items-center'>
        <div>
          <img className='rounded-b-[35%]' src="images/user.svg" alt="" />
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
        
      <div className='grid grid-cols-[60%_40%] gap-20 items-center w-[80%] m-auto'>
        <div>
          <h4 className='text-4xl font-bold capitalize'>Skills & Technologies</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, earum placeat reiciendis voluptas nulla illum magni libero reprehenderit! Earum, beatae minima odit nisi explicabo ipsum?</p>
          <div className='flex flex-wrap gap-x-2 gap-y-2 mt-5'>
            {
              skills.map((skill, i)=> {
                return <p className='bg-gray-900 py-1 px-5 rounded-md'>{skill}</p>
              })
            }
          </div>
        </div>

        <div className='bg-gray-900 h-[100%] p-10 rounded-xl'>
          <p>HTML</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis sit, doloribus eum omnis mollitia ipsam eaque voluptas amet sed labore tempora fuga, quae eos reprehenderit!</p>
        </div>
      </div>
    </section>

     

     {/* Projects  */}

     <div className=' bg-black'>
      <div className='w-[80%] m-auto text-white py-10'>
        <h4 className='py-5 text-2xl text-gray-400 font-semibold capitalize'>Projects that define my skills</h4>
        
        <div className='grid gap-5 grid-cols-[40%_60%]'>
          <div className='bg-gray-900 p-5  rounded-xl'>
            <img src="images/p1.webp" style={{width: "100%", height: 300, borderRadius: 12}} alt="" />
            <p className='text-[22px] font-semibold pt-2'>Rentwheels – Vehicle Rentle webapp</p>
            <p className='text-gray-500 text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis non molestiae quia ullam vel maxime dolor esse. Molestias, quibusdam distinctio.</p>

            <div className='flex gap-5 my-3'>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaReact /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiVite /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaCss3 /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaNodeJs /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiExpress /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiMongodb /></div>
            </div>
            <div className='w-[100%] flex gap-4 pt-4 text-center'>
              <a href="/" className='w-[100%] py-3 bg-blue-500 rounded-xl'>Documentation</a>
              <a href="/" className='w-[100%] py-3 bg-gray-700 rounded-xl'>Visit Site</a>
            </div>
          </div>

          <div className='bg-gray-950 p-5  rounded-xl'>
            <img src="images/p3.webp" style={{width: "100%", height: 350, borderRadius: 12}} alt="" />
            <p className='text-[22px] font-semibold pt-2'>Rentwheels – Vehicle Rentle webapp</p>
            <p className='text-gray-500 text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis non molestiae quia ullam vel maxime dolor esse. Molestias, quibusdam distinctio.</p>

            <div className='flex gap-5 my-3'>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaReact /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiVite /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaCss3 /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaNodeJs /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiExpress /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiMongodb /></div>
            </div>
            <div className='w-[100%] flex gap-4 pt-4 text-center'>
              <a href="/" className='w-[100%] py-3 bg-blue-500 rounded-xl'>Documentation</a>
              <a href="/" className='w-[100%] py-3 bg-gray-700 rounded-xl'>Visit Site</a>
            </div>
          </div>
        </div> <br />
        
        <div className='grid gap-5 grid-cols-[60%_40%]'>
          <div className='bg-gray-950 p-5  rounded-xl'>
            <img src="images/p3.webp" style={{width: "100%", height: 350, borderRadius: 12}} alt="" />
            <p className='text-[22px] font-semibold pt-2'>Rentwheels – Vehicle Rentle webapp</p>
            <p className='text-gray-500 text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis non molestiae quia ullam vel maxime dolor esse. Molestias, quibusdam distinctio.</p>

            <div className='flex gap-5 my-3'>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaReact /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiVite /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaCss3 /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaNodeJs /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiExpress /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiMongodb /></div>
            </div>
            <div className='w-[100%] flex gap-4 pt-4 text-center'>
              <a href="/" className='w-[100%] py-3 bg-blue-500 rounded-xl'>Documentation</a>
              <a href="/" className='w-[100%] py-3 bg-gray-700 rounded-xl'>Visit Site</a>
            </div>
          </div>

          <div className='bg-gray-900 p-5  rounded-xl'>
            <img src="images/p1.webp" style={{width: "100%", height: 300, borderRadius: 6}} alt="" />
            <p className='text-[22px] font-semibold pt-2'>Rentwheels – Vehicle Rentle webapp</p>
            <p className='text-gray-500 text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis non molestiae quia ullam vel maxime dolor esse. Molestias, quibusdam distinctio.</p>

            <div className='flex gap-5 my-3'>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaReact /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiVite /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaCss3 /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaNodeJs /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiExpress /></div>
              <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><SiMongodb /></div>
            </div>
            <div className='w-[100%] flex gap-4 pt-4 text-center'>
              <a href="/" className='w-[100%] py-3 bg-blue-500 rounded-xl'>Documentation</a>
              <a href="/" className='w-[100%] py-3 bg-gray-700 rounded-xl'>Visit Site</a>
            </div>
          </div>
        </div>
        <br /> <br />
        <div className='text-center'>
          <a className='bg-gray-900 hover:bg-blue-500 py-4 px-12 rounded-md' href="">View more</a>
        </div>
        
      </div>
     </div>
     {/* <div className='h-[100vh] bg-cyan-700'></div> */}

    {/* //footer  */}
     <footer className='bg-black text-white'>
      <div className='w-[80%] m-auto p-20 border-t border-gray-800 flex justify-between'>
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
            <li><a href="/">About</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Blogs</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        <div>
          <p>More</p>
          <ul className='text-gray-500 text-sm/6 mt-3'>
            <li><a href="/">Resume</a></li>
            <li><a href="/">Facts</a></li>
          </ul>
        </div>

        <div>
          <p>Contact</p>
          <ul className='text-gray-500 text-sm/7 mt-3'>
            <li><a className='flex items-center gap-2' href="/"><IoIosMail className='text-xl' />Rohitkolisd@gmail.com</a></li>
            <li><a className='flex items-center gap-2' href="/"><MdCall className='text-xl' />+91 9582207407</a></li>
            <li><a className='flex items-center gap-2' href="/"><FaLinkedin className='text-xl' />/rohit-koli1</a></li>
          </ul>
        </div>
      </div>

      <div className='py-10 w-[80%] m-auto border-t border-gray-900'>
        <p className='flex justify-center items-center'>Made with <FaHeart className='mx-1 text-red-600'/> by Rohit</p>
      </div>
     </footer>
    </>
  )
}

export default App
