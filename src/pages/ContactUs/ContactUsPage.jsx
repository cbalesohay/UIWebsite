import React from 'react'
import { useEffect } from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { ContactForm } from '../../UI/ContactForm/ContactForm'
import { GoogleMap } from '../../UI/GoogleMap/GoogleMap'
import { Container } from 'react-bootstrap'
import './contactuspage.css'


export const ContactUsPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout>
      <h1 className='contact-title-text'>CONTACT US</h1>
      <Container>
        <ContactForm />
        <GoogleMap/>
      </Container>
    </PageLayout>
  )
}


