import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { People } from '../../components/Lists/people'
import './contactus.css'

export const ContactUsPage = () => {
  return (
    <PageLayout>
      <h1>Contact Us</h1>
      <Form className='contact-form-container'>
        <FloatingLabel controlId='floatingSelectedGrid' label='Contacts'>
          <Form.Select size='lg' aria-label="Default select example" className="form-select" bsPrefix='form-contact-select' id='inputGroupSelect01'>
            <option selected>Recipient...</option>
            {/* Map through all availible Contacts */}
            {/* Maybe add preview of contact email greyed out next to name */}
            {/* Fix Drop down hover color */}
            {People.map((p, index) => (
              <option key={index} value={p.name}>{p.name}</option>
            ))}
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel className="" label='First Name' controlId="floatingInput">
          <Form.Control type='name' id='fname' className='form-control' bsPrefix='contact-input' placeholder='First Name' />
        </FloatingLabel>

        <FloatingLabel className="" label='Last Name' controlId="floatingInput">
          <Form.Control type='name' id='lname' className='form-control' bsPrefix='contact-input' placeholder='Last Name' />
        </FloatingLabel>

        <FloatingLabel className="" label='Email' controlId="floatingInput">
          <Form.Control type='email' id='email' className='form-control' bsPrefix='contact-input' placeholder='Place Email Here'/>
        </FloatingLabel>

        <FloatingLabel className="" label='Enter Text Here' controlId="floatingTextarea">
          <Form.Control style={{height: '125px'}} as='textarea' type='text' id='text'  className='form-control mb-2' bsPrefix='contact-input' placeholder='Enter Text Here' aria-label="With textarea"/>
        </FloatingLabel>

        <Button bsPrefix='btn submit-btn mb-2' type="submit">
          Submit
        </Button>
      </Form>
    </PageLayout>
  )
}


