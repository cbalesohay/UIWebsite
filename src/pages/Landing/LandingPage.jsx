import React from 'react'
import { useEffect } from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Pages } from '../../components/Lists/pages'
import { SpotlightCard } from '../../UI/SpotlightCard/SpotlightCard'
import { MenuCard } from '../../UI/MenuCard/MenuCard'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './landingpage.css'


export const LandingPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout>
        <h1 className='landing-title-text'>Center for Intelligent Industrial Robotics (CIIR)</h1>    
      <Container bsPrefix='landing-rotaing-image-container'>
        <SpotlightCard/>
      </Container>
      <Container bsPrefix='landing-intro-text-container'>
        <Row>
          <Col>
            <p className='landing-intro-title-text'>*Change*</p>  
          </Col>
        </Row>
        <Row>
          <Col style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <p className='landing-intro-text'>The need for manufacturing automation engineers and programmers is growing at a rapid rate. The Center for Intelligent Industrial Robotics (CIR) will serve as a entity to foster faculty and student collaboration between cross-disciplines, applied to a host of applications from manufacturing to agriculture. the Center is providing a focus for attracting research grant and other external funding to build the University of Idaho Vandal Robotics Program. The University of Idaho Computer Science, Mechanical Engineering and Electrical Engineering Programs are building a 21st century program with equal attention to new software paradigms such as AI (including machine learning) and PC programming in conjunction with industrial automation and robotics. We currently have 8 robotic labs across all three main campuses, Coeur d'Alene, Moscow, and Idaho Falls. There are no comparable robotics programs in the Western US. We are Unique.</p>    
          </Col>
        </Row>
        <Row>
          <Col style={{justifyContent: 'end', alignItems: 'end', display: 'flex', paddingRight: '50px', marginBottom: '20px'}}>
            <Button className='col-2' style={{borderColor: '#5E48FF', backgroundColor: '#5E48FF', color: '#FFFFFF', width: '120px'}} bsPrefix='btn learn-more-button-landing' type='submit' value='submit' href='/AboutUs'>Learn More</Button>  
          </Col>
        </Row>
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