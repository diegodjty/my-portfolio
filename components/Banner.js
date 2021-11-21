import { motion } from 'framer-motion';
function Banner() {
    return (
        <div className='max-w-[90%] m-auto relative h-screen'>

            {/* Main text */}
            <motion.div 
                className='pt-32'
                initial={{opacity:0, translateX: -50}}
                animate={{opacity:1, translateX: 0}}
                transition={{duration: 1}}
            >
                <div>
                    <h2 className='text-white font-black text-4xl'>Hi,</h2>
                    <h2 className='text-white font-black text-4xl '>I'm <img src='/images/logo.png' className='inline-block h-12 -mt-3' />iego</h2>
                    <h3 className='text-white font-black text-4xl'>Web Developer</h3>
                </div>
                <p className='text-gray-400 font-extralight my-3'>Front End Developer</p>
                <button className='btn mt-2'>
                    <a href='#contactme'>Contact Me!</a>
                </button>
                
            </motion.div>
            
            <motion.div
                initial={{opacity:0, translateY: 50}}
                animate={{opacity:1, translateY: 0}}
                transition={{duration: 1}}
            >
                <h3 className='text-xl text-white  mt-14 text-center font-thin '>Take a trip to  my portfolio</h3>

                {/* Arrow */}
                <div className=' flex justify-center mb-20 mt-5 cursor-pointer '>
                <a href='#portfolio'><img src="/images/arrow_down.svg"  alt=""       className='motion-safe:animate-bounce' />
                </a>
                </div>
            </motion.div>

            {/* Stars */}
            {/* <img src="/images/star.svg" alt="star" className='absolute top-10 ' />
            <img src="/images/star.svg" alt="star" className='absolute top-28 left-20 ' />
            <img src="/images/star.svg" alt="star" className='absolute top-6 left-40' />
            <img src="/images/star.svg" alt="star" className='absolute top-16 left-72' />
            <img src="/images/star.svg" alt="star" className='absolute top-40 left-80' />
            <img src="/images/star.svg" alt="star" className='absolute top-28 left-60' /> */}

        </div>
    )
}

export default Banner
