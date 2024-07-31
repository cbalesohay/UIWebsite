import React from 'react'
import { PageLayout } from '/src/components/PageLayout/PageLayout'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './evergreen.css'

export const Evergreen = () => {
  const buttonStyle = {
    border: '2px solid rgb(94, 72, 255)',
    borderRadius: '0px',
    boxShadow: 'inset 0 0 0 0 #5E48FF',
    borderColor: '#5E48FF',
    width: '200px'
  }
  const sixOne = {
    span: 6,
    order: 1
  }
  const sixTwo = {
    span: 6,
    order: 2
  }
  const twelveOne = {
    span: 12,
    order: 1
  }
  const twelveTwo = {
    span: 12,
    order: 2
  }
  return (
    <>
      <PageLayout>
        <h1>EVERGREEN</h1>
        <Container>
          <img src='src/images/EvergreenPhotos/group-photo-evergreen.jpg' alt='Evergreen Photo' className='evergreen-img'/>
          <p>Funded by the United States Forest Service and the USDA, Project Evergreen is developing an autonomous weeding robot for National Forest tree seedling nurseries. Led by graduate student Garrett Wells, the project is designed to help nurseries increase their production under the REPLANT act to help United States reforestation efforts.</p>
          <br></br>
          <h3>Components</h3>
          <Row>
            <Col xs={twelveTwo} md={sixOne}>
              <p>The project uses an autonomous robot rover equipped with a 3-axis gantry and an electrical probe system, which will use artificial intelligence to navigate and identify weeds before electrocuting them with the probe. The system is designed to keep 1 and 2 year old bare root seedling plots healthy and weed free.</p>
              <p>The project involves technology from every area of robotics: robotic operation and control, electrical conductivity and end effector design, 3D printing, machine vision modeling, artificial intelligence, navigation, and safety testing.</p>  
              <p>The project is principally funded by the USFS and USDA but has also received support from the Office of Undergraduate Research.</p>
            </Col>
            <Col xs={twelveOne} md={sixTwo}>
              <img src='src/images/EvergreenPhotos/evergreen-robot.jpg' className='evergreen-img'/>  
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs={twelveTwo} md={sixOne}>
              <img src='src/images/EvergreenPhotos/need-calification.jpg' className='evergreen-img'/>  
            </Col>
            <Col xs={twelveOne} md={sixTwo}>
              <img src='src/images/EvergreenPhotos/in-action-evergreen.jpg' className='evergreen-img'/>  
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs={twelveTwo} md={sixOne}>
              <img src='src/images/EvergreenPhotos/large-group.jpg' className='evergreen-img'/>  
            </Col>
            <Col xs={twelveOne} md={sixTwo}>
              <img src='src/images/EvergreenPhotos/evergreen-up-close.jpg' className='evergreen-img'/>
            </Col>
          </Row>
          <br></br>
          <Container style={{textAlign: 'start', paddingBottom: '10px'}}>
            <Link to='/Projects'>
              <Button style={buttonStyle} type='submit' value='submit' bsPrefix='btn btn-slide-animation btn-slide-animation-lupine'><FaArrowLeft size={22} /> Back to Projects</Button>
            </Link>
          </Container>
        </Container>
      </PageLayout>
    </>
  )
}