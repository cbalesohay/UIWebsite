import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Papers } from '../../components/Lists/papers'
import { Presentations } from '../../components/Lists/presentations'
import { PublicationsCard } from '../../UI/PublicationsCard/PublicationsCard'
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import './publications.css'


export const PublicationsPage = () => {
  const topImageStyle = {
    width: '100%',
    maxHeight: '600px',
    minHeight: '330px',
    objectFit: 'cover'
  }
  return (
    <PageLayout>
      <Container fluid style={{padding: '0px', position: 'relative'}}>
        <Image style={topImageStyle} src='src/images/AutomationPhotos/Automation-group-photo-3.jpg' alt='NIC Hedlund' fluid/>
        <h1 className='picture-text-style'>PUBLICATIONS</h1>
      </Container>
      <h3 className='sub-title-recent-pubs'>Conference Papers</h3>
      <Container bsPrefix="publications-cards-container">
        {/* Map through all availible Papers */}
        {Papers.map((paper) => (
          <PublicationsCard key={paper.id} name={paper.name} authors={paper.authors} description={paper.description} location={paper.location} link={paper.link}/>
        ))}
      </Container>
      <h3 className='sub-title-recent-pubs'>Conference Presentations</h3>
      <Container bsPrefix="publications-cards-container">
        {/* Map through all availible Presentations */}
        {Presentations.map((present) => (
          <PublicationsCard key={present.id} name={present.name} authors={present.authors} description={present.description} location={present.location} link={present.link}/>
        ))}
      </Container>
    </PageLayout>
  )
}
