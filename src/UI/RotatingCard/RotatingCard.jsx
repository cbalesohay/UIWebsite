import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import './rotatingcard.css'
import { color } from 'three/examples/jsm/nodes/Nodes.js';

export const RotatingCard = () => {
  return (
    <>
      {/**
       * Need to fix image sizing and position for desktop and mobile view
       */}
     
      <div className='carousel-container'>
        <Carousel  touch='yes' prevIcon={<FaAngleLeft size={50}  />} nextIcon={<FaAngleRight size={50} />}>
          <Carousel.Item interval={5000} >
            <Link to={{
              pathname: '/Projects'
            }}>
              <Image style={{width: '100%', maxHeight: '650px', minHeight: '250px', objectFit: 'fill'}} src='src/images/lake.jpg' alt="First slide" fluid/>
            </Link>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Link to={{
              pathname: '/Projects'
            }}>
              <Image style={{width: '100%', maxHeight: '650px', minHeight: '250px', objectFit: 'fill'}} src='src/images/tree.jpg' alt="Second slide" fluid/>
            </Link>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Link to={{
              pathname: '/Projects'
            }}>
              <Image style={{width: '100%', maxHeight: '650px', minHeight: '250px', objectFit: 'fill'}} src='src/images/snow.jpg' alt="Second slide" fluid/>
            </Link>
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