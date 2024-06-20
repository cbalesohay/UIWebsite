import React from 'react'
import './card.css'

export const Card = (props) => {
  return (
    <div className='card'>
        <div className='card-body'>
            <img src={props.img}/>
            <div className='card-inside'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
  )
}
