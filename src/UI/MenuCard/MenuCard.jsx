import React from 'react'
import './menucard.css'

export const MenuCard = ({imgSrc, imgAlt, title, description, buttonText, link}) => {
  return (
    <div className='menu-card-container' >
      {title && <h2 className='card-title'>{title}</h2>}
      {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} className='menu-card-img'/>}
      {description && <p className='menu-card-description'>{description}</p>}
      {link && buttonText && <a href={link} className='menu-card-btn'>{buttonText}</a>}
    </div>
  )
}