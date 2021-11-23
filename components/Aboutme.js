import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion,useAnimation } from 'framer-motion';

function Aboutme() {

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
                    type: 'spring',duration: 2, bounce: 0.3,
                }
            })
            animation2.start({
                x:0,
                transition:{
                    type: 'spring',duration: 2, bounce: 0.3,
                }
            })
           
        };

    },[inView])

    return (
        <div id='aboutme'ref={ref} className='bg-blue-dark max-w-[90%] m-auto lg:h-screen 2xl:flex 2xl:flex-col 2xl:justify-center'>
            <div className='mt-16 mb-5 2xl:flex  '
            
            >
                <motion.div animate={animation} initial={{x:'-100vw'}} className='2xl:w-[60%]'>
                    <h2 className='text-2xl text-yellow font-bold lg:text-6xl lg:mb-10'>About Me</h2>
                    <p  className='text-white mt-2 lg:text-lg '>Hello! My name is Diego Taveras I’m a Front End Developer located in Long Island, New York.
                    I love web development and everything that has to do with technology. I am passionate about learning new things and acquiring new experiences and skills. I am a lover of nature, sports, and working out. To learn more about my education and, experiences take a look at my resume.</p>
                    <p className='font-bold text-sm text-blue-light ml-10 mt-3'><a >Resume</a></p>
                </motion.div>
                <motion.img animate={animation2} initial={{x:'100vw'}} className='m-auto mt-10 lg:mt-20' src="/images/memoji.png" height={125} width={125} alt="" />
            </div>
        </div>
    )
}

export default Aboutme
