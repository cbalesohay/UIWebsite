import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { ContactForm } from '../../UI/ContactForm/ContactForm'
import { GoogleMap } from '../../UI/GoogleMap/GoogleMap'
import './contactus.css'


export const ContactUsPage = () => {
  return (
    <PageLayout>
      <h1>Contact Us</h1>
      <ContactForm/>
      <GoogleMap/>
    </PageLayout>
  )
}


