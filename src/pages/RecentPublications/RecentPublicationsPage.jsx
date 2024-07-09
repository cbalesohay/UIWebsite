import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Papers } from '../../components/Lists/papers'
import { Presentations } from '../../components/Lists/presentations'

export const RecentPublicationsPage = () => {
  return (
    <PageLayout>
      <h1>Recent Publications</h1>
      <p>Take a look at some of the recent accomplishments our team has made</p>
      <h3>Conference Papers</h3>
      {/* Map through all availible Papers */}
      {Papers.map((paper) => (
            <p>{paper.description}</p>
          ))}
      <h3>Conference Presentations</h3>
      {/* Map through all availible Presentations */}
      {Presentations.map((present) => (
            <p>{present.description}</p>
          ))}
    </PageLayout>
  )
}
