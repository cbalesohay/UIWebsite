import React from 'react'
import { useEffect } from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Container } from 'react-bootstrap'
import './aboutus.css'

export const AboutUsPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout>
      <h1>About Us</h1>
      <Container bsPrefix='aboutus-top-container'>
        <img src='src/images/nic_hedlund.jpg' alt='NIC Hedlund' className='aboutus-top-img'/>
      </Container>
      <p>This is an intro to U I CDA and the department</p>
      <Container style={{textAlign: 'start'}}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem quisquam, velit placeat explicabo eius veritatis tempore! Repudiandae inventore excepturi commodi aliquid nulla iure, sint adipisci ipsa rem suscipit quae.</p>
      </Container>
    </PageLayout>
  )
}
