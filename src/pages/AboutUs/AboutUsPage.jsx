import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { PeopleCard } from '../../UI/PeopleCard/PeopleCard'
import { People } from '../../components/Lists/people'
import { Container } from 'react-bootstrap'
import './aboutus.css'

export const AboutUsPage = () => {
  return (
    <PageLayout>
      <h1>About Us</h1>
      <Container bsPrefix='aboutus-top-container'>
        <img src='src/images/nic_hedlund.jpg' imgAlt='NIC Hedlund' className='aboutus-top-img'/>
      </Container>
      <p>This is an intro to U I CDA and the department</p>
    </PageLayout>
  )
}
