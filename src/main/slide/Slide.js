import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from "uuid";
import 'swiper/css';
import 'swiper/css/navigation';
import './Slide.scss'


SwiperCore.use([ Navigation ])

function Slide({ content }) {

  const [slidesPerView, setSlidesPerView] = useState(1);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1100) {
      setSlidesPerView(2);
    } else if (window.innerWidth >= 1023 && window.innerWidth <= 1439) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
        className='main-slide'
        grabCursor={true}
        slidesPerView={slidesPerView}
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
