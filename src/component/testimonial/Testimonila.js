import React from 'react';
import './testimonial.css';
import TesmonialIcon from '../../assets/testimonials-icon.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Pagination from '../../../node_modules/swiper/modules/pagination.mjs'
import shapeTwo from '../../assets/shape-2.png'
import { testimonials } from '../../Data';
import shapeOpen from '../../assets/shape-1.png'

export default function Testimonila() {
  return (
    <section className='testimonial section' id='testimonials'>
      <h2 className='section__title text-cs'>Testimonials</h2>
    <p className='section__subtitle'>
    My <span>Customer Says</span>
    </p>
    <Swiper 
    modules={[Pagination]}
    pagination={{ clickable: true }}
    breakpoints={{
        540:{
            slidesPerView:2,
            spaceBetween:30,
        },
        768:{
            slidesPerView:2,
            spaceBetween:30,
        },
        1200:{
            slidesPerView:3,
            spaceBetween:40,
        },

    }}
    
    className='testimonials__container container mySwiper'>
    {testimonials.map((item,i)=>{
        const {img, name,author,description} =item
        return(
                <SwiperSlide className='testimonials__item card card-one' key={i}>
                <div className='testimonials__header'>
                  <div className='testimonial__icon'>

                    <img src={TesmonialIcon} alt=''/>
                  </div>
                  <img src={img} alt='' className='testimonials__img'/>
                </div>
                <p className='testimonials__description'>{description}</p>
                <h3 className='testimonials__name'>{name}</h3>
                <p className='testimonials__author'>{author}</p>
                <img src={shapeTwo} alt='' className='shape d__shape'/>
                </SwiperSlide>
        )
    })}
    </Swiper>
    <div className='section__deco deco__right'>
                        <img src={shapeOpen} alt='' className='shape'/>
                    </div>
                    <div className='section__bg-wrapper'>
                <span className='bg__title'>Reviews</span>
            </div>
    </section>
  )
}
