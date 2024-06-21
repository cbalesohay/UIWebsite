import React from 'react'
import './card.css'

export const Card = ({imgSrc, imgAlt, title, description, buttonText, link}) => {
  return (
    <div className='card-container'>
        {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} className='card-img'/>}
        {title && <h2 className='card-title'>{title}</h2>}
        {description && <p className='card-description'>{description}</p>}
        {link && buttonText && <a href={link} className='card-btn'>{buttonText}</a>}
    </div>
  )
}
