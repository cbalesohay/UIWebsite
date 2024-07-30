import React from 'react'
import { useEffect } from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Container } from 'react-bootstrap'
import { People } from '../../components/Lists/people'
import { PeopleCard } from '../../UI/PeopleCard/PeopleCard'
import { ScrollToTop } from '../../components/ScrollToTop/ScrollToTop'
import Image from 'react-bootstrap/Image';
import './ourteampage.css'

export const OurTeamPage = () => {
  
  return (
    <>
        <PageLayout>
          <ScrollToTop/>
          {/* <h1 className='team-title-text'>OUR TEAM</h1> */}
          <Container fluid style={{padding: '0px', position: 'relative'}}>
            <Image style={{width: '100%', maxHeight: '600px', minHeight: '330px', objectFit: 'cover'}} src='src/images/General/group-photo-bootcamp-2024.jpeg' alt='NIC Hedlund' fluid/>
            <h1 className='picture-text-style'>Our Team</h1>
          </Container>
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
