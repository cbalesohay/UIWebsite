import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import './contactform.css'

export const ContactForm = () => {
  return (
    <>
      <Form className='contact-form-container'>
        <FloatingLabel className="" label='First Name' controlId="floatingInput">
          <Form.Control type='name' className='form-control' bsPrefix='contact-input' placeholder='First Name' />
        </FloatingLabel>

        <FloatingLabel className="" label='Last Name' controlId="floatingInput">
          <Form.Control type='name' className='form-control' bsPrefix='contact-input' placeholder='Last Name' />
        </FloatingLabel>

        <FloatingLabel className="" label='Email' controlId="floatingInput">
          <Form.Control type='email' className='form-control' bsPrefix='contact-input' placeholder='Place Email Here'/>
        </FloatingLabel>

        <FloatingLabel className="" label='Enter Text Here' controlId="floatingTextarea">
          <Form.Control style={{height: '125px'}} as='textarea' type='text'  className='form-control mb-2' bsPrefix='contact-input' placeholder='Enter Text Here' aria-label="With textarea"/>
        </FloatingLabel>
        <Button bsPrefix='btn submit-btn mb-2' type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}
