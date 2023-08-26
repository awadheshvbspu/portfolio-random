import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import shapeTwo from '../../assets/shape-2.png';

export default function List({list,filterItems}) {
    const [active,setActive] =useState(0)
  return (
    <>
    <div className='portfolio__list'>
    {list.map((category,i)=>{
        return(
            <button className={`${active === i ? 'active-work' : ''} portfolio__list-item text-cs`} key={i} onClick={()=>{setActive(i); filterItems(category)}}>{category}
            
            </button>
        )
    })}</div>
    </>
  )
}
