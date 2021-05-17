import React from 'react'
import './Mobile__About.scss'
import Image1 from '../../assets/About/image1.JPG'
import Image2 from '../../assets/About/image2.JPG'
import Image3 from '../../assets/About/image3.JPG'
import Image4 from '../../assets/About/image4.JPG'
import Image5 from '../../assets/About/image5.JPG'
import Image6 from '../../assets/About/image7.JPG'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

function Mobile__About() {
    return (
        <div className="mobile__about">
            <div className="mobile__about__sub">About Us</div>
            <div className="mobile__about__head">Who we are!</div>
            <div className="mobile__about__body">Vishnu Cars Private Limited, is part of “Vishnu Group”, promoted in the year 2001, by Mr Immani Venkata Rao. The Group is diversified into various businesses such as, Automobiles, Warehousing, Constructions etc.<br />Company has won prestigious Platinum Award from M/s Maruti Suzuki India Ltd., consecutively for a period of six years for its overall excellence in Business performance and Customer Service. <br /><br />Prompt and Quality service are key to our success.</div>
            <div className="mobile__about__slide">
                <Swiper className="swiper" spaceBetween={0} loop={true} autoplay={{delay: 700, speed: 500}}  slidesPerView={1} onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide className='slide'>
                        <img alt='' src={Image1} />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img alt='' src={Image2} />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img alt='' src={Image3} />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img alt='' src={Image4} />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img alt='' src={Image5} />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img alt='' src={Image6} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Mobile__About
