import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { People } from '../../components/Lists/people'
import './contactus.css'

export const ContactUsPage = () => {
  return (
    <PageLayout>
      <h1>Contact Us</h1>
      <div className="container">
        <form>
          <div className="input-group">
            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">Contacts</label>
              <select class="form-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                {/* Map through all availible Contacts */}
                {People.map((p, index) => (
                  <option key={index} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>
            <div className="form-floating">
              <input type='name' id='fname' className='form-control' placeholder='First Name'/>
              <label for='fname'>First Name</label>
            </div>
            <div className="form-floating">
              <input type='name' id='lname' className='form-control' placeholder='Last Name'/>
              <label for='lname'>Last Name</label>
            </div>
          </div>
          <div className="form-floating">
            <input type='email' id='email' className='form-control' placeholder='Place Email Here'/>
            <label for='email'>Email</label>
          </div>
          <div className="form-floating">
            <textarea type='text' id='text' className='form-control' placeholder='Enter Text Here'/>
            <label for='text'>Enter Text here</label>
          </div>
          <button className='btn submit-btn'>Submit</button>
        </form>
      </div>
    </PageLayout>
  )
}


