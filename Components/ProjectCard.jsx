import React from 'react'

import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProjectCard = ({height1, height2, height3, projects}) => {
  return (
    <div className='max-lg:p-3 bg-gray-900 p-5  rounded-xl'>
        <img src={projects.img} className={`${height3 && `max-md:h-[${height3}]`} max-md:h-[${height2}] w-[100%] h-[${height1}] rounded-[12px]`} alt="" />
        <p className='text-[22px] font-semibold pt-2'>{projects.title}</p>
        <p className='text-gray-500 text-[15px]'>{projects.intro}</p>

        <div className='flex gap-3 my-3 flex-wrap'>
            {
                projects?.skils?.map((s)=> <div className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'>{s}</div>)
            }
            
        </div>
        <div className='w-[100%] flex gap-4 pt-4 text-center'>
            <Link to={projects.link1} className='w-[100%] py-3 bg-blue-500 rounded-xl'>Documentation</Link>
            <Link to={projects.link2} className='w-[100%] py-3 bg-gray-700 rounded-xl'>Visit Site</Link>
        </div>
    </div>
  )
}

export default ProjectCard