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
      <p>This is an intro to U I CDA and the department</p>
      <br></br>
      <h1>Meet Our People</h1>
      <p>Meet the people who make this place whole</p>
      <Container bsPrefix="about-page-cards">
        {/* Map through all available People */}
        {People.map((person) => (
          <PeopleCard key={person.id} imgSrc={person.photo} imgAlt={person.imgAlt} title={person.title} name={person.name} description={person.decription}/>
        ))}
      </Container>
    </PageLayout>
  )
}
