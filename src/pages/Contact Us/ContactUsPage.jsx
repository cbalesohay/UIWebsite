import React from 'react'
import { PageLayout } from '../../components/PageLayout'
import { People } from '../../components/people'
import './contactus.css'

export const ContactUsPage = () => {
  return (
    <PageLayout>
      <h1>Contact Us</h1>
      <form className='form-container'>
        <select>
          {People.map((p, index) => (
            <option key={index} value={p.name}>{p.name}</option>
          ))}
        </select>
        <input placeholder='First Name'></input>
        <input placeholder='Last Name'></input>
        <textarea placeholder='Message'></textarea>
        <button>Submit Form</button>
      </form>
    </PageLayout>
  )
}


