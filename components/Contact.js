import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion,useAnimation } from 'framer-motion';
function Contact() {

    const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_r4r7z58', 'template_jl1d3eq', form.current, 'user_WmbsFJCtM9Zhw36AMX8qx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    const {ref, inView} = useInView({
        threshold: 0.1
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
        <div ref={ref} id='contactme' className='bg-blue-dark max-w-[90%] m-auto lg:h-[600px] lg:mt-40 2xl:flex  '>
            <motion.div animate={animation} initial={{x:'-100vw'}} className='mt-16 mb-5 lg:mt-0 2xl:w-[60%]'>
                <h2 className='text-2xl text-yellow font-bold lg:text-6xl lg:mb-10'>Contact Me</h2>
                <p className='text-white mt-2 xl:w-[90%] lg:text-lg'>I'm available for any opportunity where I can put into practice my skill set, doesn't matter it is a small or a large project. Any questions or requests feel free to contact me through this form.</p>
            </motion.div>

            <motion.form animate={animation2} initial={{x:'100vw'}} ref={form} onSubmit={sendEmail} className='2xl:w-[70%]'>
                <div className='md:flex md:justify-between'>
                    <input className='input md:w-[49.7%]' type="text" placeholder='Name' name='name' />
                    <input className='input md:w-[49.7%]' type="email" placeholder='Email' name='email' />
                </div>
                <input className='input' type="text" placeholder='Subject' name='subject' />
                <textarea id="w3review" placeholder='Message' rows="4" cols="40" name='message' className='bg-blue-medium w-full mt-1 placeholder-gray-700 pl-3' >

                </textarea>

                <button type='submit' className='btn mt-2 mb-5 w-full lg:w-[30%] xl:w-[40%]  '>
                    Send Message!
                </button>
            </motion.form>
        </div>
    )
}

export default Contact
