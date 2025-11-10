'use client'
import React from 'react'
import { serviceData } from '@/assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules'
import './Services.css'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo text-black dark:text-white">What We Offer</h4>
      <h2 className="text-center text-5xl font-Ovo text-black dark:text-white">Our Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-black dark:text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia fugit quaerat aliquam maiores nisi repellat accusamus non velit nemo sit! Maxime voluptatum ut reiciendis laudantium eveniet animi nemo incidunt dolor.
      </p>

      <div className="hidden md:block">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
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
              <div className="w-[250px] h-[300px] gap-6 my-10 mx-auto border border-black dark:border-white rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover  hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                <h3 className="text-lg my-4 text-black dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 leading-5 dark:text-white">{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

          {/* Mobile Friendly */}
      <div className="block md:hidden">
        <div className="flex flex-col items-center gap-8 mt-10">
          {serviceData.map(({ title, description }, index) => (
            <div
              key={index}
              className="w-[90%] border border-black dark:border-white rounded-lg px-6 py-8 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            >
              <h3 className="text-lg mb-3 text-center text-black dark:text-white">{title}</h3>
              <p className="text-sm text-center text-gray-600 leading-5 dark:text-white">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
