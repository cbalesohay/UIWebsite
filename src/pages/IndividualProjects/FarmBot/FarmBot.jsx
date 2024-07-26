import React from 'react'
import { PageLayout } from '/src/components/PageLayout/PageLayout'
import { Container, Row, Col } from 'react-bootstrap'

import './farmbot.css'

export const FarmBot = () => {
  return (
    <>
      <PageLayout>
        <Container>
          <h1>FarmBot</h1>
          <img src='src/images/FarmBotPhotos/farmbot-plant-view.jpg' alt='Farm Bot Photo' className='farmbot-img'/>
          <p>The Center for Intelligent Industrial Robotics owns two open-source Farmbots. These devices, which automatically plant and water, are being used in conjunction with PLCs and a custom lighting gantry to extend their operation indoors and link common industrial controls with precision agriculture. The FarmBot has been a great undergraduate project for independent research as well as class research projects. FarmBot projects have been supported by the Office of Undergraduate Research.</p>
          <Row>
            <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
              <img src='/src/images/FarmBotPhotos/farmbot-Lacy.jpg' alt='Farm Bot Photo with Lacy' className='farmbot-img'/>
            </Col>
            <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}}>
              <img src='src/images/FarmBotPhotos/farmbot-side-view.jpg' alt='Farm Bot Photo' className='farmbot-img'/>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}}>
              <img src='src/images/FarmBotPhotos/farmbot-verticle-view.jpg' alt='Farm Bot Photo' className='farmbot-img'/>
            </Col>
          </Row>
          <br></br>
        </Container>
      </PageLayout>
    </>
  )
}
