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
      <RotatingCard />
      <div className='page-cards'>
        {/* Map through all availible Pages */}
        {Pages.map((page, index) => (
          <MenuCard key={index} title={page.title} imgSrc={page.url} imgAlt={page.imgAlt} />
        ))}
      </div>
    </PageLayout>
  )
}