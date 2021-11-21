import Projects from './Projects';
function Portfolio() {
    return (
        <div className='bg-blue-dark max-w-[90%] m-auto'>
            <div className='mt-16'>
                <h2 className='text-2xl text-yellow font-bold'>My Portfolio</h2>
                <p className='text-white mt-2'>Here are some of my most recent projects, most of them using ReactJS, since it is the technology that I enjoy working with the most and that I find most efficient and complete.</p>
            </div>

            {/* Projects */}
            <Projects />
        </div>
    )
}

export default Portfolio
