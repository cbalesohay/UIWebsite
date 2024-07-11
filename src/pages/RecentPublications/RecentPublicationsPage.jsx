import React from 'react'
import { useEffect } from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Papers } from '../../components/Lists/papers'
import { Presentations } from '../../components/Lists/presentations'

export const RecentPublicationsPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout>
      <h1>Recent Publications</h1>
      <p>Take a look at some of the recent accomplishments our team has made</p>
      <h3>Conference Papers</h3>
      {/* Map through all availible Papers */}
      {Papers.map((paper) => (
            <p key={paper.id}>{paper.description}</p>
          ))}
      <h3>Conference Presentations</h3>
      {/* Map through all availible Presentations */}
      {Presentations.map((present) => (
            <p key={present.id}>{present.description}</p>
          ))}
    </PageLayout>
  )
}
