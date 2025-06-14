import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='w-12/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            transition={{duration: 0.8, type: 'spring', stiffness: 100}}
            >
                <Image src={assets.profile_img} alt='' className='rounded-full w-40 border border-white' />
            </motion.div>
                <motion.h3 
                initial={{y: -20, opacity:0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.3}}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo text-black dark:text-white'>Lorem ipsum dolor sit amet consectetur.</motion.h3>
                <motion.h1 
                initial={{y: -30, opacity:0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.5}}
                className='text-3xl sm:text-6xl lg:-[66px] font-Ovo text-black dark:text-white'>Lorem amet consectetur adipisicing elit.</motion.h1>
                <motion.p 
                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 0.7}}
                className='max-w-2xl mx-auto font-Ovo text-black dark:text-white'>Lorem ipsum dolor asperiores totam neque deleniti, beatae expedita eveniet vitae recusandae accusamus iure.</motion.p>
        </div>
    )
}

export default Header