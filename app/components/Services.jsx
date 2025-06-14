'use client'
import React from 'react'
import { serviceData } from '@/assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import './Services.css' // Your custom arrow styling

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo text-black dark:text-white">What We Offer</h4>
      <h2 className="text-center text-5xl font-Ovo text-black dark:text-white">Our Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-black dark:text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia fugit quaerat aliquam maiores nisi repellat accusamus non velit nemo sit! Maxime voluptatum ut reiciendis laudantium eveniet animi nemo incidunt dolor.
      </p>

      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="custom-swiper"
      >
        {serviceData.map(({ title, description }, index) => (
          <SwiperSlide key={index}>
            <div className="w-[250px] h-[300px] gap-6 my-10 mx-auto border border-black dark:border-white rounded-lg px-8 py-12 h-full hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
              <h3 className="text-lg my-4 text-black dark:text-white">{title}</h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white">{description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Services
