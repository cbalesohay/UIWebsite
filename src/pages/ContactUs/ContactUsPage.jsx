import React from 'react'
import { useEffect } from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { ContactForm } from '../../UI/ContactForm/ContactForm'
import { GoogleMap } from '../../UI/GoogleMap/GoogleMap'
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import './contactuspage.css'


export const ContactUsPage = () => {
  const topImageStyle = {
    width: '100%',
    maxHeight: '600px',
    minHeight: '330px',
    objectFit: 'cover'
  }
  return (
    <PageLayout>
      {/* <h1 className='contact-title-text'>CONTACT US</h1> */}
      <Container fluid style={{padding: '0px', position: 'relative'}}>
        <Image style={topImageStyle} src='src/images/General/View_Hedlund.jpg' alt='View' fluid/>
        <h1 className='picture-text-style'>CONTACT US</h1>
      </Container>
      <Container>
        <ContactForm />
        <GoogleMap/>
      </Container>
    </PageLayout>
  )
}


