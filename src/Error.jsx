import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <Navbar />
        <section className='py-[150px] text-center bg-black'>
          <img className='max-sm:w-[70%] w-[300px] m-auto' src="images/error.png" alt="" />
          <p className='text-white text-3xl font-bold'>Page Not Found!</p> <br />
          <Link to="/" className='bg-blue-500 py-2 px-10 rounded-lg text-white font-semibold'>Go Back</Link>
        </section>
      <Footer />
    </>
  )
}

export default Error