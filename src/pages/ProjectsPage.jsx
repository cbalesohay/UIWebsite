import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { Card } from '../UI/Card'
import './projectpage.css'

export const ProjectsPage = () => {
  return (
      <PageLayout>
        <div className='project-layout'>
          <Card img='/src/images/dashboard.png' title='SCARECRO' description='Mary has the description for all of the imformation about the SCARECRO project as well as the picture that go with it'/>
          <Card img='/src/images/minifactory.webp' title='Project Evergreen' description='Mary has the description for all of the imformation about the SCARECRO project as well as the picture that go with it'/>
          <Card img='/src/images/aquiferpump.jpg' title='Aquifer Pumped Hydro' description='Mary has the description for all of the imformation about the SCARECRO project as well as the picture that go with it'/>
          <Card img='/src/images/AI.webp' title='Manufacturing AI Data Analysis' description='Mary has the description for all of the imformation about the SCARECRO project as well as the picture that go with it'/>
          <Card img='/src/images/cobot.jpg' title='Cobot' description='Mary has the description for all of the imformation about the SCARECRO project as well as the picture that go with it'/>
        </div>
      </PageLayout>
  )
}
