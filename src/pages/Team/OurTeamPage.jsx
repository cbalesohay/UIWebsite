import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Container } from 'react-bootstrap'
import { People } from '../../components/Lists/people'
import { PeopleCard } from '../../UI/PeopleCard/PeopleCard'
import './ourteampage.css'

export const OurTeamPage = () => {
  return (
    <>
        <PageLayout>
            <h1>Meet out Team</h1>
            <h4>Full-Time Staff</h4>
            <Container bsPrefix="ourteam-cards">
            {/* Map through all Full-Time People */}
            {People.slice(0, 5).map((person) => (
                <PeopleCard key={person.id} imgSrc={person.photo} imgAlt={person.imgAlt} title={person.title} name={person.name} position={person.position} description={person.decription}/>
            ))}
            </Container>
            <br></br>
            <h4>Students</h4>
            <Container bsPrefix="ourteam-cards">
            {/* Map through all Undergrade People */}
            {People.slice(6).map((person) => (
                <PeopleCard key={person.id} imgSrc={person.photo} imgAlt={person.imgAlt} title={person.title} name={person.name} position={person.position} description={person.decription}/>
            ))}
            </Container>
        </PageLayout>
    </>
  )
}
