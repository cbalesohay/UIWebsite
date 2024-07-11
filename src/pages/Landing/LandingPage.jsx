import React from 'react'
import { useEffect } from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Pages } from '../../components/Lists/pages'
import { RotatingCard } from '../../UI/RotatingCard/RotatingCard'
import { MenuCard } from '../../UI/MenuCard/MenuCard'
import './landingpage.css'
import { Container } from 'react-bootstrap'

export const LandingPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout>
      <Container bsPrefix='landing-rotating-card-container'>
        <RotatingCard/>
      </Container>
      <Container bsPrefix='landing-page-cards'>
        {/* Map through all availible Pages */}
        {Pages.slice(2).map((page) => (
          <MenuCard key={page.id} title={page.title} imgSrc={page.url} imgAlt={page.imgAlt} description={page.description} buttonText={page.buttonText} link={page.link} />
        ))}
      </Container>
    </PageLayout>
  )
}