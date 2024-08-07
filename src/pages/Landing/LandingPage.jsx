import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Pages } from '../../components/Lists/pages'
import { SpotlightCard } from '../../UI/SpotlightCard/SpotlightCard'
import { MenuCard } from '../../UI/MenuCard/MenuCard'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import './landingpage.css'


export const LandingPage = () => {
  const buttonContainerStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    paddingLeft: '20%',
    paddingBottom: '20px'
  }
  const buttonStyle = {
    border: '2px solid rgb(94, 72, 255)',
    borderRadius: '0px',
    boxShadow: 'inset 0 0 0 0 #5E48FF',
    borderColor: '#5E48FF',
    width: '200px'
  }
  return (
    <PageLayout>
      <Container bsPrefix='landing-rotaing-image-container'>
        <SpotlightCard/>
      </Container>
        
      <Container fluid bsPrefix='landing-intro-text-container'>
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
          <Col style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <p className='landing-intro-text2'>We Are Unique</p>    
          </Col>
        </Row>
        <Row>
          <Col style={buttonContainerStyle}>
            <Link to='/AboutUs'>
              <Button style={buttonStyle} type='submit' value='submit' bsPrefix='btn btn-slide-animation btn-slide-animation-lupine'>Find Out Why  <FaArrowRight size={22} /></Button>
            </Link>
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