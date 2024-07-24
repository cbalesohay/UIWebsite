import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import './spotlightcard.css'

export const SpotlightCard = () => {
  return (
    <>
      <div className='carousel-container'>
        <Carousel  touch='yes' prevIcon={<FaAngleLeft size={50} />} nextIcon={<FaAngleRight size={50} />}>
          <Carousel.Item interval={5000} >
            <Link to={{
              pathname: '/Projects'
            }}>
              <Image style={{width: '100%', maxHeight: '650px', minHeight: '330px', objectFit: 'cover'}} src='src/images/ScarecroPhotos/SOAC_Marz_Lacey.jpg' alt="First slide" fluid/>
            </Link>
            <Carousel.Caption style={{backgroundColor: 'rgb(25, 25, 25, .7)', maxWidth: '500px', margin: '0 auto'}}>
              <h3>Scarecro</h3>
              <p>Learn More About This Project!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Link to={{
              pathname: '/Projects'
            }}>
              <Image style={{width: '100%', maxHeight: '650px', minHeight: '330px', objectFit: 'cover'}} src='src/images/EvergreenPhotos/large-group.jpg' alt="Second slide" fluid/>
            </Link>
            <Carousel.Caption style={{backgroundColor: 'rgb(25, 25, 25, .7)', maxWidth: '500px', margin: '0 auto'}}>
              <h3>Project Evergreen</h3>
              <p>Learn More About This Project!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Link to={{
              pathname: '/Projects'
            }}>
              <Image style={{width: '100%', maxHeight: '650px', minHeight: '330px', objectFit: 'cover'}} src='src/images/FarmBotPhotos/farmbot-plant-view.jpg' alt="Second slide" fluid/>
            </Link>
            <Carousel.Caption style={{backgroundColor: 'rgb(25, 25, 25, .7)', maxWidth: '500px', margin: '0 auto'}}>
              <h3>FarmBot</h3>
              <p>Learn More About This Project!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}