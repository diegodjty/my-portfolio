
function Aboutme() {

    return (
        <div id='aboutme' className='bg-blue-dark max-w-[90%] m-auto'>
            <div className='mt-16 mb-5'
            >
                <h2 className='text-2xl text-yellow font-bold'>About Me</h2>
                <p className='text-white mt-2'>Hello! My name is Diego Taveras I’m a Front End Developer located in Long Island, New York.
                I love web development and everything that has to do with technology. I am passionate about learning new things and acquiring new experiences and skills. I am a lover of nature, sports, and working out.</p>
                <p className='text-white'>To learn more about my education and, experiences take a look at my resume.</p>
                <p className='font-bold text-sm text-blue-light ml-10 mt-3'><a>Resume</a></p>
                <img className='m-auto mt-10' src="/images/memoji.png" height={125} width={125} alt="" />
            </div>
        </div>
    )
}

export default Aboutme
