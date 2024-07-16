import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './rotatingcard.css'

export const RotatingCard = () => {
  return (
    <>
      {/**
       * Need to fix image sizing and position for desktop and mobile view
       */}
     
      <div className='carousel-container'>
        <Carousel touch='yes' style={{width: '100%', height: '100%', maxHeight: '600px', overflow: 'hidden'}}>
          <Carousel.Item interval={5000} >
            <img src='src/images/lake.jpg' className="d-block w-100" alt="First slide"></img>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img src='src/images/aboutus.jpg' className="d-block w-100"></img>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img src='src/images/UI-Joe-grey.jpg' className="d-block w-100"></img>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}