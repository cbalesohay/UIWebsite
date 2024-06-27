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
      <Card className="bg-dark text-white rotating-card-container" style={{width: '50%'}}>
        <Card.Img src='/src/images/minifactory.webp' alt="Card image" className='rotating-img'/>
        <Card.ImgOverlay>
          <Card.Title className='rotating-text-title'>Card title</Card.Title>
          <Card.Text className='rotating-card-text'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button className='rotating-btn'>Go to Projects</Button>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}