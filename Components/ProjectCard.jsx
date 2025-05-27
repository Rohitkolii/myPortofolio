
import { Link } from 'react-router-dom';

const ProjectCard = ({height1, height2, height3, projects}) => {
  return (
    <div className='max-lg:p-3 bg-gray-900 px-5 py-5 rounded-xl'>
        <img
        src={projects.img}
        alt={projects.title}
        className={`w-full h-[${height1}] rounded-xl max-md:h-[${height2}] ${height3 ? `max-md:h-[${height3}]` : ''}`}
  />
        <p className='text-2xl font-semibold mt-3'>{projects.title}</p>
        <p className='text-gray-500 text-[15px]'>{projects.intro}</p>

        <div className='flex gap-3 py-5 flex-wrap'>
            {
                projects?.skils?.map((s, i)=> <div key={i} className='bg-gray-700 hover:bg-blue-500 p-2 border-2 rounded-full'>{s}</div>)
            }
            
        </div>
        <div className='max-lg:gap-2 w-[100%] flex gap-5 text-center'>
            <Link to={projects.link1} className='w-[100%] py-3 bg-blue-500 rounded-xl'>Documentation</Link>
            <Link to={projects.link2} className='w-[100%] py-3 bg-gray-700 rounded-xl'>Visit Site</Link>
        </div>
    </div>
  )
}

export default ProjectCard