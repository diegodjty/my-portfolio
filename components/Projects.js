import data from '../data/projects.json'
import Project from './Project';
import { motion,useAnimation } from 'framer-motion';

function Projects({animation2}) {
    return (
        <motion.div animate={animation2}initial={{x:'-100vw'}} className='lg:grid grid-cols-2 gap-10 '>
            {data.map((details)=>(
                <Project details={details} key={details.id} id={details.id} />
            ))}
        </motion.div>
    )
}

export default Projects
