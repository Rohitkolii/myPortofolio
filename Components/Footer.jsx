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
     </footer></>
  )
}

export default Footer