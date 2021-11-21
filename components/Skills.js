function Skills() {
    return (
        <div id='skills' className='bg-blue-dark max-w-[90%] m-auto'>
            <div className='mt-16 mb-5'>
                <h2 className='text-2xl text-yellow font-bold'>My Skills</h2>
                <p className='text-white mt-2'>Here is a list of some of the skills I have learned over the years, some self-taught, and others learned in college.</p>
            </div>
            <div>
                <div className=' grid grid-cols-2 p-5 justify-items-center mb-3'>
                    <img className='my-2' src="/images/html5.svg" alt="" />
                    <img className='my-2' src="/images/css3.svg" alt="" />
                    <img className='my-2' src="/images/js.svg" alt="" />
                    <img className='my-2' src="/images/react.svg" alt="" />
                    <img className='my-2' src="/images/tailwind.svg" alt="" />
                    <img className='my-2' src="/images/nextjs.svg" alt="" />
                </div>
                <div className=' grid grid-cols-2 p-5 justify-items-center'>
                    <img className='my-2' src="/images/sass.svg" alt="" />
                    <img className='my-2' src="/images/jquery.svg" alt="" />
                    <img className='my-2' src="/images/php.svg" alt="" />
                    <img className='my-2' src="/images/mysql.svg" alt="" />
                    <img className='my-2' src="/images/git.svg" alt="" />
                    <img className='my-2' src="/images/github2.svg" alt="" />
                </div>
            </div>
        </div> 
    )
}

export default Skills
