"use client"
import React from "react";
import SectionTitle from "./SectionTitle";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import CustomerLogo from "@/public/CustomerLogo.svg"
import Image from "next/image";
import { Autoplay  } from "swiper/modules";


const MeetOutCustomer = () => {
    const tMeetOutCustomer = useTranslations("MeetOutCustomer")
  return (
    <>
      <div className="container mx-auto px-4 py-10 md:pt-16 pb-0 ">
         <SectionTitle SectionTitle={tMeetOutCustomer("title")}  sectionDescription={tMeetOutCustomer("Description")} />
      

      <Swiper
      spaceBetween={20}
      slidesPerView={2}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      modules={[Autoplay]}
      className="CustomerSlider"
      breakpoints={{
        400: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30
         
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30
         
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 30
            
          },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30
          
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 30
            
          },
      }}
    >
        {Array(10).fill(1).map((_, index)=>(
            <SwiperSlide  key={index}><Image className="box-shadow-custom grayscale rounded-20 m-5 py-8 px-8 sm:py-16 md:py-20 md:px-12 w-full bg-white" src={CustomerLogo} alt="logo" width={180} height={90} /></SwiperSlide>
        ))}
     
    </Swiper>
    </div>
    </>
  );
};

export default MeetOutCustomer;
