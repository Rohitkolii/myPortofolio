import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
      <Navbar />

    <header className='w-[100%] bg-gray-950 text-gray-400 selection:text-blue-500 shadow-lg shadow-gray-100/50 overflow-x-hidden'>
      
      <div className='w-[90%] max-w-[1400px] m-auto text-center py-[300px]'>
        <h4 style={{transition:".7s"}} className='max-sm:text-[35px] max-md:text-[50px] font-bold text-[70px]'>About Me</h4>
        <h4 className='text-[25px]'>{"A Fullstack Developer/>"}</h4>
      </div>

      <div className='ma m1'></div>
      <div className='ma m2'></div>
      <div className='ma m3'></div>
      <div className='ma m4'></div>
      <div className='ma m5'></div>
      <div className='ma m6'></div>
     </header>

      <section className='bg-black text-gray-400'>
      <div className='max-lg:grid-cols-[100%] max-lg:w-[95%] grid grid-cols-[40%_60%] gap-[100px] w-[75%] max-w-[1400px] m-auto py-20 items-center'>
        <div>
          <img className='max-lg:w-[60%] max-lg:m-auto max-md:w-[90%] rounded-b-[35%]' src="images/me2.svg" alt="" />
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

     {/* education   */}

     <section className='bg-black text-gray-400'>
      <div className='max-lg:grid-cols-[100%] max-lg:w-[95%] grid grid-cols-[60%_40%] gap-[100px] w-[75%] max-w-[1400px] m-auto py-20 items-center'>
        <div>
          <h4 className='text-4xl font-bold capitalize'>Education Qualification</h4>
          <h5 className='font-medium text-gray-400 text-md'>Bachelors of Computer Application | Bachelors of Arts | 12<sup>th</sup></h5>
          {/* br */}
          <p className='text-gray-600 mt-1'>I am currently pursuing a Bachelor of Computer Applications (BCA) from IGNOU (2022–2025). Prior to this, I completed a Bachelor of Arts from Delhi University (2018–2021). My academic foundation also includes 12th and 10th grade qualifications from the CBSE board, completed in 2018 and 2016 respectively.</p>
        </div>

        <div>
          <img className='max-lg:hidden w-[60%]' src="images/Study.svg" alt="" />
        </div>
      </div>
     </section>

     <Footer />
    </>
  )
}

export default About