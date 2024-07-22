import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import './contactform.css'

export const ContactForm = () => {
  const [formData1, setFormData1] = useState('')
  const [formData2, setFormData2] = useState('')
  const [formData3, setFormData3] = useState('')
  const [formData4, setFormData4] = useState('')
  const [isSent, setIsSent] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true)
    setFormData1("")
    setFormData2("")
    setFormData3("")
    setFormData4("")
  }
  const handleChange1 = (e) => {
    setFormData1(e.target.value)
  }
  const handleChange2 = (e) => {
    setFormData2(e.target.value)
  }
  const handleChange3 = (e) => {
    setFormData3(e.target.value)
  }
  const handleChange4 = (e) => {
    setFormData4(e.target.value)
  }
  let sentMessage = 'Message Sent! We will get back to you shortly.'

  return (
    <>
      <Form className='contact-form-container' onSubmit={handleSubmit}>
        <FloatingLabel className="" label='First Name' controlId="floatingInput">
          <Form.Control onChange={handleChange1}  type='name' value={formData1} className='form-control' bsPrefix='contact-input' placeholder='First Name' />
        </FloatingLabel>

        <FloatingLabel className="" label='Last Name' controlId="floatingInput">
          <Form.Control onChange={handleChange2}  type='name' value={formData2} className='form-control' bsPrefix='contact-input' placeholder='Last Name' />
        </FloatingLabel>

        <FloatingLabel className="" label='Email' controlId="floatingInput">
          <Form.Control onChange={handleChange3}  type='email' value={formData3} className='form-control' bsPrefix='contact-input' placeholder='Place Email Here'/>
        </FloatingLabel>

        <FloatingLabel className="" label='Enter Text Here' controlId="floatingTextarea">
          <Form.Control onChange={handleChange4}  style={{height: '125px'}} as='textarea' type='text' value={formData4}  className='form-control mb-2' bsPrefix='contact-input' placeholder='Enter Text Here' aria-label="With textarea"/>
        </FloatingLabel>
        <Button bsPrefix='btn submit-btn mb-2' type="submit" onSubmit={handleSubmit}>
          Submit
        </Button>
        <div>
          {isSent ? sentMessage : null}
        </div>
      </Form>
    </>
  )
}
