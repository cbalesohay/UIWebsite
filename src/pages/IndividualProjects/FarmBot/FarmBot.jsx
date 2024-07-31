import React from 'react'
import { PageLayout } from '/src/components/PageLayout/PageLayout'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './farmbot.css'

export const FarmBot = () => {
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
        <Container>
          <h1>FarmBot</h1>
          <img src='src/images/FarmBotPhotos/farmbot-plant-view.jpg' alt='Farm Bot Photo' className='farmbot-img'/>
          <p>The Center for Intelligent Industrial Robotics owns two open-source Farmbots. These devices, which automatically plant and water, are being used in conjunction with PLCs and a custom lighting gantry to extend their operation indoors and link common industrial controls with precision agriculture. The FarmBot has been a great undergraduate project for independent research as well as class research projects. FarmBot projects have been supported by the Office of Undergraduate Research.</p>
          <Row>
            <Col xs={twelveTwo} md={sixOne}>
              <img src='/src/images/FarmBotPhotos/farmbot-Lacy.jpg' alt='Farm Bot Photo with Lacy' className='farmbot-img'/>
            </Col>
            <Col xs={twelveOne} md={sixTwo}>
              <img src='src/images/FarmBotPhotos/farmbot-side-view.jpg' alt='Farm Bot Photo' className='farmbot-img'/>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs={twelveOne} md={sixTwo}>
              <img src='src/images/FarmBotPhotos/farmbot-verticle-view.jpg' alt='Farm Bot Photo' className='farmbot-img'/>
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
