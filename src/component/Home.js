import React from 'react';
import profileImg from '../assets/profile-img.png';
import shapeOpen from '../assets/shape-1.png';
import shapeTwo from '../assets/shape-2.png';
import { FaTwitter } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa'
import { FaBehance } from 'react-icons/fa';
import './home.css';
import CV from '../assets/awadheshyadav.pdf'

export default function Home() {
    return (
        <section className='home' id='home'>
            <div className='home_wrapper'>
            <div className='home__container container'>
                <p className='home__subtitle text-cs'>Hello, <span>My name is</span></p>
                <h1 className='home__title text-cs'>
                    <span>ZOE</span> MILLER
                </h1>
                <p className='home__job'>
                    <span className='text-cs'>I am</span> <b>Web Developer</b>
                    <div className='home__img-wrapper'>
                        <div className='home__banner'>
                            <img src={profileImg} alt='' className='home__profile' />
                        </div>
                        <p className='home__data home__data-one'>
                            <span className='text-lg'>
                                12<b>+</b>
                            </span>
                            <span className='text-sm'>
                                Years of<b> Experience</b>
                            </span>
                        </p>
                        <p className='home__data home__data-two'>
                        <span className='text-lg'>
                            330+
                        </span>
                        <span className='text-sm text-cs'>
                            Completed <span>Projects</span>
                        </span>
                    </p>

                    <img src={shapeOpen} alt='' className='shape shape__1'/>
                    <img src={shapeTwo} alt='' className='shape shape__2'/>
                    <img src={shapeTwo} alt='' className='shape shape__3'/>
                    </div>

                </p>
                <p className='home__text'>From France, Paris. I have rich experience in web desing, also I am good at wordpress. I love to talk with you about our unique.</p>
                <div className='home__socials'>
                    <a href='' className='home__social-link'>
                        <FaTwitter />
                    </a>
                    <a href='' className='home__social-link'>
                        <FaDribbble />
                    </a>
                    <a href='' className='home__social-link'>
                        <FaBehance />
                    </a>
                </div>

                <div className='home__btns'>
                    <a href={CV} className='btn text-cs'>Download CV</a>
                    <a href='#skills' className='hero__link text-cs'>My Skills</a>
                </div>
            </div>
            <div className='section__deco deco__left'>
                <img src={shapeOpen} alt='' className='shape'/>
            </div>
            </div>
            <div className='section__bg-wrapper'>
                <span className='bg__title'>Web Developer</span>
            </div>
        </section>
    )
}
