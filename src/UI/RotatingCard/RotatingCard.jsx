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
      <Card className="bg-dark text-white" style={{width: '50%'}}>
        <Card.Img src='/src/images/minifactory.webp' alt="Card image" className='rotating-img'/>
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text className='card-text-rotating'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button className='rotating-btn'>Go to Projects</Button>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}


{/* <div className='rotating-container'>
        <div>
            <h1>Rotating Card of Relevent Data</h1>
            <div className='rotating-images'>
                <img src='/src/images/minifactory.webp'/>
                <button>Learn More</button>
            </div>
        </div>
    </div> */}