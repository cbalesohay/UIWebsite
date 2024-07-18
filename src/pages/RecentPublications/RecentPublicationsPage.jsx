import React from 'react'
import { useEffect } from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Papers } from '../../components/Lists/papers'
import { Presentations } from '../../components/Lists/presentations'
import { Button, Container } from 'react-bootstrap'
import './recentpublications.css'

export const RecentPublicationsPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout>
      <h1 className='recent-title-text'>RECENT PUBLICATIONS</h1>
      <p>Take a look at some of the recent accomplishments our team has made</p>
      <h3>Conference Papers</h3>
      <Container style={{textAlign: 'start'}}>
        {/* Map through all availible Papers */}
        {Papers.map((paper) => (
          <div>
            <p key={paper.id}>{paper.description}</p>
            <Button href={paper.link}>Link</Button>
          </div>
        ))}
      </Container>
      <h3>Conference Presentations</h3>
      <Container style={{textAlign: 'start'}}>
        {/* Map through all availible Presentations */}
        {Presentations.map((present) => (
          <div>
            <p key={present.id}>{present.description}</p>
            <Button href={present.link}>Link</Button>
          </div>
        ))}
      </Container>
    </PageLayout>
  )
}
