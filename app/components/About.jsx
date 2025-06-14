import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({ isDarkMode }) => {
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo text-black dark:text-white">Company Name</h4>
            <h2 className="text-center text-5xl font-Ovo text-black dark:text-white">About The Company</h2>
            <div className="flex w-full flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20 my-10">

                {/* Image Container */}
                {/* <div className="lg:flex-1 flex justify-center">
                    <div className="w-64 sm:w-80 rounded-3xl">
                        <Image src={assets.user_image} alt='user' className='w-full rounded-3xl py-50' />
                    </div>
                </div> */}
                
                <div className="lg:flex-1 flex flex-col items-center text-center">                    
                    <p className='mb-10 max-w-2xl font-Ovo text-center text-black dark:text-white'>
                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit incidunt, non blanditiis, sed explicabo alias eos vero architecto possimus doloribus a veniam voluptates quae repellat mollitia repellendus expedita laborum harum, dunt, non blanditiis, sed explicabo alias eos vero architecto possimus doloribus a veniam voluptates, dunt, non blanditiis, sed explicabo alias eos vero architecto possimus doloribus a veniam voluptates!
                    </p>
                    
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl text-center'>
                        {infoList.map(({ title, description }, index) => (
                            <li
                                key={index}
                                className='border-[0.5px] border-black rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                            >
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                
                                {description.split('\n\n').map((line, i) => (
                                    <p key={i} className='text-gray-600 text-sm dark:text-white/80'>{line}</p>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
