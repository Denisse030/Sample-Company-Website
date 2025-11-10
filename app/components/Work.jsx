import { workData, assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Work = (isDarkMode) => {
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo text-black dark:text-white">Portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo text-black dark:text-white">Our latest work</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-black dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum temporibus perferendis molestias eos ullam nesciunt, possimus eum aut, alias obcaecati iusto voluptatibus voluptates, laudantium error quibusdam fugit hic quaerat earum?</p>

            <div className="grid grid-cols-auto my-10 gap-10 items-center dark:text-black">
                {workData.map((project, index) => (
                    <div
                        key={index}
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border border-black dark:border-white"
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    >
                        <div className="bg-white w-10/12 rounded-md border border-black absolute bottom-4 left-1/2 -translate-x-1/2 py-2 px-4 flex items-center justify-between duration-500 group-hover:bottom-6">
                            <div>
                            <h2 className="font-semibold text-lg">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline text-[#501249]"
                                    >
                                        {project.title}
                                    </a>
                                </h2>
                                <h5 className='text-sm text-gray-700'>
                                    <i>{project.description}</i>
                                </h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
