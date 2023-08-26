import React, { useState } from 'react';
import { FaRegAddressBook,FaRegEnvelope,FaRegUser,FaRegMap } from 'react-icons/fa';
import './contact.css'
import axios from 'axios';
import shapeOpen from '../../assets/shape-1.png'

export default function Contact() {
    const [form,setform] =useState({name:'', email:'', subject:'', message:'',})

    const handleChange = (e) =>{
        const name =e.target.name;
        const value =e.target.value;
        setform({...form, [name]: value})
    }
   

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://sheet.best/api/sheets/ffa538b1-233a-48c2-ae41-ff7c07525745', form)
        .then((response)=>{
            console.log(response)
            // clearing form fields 
            setform({name:'', email:'', subject:'', message:''})
        })
    }
  return (
    <section className='contact section' id='contact'>
         <h2 className='section__title text-cs'>Contact me</h2>
    <p className='section__subtitle'>
    Let's <span>Talk About Ideas</span>
    </p>
    <div className='contact__container container grid'>
        <div className='contact__content'>
            <div className='contact__card'>
                <span className='contact__card-icon'>
                    <FaRegMap/>
                </span>
                <h3 className='contact__card-title'>Address</h3>
                <p className='contact__card-data'>North Tower, Toronto Canada</p>
            </div>
            <div className='contact__card'>
                <span className='contact__card-icon'>
                <FaRegUser/>
                </span>
                <h3 className='contact__card-title'>Freelance</h3>
                <p className='contact__card-data'>Available Right Now</p>
            </div>
            <div className='contact__card'>
                <span className='contact__card-icon'>
                    <FaRegEnvelope/>
                </span>
                <h3 className='contact__card-title'>Email</h3>
                <p className='contact__card-data'>Zoe.miller@gmail.com</p>
            </div>
            <div className='contact__card'>
                <span className='contact__card-icon'>
                     <FaRegAddressBook/>
                </span>
                <h3 className='contact__card-title'>Phone</h3>
                <p className='contact__card-data'>+1 900-900-9000</p>
            </div>
        </div>
        <form className='contact__form' onSubmit={handleSubmit}>
         <div className='contact__form-group grid'>
            <div className='contact__form-div'>
                <label className='contact__form-tag text-cs'>Your Full Name <b>*</b></label>
                <input type='text' className='contact__form-input' 
                name='name'
                value={form.name}
                onChange={handleChange}
                 />
            </div>
            <div className='contact__form-div'>
                <label className='contact__form-tag text-cs'>Your Email Address <b>*</b></label>
                <input type='email' className='contact__form-input' 
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                />
            </div>
         </div>
            <div className='contact__form-div '>
                <label className='contact__form-tag text-cs'>Your Subject <b>*</b></label>
                <input type='text' className='contact__form-input'
                name='subject'
                onChange={handleChange}
                value={form.subject}

                 />
            </div>
            <div className='contact__form-div contact__form-area'>
                <label className='contact__form-tag text-cs'>Your Message <b>*</b></label>
                <textarea className='contact__form-input'
                name='message'
                type='text'
                value={form.message}
                onChange={handleChange}
                ></textarea>
            </div>
            <div className='contact__submit'>
                <p>* Accept the terms and conditions.</p>
                <button className='btn text-cs' type='submit '>Submit</button>
            </div>
        </form>
    </div>
    <div className='section__deco deco__left'>
                        <img src={shapeOpen} alt='' className='shape'/>
                    </div>
                    <div className='section__bg-wrapper'>
                <span className='bg__title'>Contact</span>
            </div>
    </section>
  )
}
