import React from 'react'
import './peoplecard.css'

export const PeopleCard = ({imgSrc, imgAlt, title, name}) => {
  return (
    <div className='people-card-container'>
        {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} className='people-images'/>}
        <div>
            {title && name && <h2 className='title-name'>{title + name}</h2>}
        </div>
    </div>
  )
}
