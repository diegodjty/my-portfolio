import { Transition } from '@headlessui/react';
import {MenuIcon,XIcon} from '@heroicons/react/solid'
import { useState } from 'react';
import MobileNav from './MobileNav';
import { motion } from 'framer-motion';

function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <motion.div 
            initial={{opacity:0, translateY: -50}}
            animate={{opacity:1, translateY: 0}}
            transition={{duration: 1}}
            className='lg:hidden'>
            <Transition
                show={!isOpen}
                enter="transition-opacity duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            > 

                <MenuIcon onClick={()=>setIsOpen(true)} className='h-12 text-blue-medium bg-blue-medium2 m-3
                fixed right-0 z-50 '/>
                
            </Transition>
            <Transition
                show={isOpen}
                enter="transition-opacity duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                    <XIcon onClick={()=>setIsOpen(false)} className='h-12 m-3 fixed right-0 text-white z-50'/>
                    <div className='bg-blue-medium h-screen w-full fixed overflow-y-scroll z-40 '>
                        <MobileNav setIsOpen={setIsOpen} />
                    </div>

            </Transition>
            
        </motion.div>
    )
}

export default MobileHeader
