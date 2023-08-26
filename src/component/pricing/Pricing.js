import React from "react";
import shapeTwo from "../../assets/shape-2.png";
import shapeOpes from '../../assets/shape-1.png'
import "./pricing.css";
import { FaCheck, FaArrowRight } from "react-icons/fa";

export default function Pricing() {
  return (
    <section className="pricing__section" id="pricing">
      <h2 className="section__title text-cs">Pricing</h2>
      <p className="section__subtitle">
        My <span>Pricing Board</span>
      </p>
      <div className="pricing__container container grid">
        <div className="pricing__item card card-one">
          <span className="pricing__subtitle text-cs">Hourely Basis</span>
          <h3 className="pricing__price">
            39 <span>$</span>
            <em>Hour</em>
          </h3>
          <p className="pricing__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <ul className="pricing__list">
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Brand Design</span>
            </li>
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Web Development</span>
            </li>
            <li className="list__item">
              <del>Advertising</del>
            </li>
            <li className="list__item">
              <del>Photography</del>
            </li>
          </ul>
          <a href="" className="btn pricing__btn">
            Start Project <FaArrowRight className="pricing__btn-icon text-cs" />
          </a>
          <img src={shapeTwo} alt="" className="shape  e__shape" />
        </div>
        <div className="pricing__item-wrapper">
          <span className="pricing__lebel text-cs">POPULAR</span>
          <div className="pricing__item card card-one">
            <span className="pricing__subtitle text-cs">Freelancing</span>
            <h3 className="pricing__price">
              259 <span>$</span>
              <em>price</em>
            </h3>
            <p className="pricing__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <ul className="pricing__list">
              <li className="list__item">
                <FaCheck className="list__icon" />
                <span>Brand Design</span>
              </li>
              <li className="list__item">
                <FaCheck className="list__icon" />
                <span>Web Development</span>
              </li>
              <li className="list__item">
                <FaCheck className="list__icon" />
                <span>Advertising</span>
              </li>
              <li className="list__item">
                <del>Photography</del>
              </li>
            </ul>
            <a href="" className="btn pricing__btn">
              Start Project{" "}
              <FaArrowRight className="pricing__btn-icon text-cs" />
            </a>
            <img src={shapeTwo} alt="" className="shape  e__shape" />
          </div>
        </div>
        <div className="pricing__item card card-one">
          <span className="pricing__subtitle text-cs">Full Time</span>
          <h3 className="pricing__price">
            1,249 <span>$</span>
            <em>Month</em>
          </h3>
          <p className="pricing__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <ul className="pricing__list">
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Brand Design</span>
            </li>
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Web Development</span>
            </li>
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Advertising</span>
            </li>
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Photography</span>
            </li>
          </ul>
          <a href="" className="btn pricing__btn">
            Start Project <FaArrowRight className="pricing__btn-icon text-cs" />
          </a>
          <img src={shapeTwo} alt="" className="shape e__shape" />
        </div>
      </div>
      <div className='section__deco deco__left'>
                        <img src={shapeOpes} alt='' className='shape'/>
                    </div>

                    <div className='section__bg-wrapper'>
                <span className='bg__title'>Testimonials</span>
            </div>
    </section>
  );
}
