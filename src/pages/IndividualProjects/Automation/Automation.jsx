import React from 'react'
import { PageLayout } from '/src/components/PageLayout/PageLayout'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './automation.css'

export const Automation = () => {
  return (
    <>
      <PageLayout>
        <Container>
          <h1>Automation</h1>
          <img src='src/images/AutomationPhotos/Automation-in-action.jpg' alt='Automation Photo' className='automation-img'/>
          <p>Automation is one of the core skillsets developed at the Center for Intelligent Industrial Robotics. Students work with different robots and robotics systems including ROS (Robot Operating System), Fanuc CRX-10 robots, a Fanuc P50ib robot, Create3 Robots, and Automation Direct and Schneider Electric Programmable Logic Controllers (PLCs). Robotic projects have included simulating manufacturing systems, Cobot process manufacturing, automated visual inspections with conveyors, PLCs, and machine vision, and more. Automation projects occur in several of the course offered within the robotics system including Robotics System Engineering I and II, Programmable Logic Controller and Advanced Programmable Logic Controllers, and Machine Vision. Industry collaborations also can occur with undergraduate senior design projects and Master’s and PhD graduate projects.</p>
          <Row>
            <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
              <img src='src/images/AutomationPhotos/CRX-10.jpg' alt='Automation Photo' className='automation-img'/>    
            </Col>
            <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}}>
              <img src='src/images/AutomationPhotos/Automation-group-photo-3.jpg' alt='Automation Photo' className='automation-img'/>    
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
              <img src='src/images/AutomationPhotos/Automation-board-on-conveyor.jpg' alt='Automation Photo' className='automation-img'/>    
            </Col>
            <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}}>
              <img src='src/images/AutomationPhotos/Automation-wiring.jpg' alt='Automation Photo' className='automation-img'/>    
            </Col>
          </Row>
          <br></br><Row>
            <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
              <img src='src/images/AutomationPhotos/larry_small.png' alt='Automation Photo' className='automation-img'/>    
            </Col>
          </Row>
          <br></br>
          <Container style={{textAlign: 'start', paddingBottom: '10px'}}>
            <Link to='/Projects'>
              <Button style={{border: '2px solid rgb(94, 72, 255)',borderRadius: '0px', boxShadow: 'inset 0 0 0 0 #5E48FF', borderColor: '#5E48FF', width: '200px'}} type='submit' value='submit' bsPrefix='btn btn-slide-animation btn-slide-animation-lupine'><FaArrowLeft size={22} /> Back to Projects</Button>
            </Link>
          </Container>
        </Container>
      </PageLayout>
    </>
  )
}
