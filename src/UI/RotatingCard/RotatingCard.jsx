import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './rotatingcard.css'

export const RotatingCard = () => {
  return (
    <>
      {/**
       * Need to add Rotating picture functionality,
       * Fix Button, layout, img
       */}
      <Card className="text-white card" bsPrefix='rotating-card-container'>
          <Card.Header style={{margin: '0px', padding: '0'}} bsPrefix='rotating-img'>
            <Card.Img src='src/images/lake.jpg' alt="Card image image-fluid" bsPrefix='rotating-img'/>
          </Card.Header>
        <Card.ImgOverlay>
          <Card.Title className='card-title' bsPrefix='rotating-text-title'>WELCOME</Card.Title>
          
        </Card.ImgOverlay>
        <Card.Footer bsPrefix='footer-rotating-card'>
            <Button bsPrefix='btn rotating-btn'>Learn More</Button>
            <div className='rotating-slider'>

            </div>
            <div className="rotating-dot">
              <span className='dot active-dot'></span>
              <span className='dot'></span>
              <span className='dot'></span>
            </div>
          </Card.Footer>
      </Card>
    </>
  )
}