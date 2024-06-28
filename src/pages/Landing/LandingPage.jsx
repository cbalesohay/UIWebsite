import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Pages } from '../../components/Lists/pages'
import { RotatingCard } from '../../UI/RotatingCard/RotatingCard'
import { MenuCard } from '../../UI/MenuCard/MenuCard'
import './landingpage.css'

export const LandingPage = () => {
  return (
    <PageLayout>
      <h1>Landing Page</h1>
      <div className='page-cards'>
        <RotatingCard/>
      </div>
      <div className='page-cards'>
        {/* Map through all availible Pages */}
        {Pages.slice(1).map((page) => (
          <MenuCard key={page.id} title={page.title} imgSrc={page.url} imgAlt={page.imgAlt} />
        ))}
      </div>
    </PageLayout>
  )
}