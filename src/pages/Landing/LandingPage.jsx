import React from 'react'
import { useEffect } from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Pages } from '../../components/Lists/pages'
import { SpotlightCard } from '../../UI/SpotlightCard/SpotlightCard'
import { MenuCard } from '../../UI/MenuCard/MenuCard'
import { Button, Container } from 'react-bootstrap'
import './landingpage.css'


export const LandingPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout>
        <h1 className='landing-title-text'>UNIVERSITY OF IDAHO DEPARTMENT OF COMPUTER SCIENCE IN COEUR D'ALENE</h1>    
      <Container bsPrefix='landing-rotaing-image-container'>
        <SpotlightCard/>
      </Container>
      <Container style={{justifyContent: 'center', alignItems: 'center'}} bsPrefix='landing-intro-text-container'>
        <p className='landing-intro-title-text'>*Change*</p>
        <p className='landing-intro-text'>The need for manufacturing automation engineers and programmers is growing at a rapid rate. The Center for Intelligent Industrial Robotics (CIR) will serve as a entity to foster faculty and student collaboration between cross-disciplines, applied to a host of applications from manufacturing to agriculture. the Center is providing a focus for attracting research grant and other external funding to build the University of Idaho Vandal Robotics Program. The University of Idaho Computer Science, Mechanical Engineering and Electrical Engineering Programs are building a 21st century program with equal attention to new software paradigms such as AI (including machine learning) and PC programming in conjunction with industrial automation and robotics. We currently have 8 robotic labs across all three main campuses, Coeur d'Alene, Moscow, and Idaho Falls. There are no comparable robotics programs in the Western US. We are Unique.</p>  
        <Button style={{backgroundColor: '#5e48FF', width: '120px', height: '40px', borderRadius: '5px', justifyContent: 'end', textAlign: 'center', margin: '5px'}} href='/AboutUs'>Learn More</Button>
      </Container>
      <Container bsPrefix='landing-page-cards-container'>
        {/* Map through all availible Pages */}
        {Pages.slice(3).map((page) => (
          <MenuCard key={page.id} title={page.title} imgSrc={page.url} imgAlt={page.imgAlt} description={page.description} buttonText={page.buttonText} link={page.link} />
        ))}
      </Container>
    </PageLayout>
  )
}