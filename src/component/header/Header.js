import React, { useEffect, useState } from "react";
import "./header.css";
import { links } from "../../Data";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import {BsSun,BsMoon} from 'react-icons/bs';
import {Link} from 'react-scroll';
import { animateScroll } from "react-scroll";
import shapeOpen from '../../assets/shape-1.png';



const getStorageTheme = () =>{
  let theme = 'light-theme';
  if (localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
  }
}
export default function Header() {
  const [showMenu,setShowMenu] =useState(false);

  const [scrollNav,setScrollNav] = useState(false);
  const [theme,setTheme] =useState(getStorageTheme())
  const scrollTop =() =>{
    animateScroll.scrollToTop();
  }

  const changeNav = () =>{
    if(window.scroll >= 80){
      setScrollNav(true)

    }else{
      setScrollNav(false)
    }
  };

  const toggleTheme = () =>{
    if(theme==='light-theme'){
      setTheme('dark-theme')
    }else{
      setTheme('light-theme')
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', changeNav)
  },[])
  useEffect(()=>{
    document.body.classList.toggle('no-scroll', showMenu);
  },[showMenu])

  useEffect(()=>{
   document.documentElement.className =theme;
   localStorage.setItem('theme', theme)
  },[theme])
  return (
    <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
      <nav className="nav">
        <Link to='/' onClick={scrollTop} className="nav__logo text-cs">
          Miller
        </Link>
        <div className={`${showMenu ? 'nav__menu show-menu' :'nav__menu'}`}>
         <div className="nav__data">
         <ul className="nav__list">
            {links.map(({ name, path }, i) => {
              return (
                <li className="nav__item">
                  {/* <a href="" className="nav__link text-cs">
                    {name}
                  </a> */}
                  <Link className="nav__link text-cs" to={path} spy={true} smooth={true} 
                  hashSpy={true}
                  offset={-50} duration={500} 
                  onClick={()=>setShowMenu(!showMenu)}
                  >
         {name}
        </Link>
                </li>
              );
            })}
          </ul>
          <div className="header__socials">
            <a href="" className="header__social-link">
              <FaTwitter />
            </a>
            <a href="" className="header__social-link">
              <FaDribbble />
            </a>
            <a href="" className="header__social-link">
              <FaBehance />
            </a>
          </div>
        </div>
        <div className='section__deco deco__left header__deco'>
                <img src={shapeOpen} alt='' className='shape'/>
            </div>
        </div>
        <div className="nav__btns">
          <div className="theme__toggler" onClick={toggleTheme}>
             {theme === 'light-theme' ? <BsSun/> : <BsMoon/>}
          </div>
          <div className={`${showMenu ? 'nav__toggle animate-toggle' :'nav__toggle'}`} onClick={()=>setShowMenu(!showMenu)}>
            <span></span>
            <span></span>
          </div>
         </div>
      </nav>
    </header>
  );
}
