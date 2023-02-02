import Projects from './Projects';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
function Portfolio({ projects }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.2,
        },
      });
      animation2.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.2,
        },
      });
    }
  }, [inView]);
  return (
    <div ref={ref} id="portfolio" className="bg-blue-dark max-w-[90%] m-auto ">
      <motion.div
        animate={animation2}
        initial={{ x: '100vw' }}
        className="mt-16 2xl:w-[60%]"
      >
        <h2 className="text-2xl text-yellow font-bold lg:text-6xl lg:mb-10">
          My Portfolio
        </h2>
        <p className="text-white mt-2 mb-5 lg:text-lg">
          Here are some of my most recent projects, most of them using ReactJS,
          since it is the technology that I enjoy working with the most and that
          I find most efficient and complete.
        </p>
      </motion.div>

      {/* Projects */}
      <Projects animation2={animation2} projects={projects} />
    </div>
  );
}

export default Portfolio;
