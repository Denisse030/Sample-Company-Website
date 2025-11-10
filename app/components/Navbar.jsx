import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(100%)';
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                {/* Optional background image */}
            </div>

            <nav className={`text-black dark:text-white transition-colors duration-300 w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-rose bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                <a className='lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo text-2xl font-bold text-black dark:text-white' href="#top">Company Name.</a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-colors duration-300 ${isScroll ? "" : "bg-[#ffb3f6] shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent text-black dark:text-white"}`}>
                    <li><a className='font-Ovo text-black dark:text-white' href="#top">Home</a></li>
                    <li><a className='font-Ovo text-black dark:text-white' href="#about">About Us</a></li>
                    <li><a className='font-Ovo text-black dark:text-white' href="#services">Services</a></li>
                    <li><a className='font-Ovo text-black dark:text-white' href="#work">Our Work</a></li>
                    <li><a className='font-Ovo text-black dark:text-white' href="#contact">Contact Us</a></li>
                </ul>

                <div className='flex items-center gap-4 text-black dark:text-white transition-colors duration-300'>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image
                            src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                            alt='Toggle theme icon'
                            className='w-6'
                        />
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-black rounded-full ml-4 font-Ovo hover:shadow-black dark:border-white dark:hover:shadow-white text-black dark:text-white transition-colors duration-300'>
                        Contact
                        <Image
                            src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                            alt='Arrow icon'
                            className='w-3'
                        />
                    </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image
                            src={isDarkMode ? assets.menu_white : assets.menu_black}
                            alt='Menu icon'
                            className='w-6'
                        />
                    </button>
                </div>

                {/* Mobile menu */}
                <ul
                    ref={sideMenuRef}
                    className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-[#fbe0fc] text-black dark:bg-darkHover dark:text-white transition-colors duration-300'
                >
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image
                            src={isDarkMode ? assets.close_white : assets.close_black}
                            alt='Close menu icon'
                            className='w-5 cursor-pointer'
                        />
                    </div>

                    <li><a className='font-Ovo text-black dark:text-white' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-Ovo text-black dark:text-white' onClick={closeMenu} href="#about">About Me</a></li>
                    <li><a className='font-Ovo text-black dark:text-white' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='font-Ovo text-black dark:text-white' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='font-Ovo text-black dark:text-white' onClick={closeMenu} href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
