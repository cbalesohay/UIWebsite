import React from 'react'
import { useEffect } from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Button, Container } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa6";
import './aboutus.css'
import { Link } from 'react-router-dom';

export const AboutUsPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout>
      <h1 className='about-title-text'>ABOUT US</h1>
      <Container bsPrefix='aboutus-top-container'>
        <img src='src/images/General/nic_hedlund.jpg' alt='NIC Hedlund' className='aboutus-top-img'/>
      </Container>
      <p>This is an intro to U I CDA and the department</p>
      <Container style={{textAlign: 'start', paddingBottom: '10px'}}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <Link to='/Team'>
          <Button style={{borderColor: '#5E48FF', backgroundColor: '#5E48FF', color: '#FFFFFF', width: '140px'}} type='submit' value='submit' bsPrefix='btn learn-more-button-aboutus'>View our staff!  <FaArrowRight /></Button>
        </Link>
      </Container>
    </PageLayout>
  )
}
