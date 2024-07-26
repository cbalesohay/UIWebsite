import React from 'react'
import { useEffect } from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Button, Container } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa6";
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import './aboutus.css'

export const AboutUsPage = () => {
  // useEffect(() => {
  //   // Scroll to the top when the component mounts
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <PageLayout>
      {/* <h1 className='about-title-text'>ABOUT US</h1> */}
      <Container fluid style={{padding: '0px', position: 'relative'}}>
        <Image style={{width: '100%', maxHeight: '600px', minHeight: '330px', objectFit: 'cover'}} src='src/images/General/nic_hedlund.jpg' alt='NIC Hedlund' fluid/>
        <h1 className='about-text-style'>ABOUT US</h1>
      </Container>
      <Container style={{textAlign: 'start', paddingBottom: '10px', paddingTop: '10px'}}>
        <p className='aboutus-main-text'>The need for manufacturing automation engineers and programmers is growing at a rapid rate. The Center for Intelligent Industrial Robotics (CIIR) will serve as a entity to foster faculty and student collaboration between cross-disciplines, applied to a host of applications from manufacturing to agriculture. The Center is providing a focus for attracting research grant and other external funding to build the University of Idaho Vandal Robotics Program. The University of Idaho Computer Science, Mechanical Engineering and Electrical Engineering Programs are building a 21st century program with equal attention to new software paradigms such as AI (including machine learning) and PC programming in conjunction with industrial automation and robotics. We currently have 8 robotic labs across all three main campuses, Coeur d'Alene, Moscow, and Idaho Falls. There are no comparable robotics programs in the Western US. We are Unique.</p>
      </Container>
      <Container style={{textAlign: 'end', paddingBottom: '10px'}}>
        <Link to='/Team'>
          <Button style={{borderColor: '#5E48FF', backgroundColor: '#5E48FF', color: '#FFFFFF', width: '140px'}} type='submit' value='submit' bsPrefix='btn learn-more-button-aboutus'>View our staff!  <FaArrowRight /></Button>
        </Link>
      </Container>
    </PageLayout>
  )
}
