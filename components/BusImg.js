import Image from 'next/image'
function BusImg() {
    return (
        <div id='portfolio' >
            <div className='sm:max-w-[90%] m-auto relative h-[400px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px]'>
                <Image className='z-10 '  src='/images/bus.jpg' layout='fill' priority />
            </div>
        </div>
    ) 
}

export default BusImg
