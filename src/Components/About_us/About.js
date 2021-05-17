import React from 'react'
import './About.scss'
import quote from '../../assets/left-quote.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Image1 from '../../assets/About/image1.JPG'
import Image2 from '../../assets/About/image2.JPG'
import Image3 from '../../assets/About/image3.JPG'
import Image4 from '../../assets/About/image4.JPG'
import Image5 from '../../assets/About/image5.JPG'
import Image6 from '../../assets/About/image7.JPG'
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
function About() {
    return (
        <div className='about'>
            <div className="about__top">
                <div className='about__left'>
                    <div className="about__head">Who we are</div>
                    <div className="about__body">Vishnu Cars Private Limited, is part of “Vishnu Group”, promoted in the year 2001, by Mr Immani Venkata Rao. The Group is diversified into various businesses such as, Automobiles, Warehousing, Constructions etc.</div>
                    <div className="about__body new">Company has won prestigious Platinum Award from M/s Maruti Suzuki India Ltd., consecutively for a period of six years for its overall excellence in Business performance and Customer Service. <br /><br/>Prompt and Quality service are key to our success.</div>
                </div>
                <div className="about__right">
                    <img className='quote__icon' src={quote}/>
                    <hr />
                    <div className="quote">"We believe that it takes great people to deliver great <br />product"</div>
                    <div className="quote__sub">Vishnu Cars Team</div>
                </div>
            </div>
            <div className="about__bottom">
                <Swiper className="swiper" spaceBetween={0} loop={true} autoplay={{delay: 700, speed: 500}}  slidesPerView={3.5} onSwiper={(swiper) => console.log(swiper)}>
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

export default About
