import React from "react";
import "./service.css";
import { services } from "../../Data";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Pagination from "../../../node_modules/swiper/modules/pagination.mjs";
import shapeTwo from "../../assets/shape-2.png";
import shapeOpen from "../../assets/shape-1.png";

export default function Service() {
  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs">What I Do</h2>
      <p className="section__subtitle">
        My <span>services</span>
      </p>
      <Swiper
      spaceBetween={30}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="services__container container mySwiper"
      >
        {services.map((item, i) => {
          const { name, title, description } = item;
          return (
            <SwiperSlide className="services__item card card-one" key={i}>
              <span className="services__subtitle text-cs">{name}</span>
              <h3 className="services__titile">{title}</h3>
              <p className="services__description">{description}</p>
              <a href="" className="link">
                See Pricing
                <FaArrowRight className="link__icon" />
              </a>
              <img src={shapeTwo} alt="" className="shape c__shape" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="section__deco deco__right">
        <img src={shapeOpen} alt="" className="shape" />
      </div>
      <div className='section__bg-wrapper'>
                <span className='bg__title'>Service</span>
            </div>
    </section>
  );
}
