import { useRef } from 'react';
import emailjs from 'emailjs-com';
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

    return (
        <div id='contactme' className='bg-blue-dark max-w-[90%] m-auto'>
            <div className='mt-16 mb-5'>
                <h2 className='text-2xl text-yellow font-bold'>Contact Me</h2>
                <p className='text-white mt-2'>I'm available for any opportunity where I can put into practice my skill set, doesn't matter it is a small or a large project. Any questions or requests feel free to contact me through this form.</p>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <input className='input' type="text" placeholder='Name' name='name' />
                <input className='input' type="email" placeholder='Email' name='email' />
                <input className='input' type="text" placeholder='Subject' name='subject' />
                <textarea id="w3review" placeholder='Message' rows="4" cols="40" name='message' className='bg-blue-medium w-full mt-1 placeholder-gray-700 pl-3' >

                </textarea>

                <button type='submit' className='btn mt-2 mb-5 w-full'>
                    Send Message!
                </button>
            </form>
        </div>
    )
}

export default Contact
