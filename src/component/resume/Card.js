import React, { useState } from 'react'

export default function Card(props) {
    const [showInfo,setshowinfo] =useState(false)

  return (
    <div className='resume__item'>
    <div className='resume__header' onClick={()=>setshowinfo(!showInfo)}>
    <h3 className='resume__subtitle'>{props.title}</h3>
    <span className='resume__icon'>{showInfo ? '-' : '+'}</span>
    </div>
    <div className={`${showInfo ? 'show-content' : ''} resume__content`}>
    <div className='resume__date-title'>
    <h3 className='resume__title'>{props.subtitle}</h3>
    <span className='resume__date text-cs'>{props.date}</span>
    </div>
    <p className='reume__description'>{props.description}</p>
    </div>
    </div>
  )
}
