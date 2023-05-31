import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from "uuid";
import 'swiper/css';
import 'swiper/css/navigation';
import './HeaderSlide.scss'
import slideLine from './../../img/line/vertical-line.png';


SwiperCore.use([ Navigation ])

function Slide({ contact }) {

  const [slidesPerView, setSlidesPerView] = useState(1);

  const handleResize = () => {
    if (window.innerWidth >= 1101) {
      setSlidesPerView(3);
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1100) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slides = contact.map((element) => (
    <SwiperSlide key={uuidv4()}>{element}</SwiperSlide>
  ));

  return (
    <Swiper
        className='header-slide'
        grabCursor={true}
        slidesPerView={slidesPerView}
        navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        }}
    >
      {slides[0]}
      <img src={slideLine} alt="line" className="slide-fline"/>
      {slides[1]}
      <img src={slideLine} alt="line" className="slide-sline"/>
      {slides[2]}
      <button className='swiper-button-prev'></button>
      <button className='swiper-button-next'></button>
    </Swiper>
  );
};
export default Slide;
