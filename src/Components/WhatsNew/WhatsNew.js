import React from 'react'
import './WhatsNew.scss'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Image2 from '../../assets/About/image2.JPG'
import Image1 from '../../assets/About/image4.JPG'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use(Pagination);
function WhatsNew() {
    return (
        <div className='whatsnew'>
        <img className='image__new' alt='' src='https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/learner%20(1).svg?alt=media&token=641f5ddd-a294-4e2b-965a-34da1e59694c' />
            <div className="whatsnew__main">
                <div className="whatsnew__top">
                    <div className="whatsnew__left">
                        <div className="sub">News</div>
                        <div className='head'>What's new in the world of Driving.</div>
                        <div className='body'>Technology has made everything easy including learning to drive.</div>
                        <ThumbUpIcon className='icon' />
                    </div>
                    <div className="whatsnew__right">
                        <div className="whatsnew__right__content">
                            <div className="image"><img src={Image1} alt=" " /></div>
                            <div className="whatsnew__right__head">Learn from certified professionals</div>
                            <div className='whatsnew__right__body'>We provide the best trainig. With the help of our professional trainers you can learn driving better and fast, teaching you all that you need to become a professional driver.</div>
                            <VerifiedUserIcon className="whatsnew__right__icon" />
                        </div>
                        <div className="whatsnew__right__content">
                            <div className="image"><img src={Image2} alt=" " /></div>
                            <div className="whatsnew__right__head">Stimulater based learning</div>
                            <div className='whatsnew__right__body'>Confidence is the main important aspect while driving. To improve your confidence on road, We teach you first on stimulater giving you a better on road experience.</div>
                            <DriveEtaIcon className="whatsnew__right__icon" />
                        </div>
                    </div>
                </div>
                <div className="whatsnew__bottom">
                    <div className="testimonial">
                        <div className="testimonial__sub">Testimonials</div>
                        <div className="testimonial__head">The Opinion of students who learned from us.</div>
                        <Swiper className="swiper__card" pagination={{ clickable : 'true' }}  slidesPerView={1}>
                            <SwiperSlide className='slide'>
                                <div className="person__opinion">I really got a very good experience here and the instructors are very professional and had a good knowledge about driving. My driving skills get improved and I also had a proper knowledge about driving. </div>
                                <div className="name">yashini kumar</div>
                            </SwiperSlide>
                            <SwiperSlide className='slide'>
                                <div className="person__opinion">It is a friendly place. Really good teaching. The instructor seemed to know his job pretty well. The whole process of learning to drive was a completely new experience. And it was enjoyable and fun.</div>
                                <div className="name">Nithya shree</div>
                            </SwiperSlide>
                            <SwiperSlide className='slide'>
                                <div className="person__opinion">My hearty thanks to the Manager of Maruti driving school for the loyalty to the candidates. If any one want to get your licence easy and tension free.. Then maruthi driving school kattupakkam is the one and only choice.</div>
                                <div className="name">Rathnavell R</div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatsNew
