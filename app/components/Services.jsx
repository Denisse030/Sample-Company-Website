import { assets } from '@/assets/assets'
import Image from 'next/image'
import { serviceData } from '@/assets/assets'
import React from 'react'

const Services = () => {
    return (
        <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className="text-center mb-2 text-lg font-Ovo text-black dark:text-white">What We offer</h4>
            <h2 className="text-center text-5xl font-Ovo text-black dark:text-white">Our Services</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-black dark:text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia fugit quaerat aliquam maiores nisi repellat accusamus non velit nemo sit! Maxime voluptatum ut reiciendis laudantium eveniet animi nemo incidunt dolor.</p>

            <div className='grid grid-cols-auto gap-6 my-10'>
                {serviceData.map(({title, description}, index)=>(
                    <div key={index}
                    className='border border-black rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white dark:border-white'>
                        <h3 className='text-lg my-4 tet-gray-700 text-black dark:text-white'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5 dark:text-white'>
                            {description}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Services