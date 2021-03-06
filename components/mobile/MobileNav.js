import Image from 'next/image'

function MobileNav({setIsOpen}) {
    return (
        <div className='w-screen h-screen flex flex-col  '>
            {/* Logo */}
            <a href="#banner">
                <div className='bg-blue-medium2 flex flex-col justify-center items-center p-10 '>
                    <Image  src='/images/logo.png' alt='logo' height='84' width='84'  />
                    <h3 className='text-white font-black text-lg '>Diego</h3>
                    <p className='text-gray-400 '>Web Developer</p>
                </div>
            </a>

            {/* Nav */}
             <nav className='w-full text-center mt-24'>
                 <ul className='flex flex-col'>
                    <li className='list-item'><a href='#aboutme' onClick={()=>setIsOpen(false)} >About Me</a></li>
                     <li className='list-item'><a href='#skills' onClick={()=>setIsOpen(false)} >My Skills</a></li>
                     <li className='list-item'><a href='#portfolio' onClick={()=>setIsOpen(false)} >My Portfolio</a></li>
                     <li className='list-item'><a href='#contactme' onClick={()=>setIsOpen(false)} >Contact Me</a></li>
                 </ul>
             </nav>

             {/* Footer */}
            <div className='flex justify-center space-x-10 mt-auto mb-2'>
            <a href='https://twitter.com/DiegoTaveras11' target="_blank">
                    <img className='h-6' src="/images/twitter.svg" alt="" />     
                  </a>
                  <a href='https://github.com/diegodjty' target="_blank"><img className='h-6' src="/images/github.svg" alt="" /></a>
                  <a href='https://www.linkedin.com/in/diego-taveras-325491226/' target="_blank">
                    <img className='h-6' src="/images/linkedin.svg" alt="" />     
                  </a>     
            </div>
        </div>
    )
}

export default MobileNav
