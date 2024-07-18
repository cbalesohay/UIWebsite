import React from 'react'
import { useEffect } from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Container } from 'react-bootstrap'
import { People } from '../../components/Lists/people'
import { PeopleCard } from '../../UI/PeopleCard/PeopleCard'
import './ourteampage.css'

export const OurTeamPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <PageLayout>
            <h1 className='team-title-text'>OUR TEAM</h1>
            <Container bsPrefix="ourteam-cards">
            {/* Map through all Full-Time People */}
            {People.map((person) => (
                <PeopleCard key={person.id} imgSrc={person.photo} imgAlt={person.imgAlt} title={person.title} firstName={person.firstName} lastName={person.lastName} position={person.position} description={person.decription} email={person.email}/>
            ))}
            </Container>
        </PageLayout>
    </>
  )
}
