import React from 'react';
import './App.css';
import './index.css'
import Home from './component/Home';
import Service from './component/service/Service';
import Skill from './component/skills/Skill';
import Portfolio from './component/portfolio/Portfolio';
import Resume from './component/resume/Resume';
import Testimonila from './component/testimonial/Testimonila';
import Pricing from './component/pricing/Pricing';
import Blog from './component/blog/Blog';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';

function App() {
  return (
    <>
    <main className='main'>
    <Header/>
    <Home/>
    <Service/>
    <Skill/>
    <Portfolio/>
    <Resume/>
    <Testimonila/>
    <Pricing/>
    <Blog/>
    <Contact/>
    <Footer/>
    </main>
    </>
  );
}

export default App;
