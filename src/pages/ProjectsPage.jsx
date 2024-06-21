import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { Card } from '../UI/Card'
import './projectpage.css'

export const ProjectsPage = () => {
  return (
      <PageLayout>
        <h1>Project Page</h1>
        <div className='project-layout'>
          <Card imgSrc='/src/images/dashboard.png' imgAlt='SCARECRO' title='SCARECRO' description='Mary has the description for all of the imformation about the SCARECRO project as well as the picture that go with it' buttonText='Learn More' link='SCARECROPage'/>
          <Card imgSrc='/src/images/minifactory.webp' imgAlt='Project Evergreen' title='Project Evergreen' description='Mary has the description for all of the imformation about the SCARECRO project as well as the picture that go with it' buttonText='Learn More' link='EvergreenPage'/>
          <Card imgSrc='/src/images/aquiferpump.jpg' imgAlt='Aquifer Pumped Hydro' title='Aquifer Pumped Hydro' description='Mary has the description for all of the imformation about the SCARECRO project as well as the picture that go with it' buttonText='Learn More' link='PumpPage'/>
          <Card imgSrc='/src/images/AI.webp' imgAlt='AI Analysis' title='AI Analysis' description='Mary has the description for all of the imformation about the SCARECRO project as well as the picture that go with it' buttonText='Learn More' link='AiPage'/>
          <Card imgSrc='/src/images/cobot.jpg' imgAlt='Cobot' title='Cobot' description='Mary has the description for all of the imformation about the SCARECRO project as well as the picture that go with it' buttonText='Learn More' link='CobotPage'/>
        </div>
      </PageLayout>
  )
}
