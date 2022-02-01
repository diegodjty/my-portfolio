import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion,useAnimation } from 'framer-motion';
function Skills() {
    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();
    const animation2 = useAnimation();

    useEffect(()=>{
        if(inView){
            animation.start({
                x:0,
                transition:{
                    type: 'spring',duration: 2, bounce: 0.2,
                }
            })
            animation2.start({
                x:0,
                transition:{
                    type: 'spring',duration: 2, bounce: 0.2,
                }
            })
           
        };
    },[inView])
    return (
        <div ref={ref} id='skills' className='bg-blue-dark max-w-[90%] m-auto lg:h-screen 2xl:flex 2xl:flex-col 2xl:justify-center'>
            <motion.div  animate={animation2} initial={{x:'-100vw'}} className='mt-16 mb-5 2xl:w-[60%]'>
                <h2 className='text-2xl text-yellow font-bold lg:text-6xl lg:mb-10'>My Skills</h2>
                <p className='text-white mt-2 lg:text-lg'>Here is a list of some of the skills I have learned over the years, some self-taught, and others learned in college.</p>
            </motion.div>
            <motion.div animate={animation}initial={{x:'100vw'}} className='lg:mt-20'>
                <div className=' grid grid-cols-2 p-5 justify-items-center mb-3 lg:grid-cols-3 lg:p-0 2xl:grid-cols-6'>
                    <img className='img' src="/images/html5.svg" alt="" />
                    <img className='img' src="/images/css3.svg" alt="" />
                    <img className='img' src="/images/js.svg" alt="" />
                    <img className='img' src="/images/react.svg" alt="" />
                    <img className='img' src="/images/tailwind.svg" alt="" />
                    <img className='img' src="/images/nextjs.svg" alt="" />
                </div>
                <div className=' grid grid-cols-2 p-5 justify-items-center lg:grid-cols-3 lg:p-0 2xl:grid-cols-6'>
                    <img className='img' src="/images/sass.svg" alt="" />
                    <img className='img' src="/images/jquery.svg" alt="" />
                    <img className='img' src="/images/php.svg" alt="" />
                    <img className='img' src="/images/mysql.svg" alt="" />
                    <img className='img' src="/images/git.svg" alt="" />
                    <img className='img' src="/images/github2.svg" alt="" />
                </div>
                <div className=' grid grid-cols-2 p-5 justify-items-center lg:grid-cols-3 lg:p-0 2xl:grid-cols-6'>
                    <img className='img' src="/images/aws.svg" alt="" />
                    <img className='img' src="/images/heroku.svg" alt="" />
                    <img className='img' src="/images/mongodb.svg" alt="" />
                    <img className='img' src="/images/cypress.svg" alt="" />
                    <img className='img' src="/images/python.svg" alt="" />
                    <img className='img' src="/images/nodejs.svg" alt="" />
                </div>
            </motion.div>
        </div> 
    )
}

export default Skills
