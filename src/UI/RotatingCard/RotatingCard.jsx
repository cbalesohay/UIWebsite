import React from 'react'
import './rotatingcard.css'

export const RotatingCard = () => {
  return (
    <div className='rotating-container'>
        <div>
            <h1>Rotating Card of Relevent Data</h1>
            <div className='rotating-images'>
                <img src='/src/images/minifactory.webp'/>
                <button>Learn More</button>
            </div>
        </div>
    </div>
  )
}
