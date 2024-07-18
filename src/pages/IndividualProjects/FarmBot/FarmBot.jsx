import React from 'react'
import { PageLayout } from '/src/components/PageLayout/PageLayout'
import { Container } from 'react-bootstrap'
import './farmbot.css'

export const FarmBot = () => {
  return (
    <>
      <PageLayout>
        <Container>
          <h1>FarmBot</h1>
          <img src='src/images/FarmBotPhotos/farmbot-plant-view.jpg' alt='Farm Bot Photo' className='farmbot-img'/>
          <p>The Center for Intelligent Industrial Robotics owns two open-source Farmbots. These devices, which automatically plant and water, are being used in conjunction with PLCs and a custom lighting gantry to extend their operation indoors and link common industrial controls with precision agriculture. The FarmBot has been a great undergraduate project for independent research as well as class research projects. FarmBot projects have been supported by the Office of Undergraduate Research.</p>
        </Container>
      </PageLayout>
    </>
  )
}
