import React from 'react'
import { FaGithub, FaHeart, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { MdCall } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    {/* //footer  */}
     <footer className='bg-black text-white'>
      <div className='max-lg:w-[95%] max-lg:px-0 max-md:flex-col w-[80%] max-w-[1400px] m-auto p-20 border-t border-gray-800 flex justify-between'>
        <div>
          <p className='text-blue-500 font-bold text-4xl'>RK<span className='text-white'>.</span></p>
          <p className='text-gray-700 text-sm'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Blanditiis, perspiciatis.</p>
          <div className='flex gap-3 my-3'>
            <Link to="https://www.linkedin.com/in/rohit-koli1/" className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaLinkedin /></Link>
            <Link to="https://github.com/Rohitkolii" className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaGithub /></Link>
            <Link to="https://www.instagram.com/rohitkolii_/" className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaInstagram /></Link>
            <Link to="mailto:rohitsd@gmail.com" className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><IoIosMail /></Link>
            {/* <Link to="" className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'><FaXTwitter /></Link> */}
          </div>
        </div>

        <div>
          <p>Usefull links</p>
          <ul className='text-gray-500 text-sm/6 mt-3'>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/projects" >Projects</Link></li>
            <li><Link to="/blogs" >Blogs</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
          </ul>
        </div>

        <div>
          <p>More</p>
          <ul className='text-gray-500 text-sm/6 mt-3'>
            <li><Link to="/resume" href="/">Resume</Link></li>
            <li><Link to="/" href="/">Facts</Link></li>
          </ul>
        </div>

        <div>
          <p>Contact</p>
          <ul className='text-gray-500 text-sm/7 mt-3'>
            <li><Link to="mailto:rohitkolisd@gmail.com" className='flex items-center gap-2' href="/"><IoIosMail className='text-xl' />Rohitkolisd@gmail.com</Link></li>
            <li><Link to="tel:9582207407" className='flex items-center gap-2' href="/"><MdCall className='text-xl' />+91 9582207407</Link></li>
            <li><Link to="https://www.linkedin.com/in/rohit-koli1/" className='flex items-center gap-2' href="/"><FaLinkedin className='text-xl' />/rohit-koli1</Link></li>
          </ul>
        </div>
      </div>

      <div className='py-10 w-[80%] max-w-[1400px] m-auto border-t border-gray-900'>
        <p className='flex justify-center items-center'>Made with <FaHeart className='mx-1 text-red-600'/> by Rohit</p>
      </div>
     </footer></>
  )
}

export default Footer