import React from 'react'
import { PageLayout } from '/src/components/PageLayout/PageLayout'
import { Container } from 'react-bootstrap'
import './automation.css'

export const Automation = () => {
  return (
    <>
      <PageLayout>
        <Container>
          <h1>Automation</h1>
          <img src='src/images/AutomationPhotos/Automation-in-action.jpg' alt='Automation Photo' className='automation-img'/>
          <p>Automation is one of the core skillsets developed at the Center for Intelligent Industrial Robotics. Students work with different robots and robotics systems including ROS (Robot Operating System), Fanuc CRX-10 robots, a Fanuc P50ib robot, Create3 Robots, and Automation Direct and Schneider Electric Programmable Logic Controllers (PLCs). Robotic projects have included simulating manufacturing systems, Cobot process manufacturing, automated visual inspections with conveyors, PLCs, and machine vision, and more. Automation projects occur in several of the course offered within the robotics system including Robotics System Engineering I and II, Programmable Logic Controller and Advanced Programmable Logic Controllers, and Machine Vision. Industry collaborations also can occur with undergraduate senior design projects and Master’s and PhD graduate projects.</p>
          <img src='src/images/AutomationPhotos/CRX-10.jpg' alt='Automation Photo' className='automation-img'/>
          <img src='src/images/AutomationPhotos/Automation-group-photo-3.jpg' alt='Automation Photo' className='automation-img'/>
          <img src='src/images/AutomationPhotos/Automation-board-on-conveyor.jpg' alt='Automation Photo' className='automation-img'/>
          <img src='src/images/AutomationPhotos/larry_small.png' alt='Automation Photo' className='automation-img'/>
          <img src='src/images/AutomationPhotos/Automation-wiring.jpg' alt='Automation Photo' className='automation-img'/>
        </Container>
      </PageLayout>
    </>
  )
}
