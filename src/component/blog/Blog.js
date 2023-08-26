import React from 'react';
import './blog.css';
import {FaCheck,FaArrowRight} from 'react-icons/fa'
import Blog1 from '../../assets/blog1.jpg'
import Blog2 from '../../assets/blog2.jpg'
import Blog3 from '../../assets/blog3.jpg';
import shapeOpen from '../../assets/shape-1.png'

export default function Blog() {
  return (
    <section className='blog__section' id='blog' style={{marginTop:'30px'}}>
   <h2 className='section__title text-cs'>Latest Blog</h2>
    <p className='section__subtitle'>
    My <span>Articles and Advice</span>
    </p>
    <div className='blog__container container grid'>
        <div className='blog__item card card-two'>
            <span className='blog__date text-cs'>OCOTBER 31,2023</span>
            <h3 className='blog__title'>The main things for The Designer</h3>
            <p className='blog__description'>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href='' className='link'>Read more <FaArrowRight className='link__icon text-cs'/></a>
            <img src={Blog1} className='blog__img' alt=''/>
        </div>
        <div className='blog__item card card-two'>
            <span className='blog__date text-cs'>OCOTBER 31,2023</span>
            <h3 className='blog__title'>Follow Your Own Design Process</h3>
            <p className='blog__description'>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href='' className='link'>Read more <FaArrowRight className='link__icon text-cs'/></a>
            <img src={Blog2} className='blog__img' alt=''/>
        </div>
        <div className='blog__item card card-two'>
            <span className='blog__date text-cs'>OCOTBER 31,2023</span>
            <h3 className='blog__title'>Usability Secretes to Create Better Interfaces.</h3>
            <p className='blog__description'>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href='' className='link'>Read more <FaArrowRight className='link__icon text-cs'/></a>
            <img src={Blog3} className='blog__img' alt=''/>
        </div>
    </div>
    <div className='section__deco deco__right'>
                        <img src={shapeOpen} alt='' className='shape'/>
                    </div>
                    <div className='section__bg-wrapper'>
                <span className='bg__title'>Blog</span>
            </div>
    </section>
  )
}
