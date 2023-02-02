import data from '../data/projects.json';
import Project from './Project';
import { motion, useAnimation } from 'framer-motion';

function Projects({ animation2, projects }) {
  console.log(projects);
  return (
    <motion.div
      animate={animation2}
      initial={{ x: '-100vw' }}
      className="lg:grid grid-cols-2 gap-10 "
    >
      {projects.map((project) => (
        <Project project={project} key={project._id} id={project._id} />
      ))}
    </motion.div>
  );
}

export default Projects;
