import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link, useParams } from 'react-router-dom'
import { FaReact } from 'react-icons/fa'

import { GrTechnology } from "react-icons/gr";


const ProjectDocumentation = ({projectdata}) => {
    
    const {id} = useParams()
    const project = projectdata?.filter((p)=> p.id === id)
  
    return (
    <>
        <Navbar />
        <section className='py-[150px] bg-black pb-20'>
            <div className='max-md:w-[95%] max-sm:p-3 w-[70%] m-auto bg-gray-900 p-5 rounded-lg text-gray-400'>
                <img 
                className='w-[100%] rounded-lg'
                src={project[0].img} alt="" />

                <br />
                <h1 className='text-2xl font-semibold text-gray-200'>{project[0].title}</h1>
                <p>{project[0].intro}</p>
                <h2 className='mt-5 text-gray-300 text-xl font-semibold'>Tech Stack:</h2>
                
                <div className='flex gap-3 py-3 flex-wrap'>
                    {
                        project[0]?.tech.map((s, i)=> <div key={i} className='bg-gray-700 hover:bg-blue-500 p-3 text-gray-100 border-2 rounded-full transition-all'>{s}</div>)
                    }
                </div>
 
                <h2 className='mt-5 text-gray-300 text-xl font-semibold'>Key Features:</h2>
                <ul>
                    {
                        project[0].features.map((f, i) => <li key={i}><GrTechnology />{f}</li>)
                    }
                </ul>
                
                <br />
                <p>Live Demo : <Link to={project[0].weburl} className='text-blue-500 font-semibold'>View Live</Link></p>
                <p>GitHub Repository : <Link to={project[0].giturl} className='text-blue-500 font-semibold'>View Code</Link></p>

                <h2 className='mt-5 text-gray-300 text-xl font-semibold'>Conclusion:</h2>
                <p>{project[0].conclusion}</p>
                </div>
        </section>
        <Footer />
    </>
  )
}

export default ProjectDocumentation