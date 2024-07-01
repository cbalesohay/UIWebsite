import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Pages } from '../../components/Lists/pages'
import { RotatingCard } from '../../UI/RotatingCard/RotatingCard'
import { MenuCard } from '../../UI/MenuCard/MenuCard'
import './landingpage.css'
import { Container } from 'react-bootstrap'

export const LandingPage = () => {
  return (
    <PageLayout>
      <Container className='rotating-card-container'>
        <RotatingCard/>
      </Container>
      <div className='page-cards'>
        {/* Map through all availible Pages */}
        {Pages.slice(1).map((page) => (
          <MenuCard key={page.id} title={page.title} imgSrc={page.url} imgAlt={page.imgAlt} />
        ))}
      </div>
    </PageLayout>
  )
}