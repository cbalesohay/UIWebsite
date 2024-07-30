import React from 'react'
import { useEffect } from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Pages } from '../../components/Lists/pages'
import { SpotlightCard } from '../../UI/SpotlightCard/SpotlightCard'
import { MenuCard } from '../../UI/MenuCard/MenuCard'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa6";
import './landingpage.css'
import { Link } from 'react-router-dom'


export const LandingPage = () => {
  // useEffect(() => {
  //   // Scroll to the top when the component mounts
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <PageLayout>
      <Container bsPrefix='landing-main-container'>
        <Container bsPrefix='landing-rotaing-image-container'>
          <SpotlightCard/>
        </Container>
        
        <Container bsPrefix='landing-intro-text-container'>
        <Row>
          <Col>
            <h1 className='landing-title-text'>Center for Intelligent Industrial Robotics (CIIR)</h1>
          </Col>
        </Row>
        <Row>
          <Col style={{justifyContent: 'center', alignItems: 'center', display: 'flex', paddingRight: '20%'}}>
            <h3 className='landing-intro-text1'>Couer d'Alene</h3>    
          </Col>
        </Row>
        <Row>
          <Col style={{justifyContent: 'center', alignItems: 'center', display: 'flex', paddingRight: ''}}>
            <p className='landing-intro-text2'>We Are Unique</p>    
          </Col>
        </Row>
        <Row>
          <Col style={{justifyContent: 'center', alignItems: 'center', display: 'flex', paddingLeft: '20%'}}>
            <Link to='/AboutUs'>
              <Button style={{border: '2px solid rgb(94, 72, 255)',borderRadius: '0px', boxShadow: 'inset 0 0 0 0 #5E48FF', borderColor: '#5E48FF', width: '200px'}} type='submit' value='submit' bsPrefix='btn btn-slide-animation btn-slide-animation-lupine'>Find Out Why  <FaArrowRight /></Button>
            </Link>
          </Col>
        </Row>
        </Container>

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