import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center font-Outfit text-4xl font-bold-itali text-black dark:text-white'>
            <h1>Company Name.</h1>
        </div>
        <div className='w-max flex items-center gap-2 mx-auto text-black dark:text-white'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                <p>yourgmailhere@gmail.com</p>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 text-black dark:text-white'>
            <p>@ 2025 Denisse Benito. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://www.instagram.com/" className='hover:underline text-[#501249] dark:text-[white]'>Instagram</a></li>
                <li><a target='_blank' href="https://www.facebook.com/" className='hover:underline text-[#501249] dark:text-[white]'>Facebook</a></li>
                <li><a target='_blank' href="https://www.tiktok.com/" className='hover:underline text-[#501249] dark:text-[white]'>TikTok</a></li>
                <li><a target='_blank' href="https://www.youtube.com/" className='hover:underline text-[#501249] dark:text-[white]'>YouTube</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer