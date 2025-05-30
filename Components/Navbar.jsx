import React, { useState } from 'react'
import { MdMenuOpen } from 'react-icons/md'
import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"

const Navbar = () => {

const [menuStatus, setmenuStatus] = useState(window.innerWidth < 1024 ? true : false)

  const handleMenu = () => {
    setmenuStatus(!menuStatus)
    // if(menuStatus) {
    //   document.body.style.overflowY = 'hidden'
    // }
    // document.body.style.overflowY = 'scroll'
  }


  return (
    <>
    <nav id='nav' className='max-md:w-[90%] w-[60%] bg-gray-900 px-6 py-3 flex justify-between items-center max-w-[1400px] m-auto rounded-2xl absolute left-[50%] top-[20px] translate-x-[-50%]'>
      <Link to="/" className='text-blue-500 text-3xl font-extrabold'>RK</Link>

      <div className={`text-red-500 ${!menuStatus ? "mobnavlinks" : "navlinks"}`}>
        <ul className='max-md:py-10 max-lg:flex-col max-lg:bg-gray-900 max-lg:p-5 max-lg:gap-2 max-lg:rounded-lg flex gap-10 font-semibold text-gray-500'>
          <Link to="/about" className='hover:text-blue-500' >About</Link>
          <Link to="/projects" className='hover:text-blue-500' >Projects</Link>
          <Link to="https://github.com/Rohitkolii" className='hover:text-blue-500' >Github</Link>
          <Link to="/resume" className='hover:text-blue-500 lg:hidden' >Resume</Link>
        </ul>
      </div>

      <Link to="/resume" className='max-lg:hidden bg-blue-500 hover:bg-blue-600 py-3 px-12 font-semibold rounded-xl text-white transition'>Resume</Link>
      
      <MdMenuOpen onClick={() => handleMenu()} className='text-[35px] text-white cursor-pointer lg:hidden' />
     </nav>
    </>
  )
}

export default Navbar