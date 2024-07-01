import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { People } from '../../components/Lists/people'
import './contactus.css'

export const ContactUsPage = () => {
  return (
    <PageLayout>
      <h1>Contact Us</h1>
      <Form className='contact-form-container'>
        <Form.Group className="input-group">
          <Form.Label class="input-group-text" for="inputGroupSelect01">Contacts</Form.Label>
          <Form.Select size='lg' aria-label="Default select example" className="form-select form-contact-select" id='inputGroupSelect01'>
            <option selected>Recipient...</option>
            {/* Map through all availible Contacts */}
            {/* Maybe add preview of contact email greyed out next to name */}
            {/* Fix Drop down hover color */}
            {People.map((p, index) => (
              <option key={index} value={p.name}>{p.name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="form-floating">
          <Form.Control type='name' id='fname' className='form-control contact-input' placeholder='First Name' />
          <Form.Label for='fname'>First Name</Form.Label>
        </Form.Group>

        <Form.Group className="form-floating">
          <Form.Control type='name' id='lname' className='form-control contact-input' placeholder='Last Name' />
          <Form.Label for='lname'>Last Name</Form.Label>
        </Form.Group>

        <Form.Group className="form-floating" controlId="formBasicEmail">
          <Form.Control type='email' id='email' className='form-control contact-input' placeholder='Place Email Here'/>
          <Form.Label>Email</Form.Label>
        </Form.Group>

        <Form.Group className="form-floating mb-2">
          <Form.Control as='textarea' type='text' id='text'  className='form-control contact-input text-area-contact' placeholder='Enter Text Here' aria-label="With textarea"/>
          <Form.Label>Enter Text Here</Form.Label>
        </Form.Group>

        <Button variant="primary btn submit-btn mb-2" type="submit">
          Submit
        </Button>
      </Form>
    </PageLayout>
  )
}


