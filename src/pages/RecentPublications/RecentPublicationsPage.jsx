import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Papers } from '../../components/Lists/papers'
import { Presentations } from '../../components/Lists/presentations'
import { Button, Container } from 'react-bootstrap'
import { PublicationsCard } from '../../UI/PublicationsCard/PublicationsCard'
import Image from 'react-bootstrap/Image';
import './recentpublications.css'


export const RecentPublicationsPage = () => {
  return (
    <PageLayout>
      {/* <h1 className='recent-title-text'>RECENT PUBLICATIONS</h1> */}
      <Container fluid style={{padding: '0px', position: 'relative'}}>
        <Image style={{width: '100%', maxHeight: '600px', minHeight: '330px', objectFit: 'cover'}} src='src/images/General/nic_hedlund.jpg' alt='NIC Hedlund' fluid/>
        <h1 className='picture-text-style'>Recent Publications</h1>
      </Container>
      <p>Take a look at some of the recent accomplishments our team has made</p>
      <Container bsPrefix="ourteam-cards">
        {/* Map through all availible Papers */}
        {Papers.map((paper) => (
          <PublicationsCard key={paper.id} name={paper.name} authors={paper.authors} description={paper.description} location={paper.location}/>
        ))}
      </Container>
      <Container style={{textAlign: 'start'}}>
        <h3 className='sub-title-recent-pubs'>Conference Papers</h3>
        {/* Map through all availible Papers */}
        {Papers.map((paper) => (
          <div>
            <p key={paper.id}>{paper.description}</p>
            <Container style={{textAlign: 'end', paddingBottom: '15px'}}>
              <Button href={paper.link}>Link</Button>
            </Container>
          </div>
        ))}
      </Container>
      <Container style={{textAlign: 'start'}}>
        <h3 className='sub-title-recent-pubs'>Conference Presentations</h3>
        {/* Map through all availible Presentations */}
        {Presentations.map((present) => (
          <div>
            <p key={present.id}>{present.description}</p>
            <Container style={{textAlign: 'end', paddingBottom: '15px'}}>
              <Button href={present.link}>Link</Button>
            </Container>
          </div>
        ))}
      </Container>
    </PageLayout>
  )
}
