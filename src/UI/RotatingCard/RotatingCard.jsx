import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './rotatingcard.css'

export const RotatingCard = () => {
  return (
    <>
      {/**
       * Need to add Rotating picture functionality,
       * Fix Button, layout, img height
       */}
      <Card className="bg-dark text-white card" bsPrefix='rotating-card-container' style={{width: '50rem'}}>
        <Card.Img src='/src/images/minifactory.webp' alt="Card image" bsPrefix='rotating-img'/>
        <Card.ImgOverlay>
          <Card.Title className='rotating-text-title'>Card title</Card.Title>
          <Card.Text bsPrefix='rotating-card-text'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button bsPrefix='btn rotating-btn'>Learn More</Button>
          <div className='rotating-slider'>

          </div>
          <div className="rotating-dot">
            <span className='dot active-dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}