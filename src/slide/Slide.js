import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from "uuid";
import 'swiper/css';
import 'swiper/css/navigation';
import './Slide.scss'


SwiperCore.use([ Navigation ])

function Slide({ content }) {
  return (
    <Swiper
        grabCursor={true}
        slidesPerView={1}
        navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        }}
    >
      {content.map((item) => (
        <SwiperSlide key={uuidv4()}>
          {item}
        </SwiperSlide>
      ))}
      <button className='swiper-button-prev'></button>
      <button className='swiper-button-next'></button>
    </Swiper>
  );
};
export default Slide;