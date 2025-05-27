import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Resume = () => {
  return (
    <>
        <Navbar />

        <section className='bg-black py-[150px]'>
         <div className='max-md:w-[90%] w-[50%] m-auto'>
        <   a href="/ROHIT_Resume.pdf" download="Rohit Resume" className='text-white bg-gray-700 px-5 py-3 rounded-xl hover:bg-blue-500 transition-all'>Download Resume</a>
            <br />
            <img className='w-[100%] m-auto' src="images/Resume.png" alt="" />
         </div>
        </section>

        <Footer />
    </>
  )
}

export default Resume