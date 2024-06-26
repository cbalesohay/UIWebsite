import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { PeopleCard } from '../../UI/PeopleCard/PeopleCard'
import { People } from '../../components/Lists/people'

export const OurPeoplePage = () => {
  return (
    <PageLayout>
      <h1>Our People</h1>
      {/* Map through all available People */}
      {People.map((person, index) => (
        <PeopleCard key={index} imgSrc={person.photo} imgAlt={person.imgAlt} title={person.title} name={person.name} description={person.decription}/>
      ))}
    </PageLayout>
  )
}
