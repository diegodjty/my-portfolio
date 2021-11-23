import Image from 'next/image'
function BusImg() {
    return (
        <div  >
            <div className='sm:max-w-[90%] md:max-w-[100%] m-auto relative h-[400px] sm:h-[600px] md:h-[700px] md:hidden  lg:h-[800px] xl:h-[900px] 2xl:h-[1200px]'>
                <Image className='z-10 '  src='/images/bus.jpg' layout='fill' priority />
            </div>
        </div>
    ) 
}

export default BusImg
