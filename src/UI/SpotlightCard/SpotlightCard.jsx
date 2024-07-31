import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import './spotlightcard.css'

export const SpotlightCard = () => {
  const carouselItemStyle = {
    width: '100%',
    maxHeight: '650px',
    minHeight: '330px',
    objectFit: 'cover',
  };
  const carouselCaptionStyle = {
    backgroundColor: 'rgb(25, 25, 25, .7)',
    maxWidth: '500px',
    margin: '0 auto'
  };
  return (
    <>
      <div className='carousel-container'>
        <Carousel touch='yes' prevIcon={<FaAngleLeft size={50} />} nextIcon={<FaAngleRight size={50} />}>

          {/* Image 1 */}
          <Carousel.Item interval={5000} >
            <Link to={{
              pathname: '/Projects'
            }}>
              <Image style={carouselItemStyle} src='src/images/CarouselPhotos/SOAC_install_Malik_Aaron(1920x1920).jpg' alt="First slide"/>
            </Link>
            <Carousel.Caption style={carouselCaptionStyle}>
              <h3>Scarecro</h3>
              <p>Learn More About This Project!</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Image 2 */}
          <Carousel.Item interval={5000}>
            <Link to={{
              pathname: '/Projects'
            }}>
              <Image style={carouselItemStyle} src='src/images/CarouselPhotos/large-group(1920x1920).jpg' alt="Second slide"/>
            </Link>
            <Carousel.Caption style={carouselCaptionStyle}>
              <h3>Project Evergreen</h3>
              <p>Learn More About This Project!</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Image 3 */}
          <Carousel.Item interval={5000}>
            <Link to={{
              pathname: '/Projects'
            }}>
              <Image style={carouselItemStyle} src='src/images/CarouselPhotos/farmbot-plant-view(1920x1920).jpg' alt="Second slide"/>
            </Link>
            <Carousel.Caption style={carouselCaptionStyle}>
              <h3>FarmBot</h3>
              <p>Learn More About This Project!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}