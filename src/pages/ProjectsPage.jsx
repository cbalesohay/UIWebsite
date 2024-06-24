import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { Card } from '../UI/Card'
import { Projects } from '../components/projects'
import './projectpage.css'

export const ProjectsPage = () => {
  return (
      <PageLayout>
        <h1>Project Page</h1>
        <div className='project-layout'>
          {/* Map through all availible Projects availible */}
          {Projects.map((project, index) => (
            <Card key={index} imgSrc={project.url} imgAlt={project.altImage} title={project.title} description={project.description} buttonText={project.buttonText} link={project.link} />
          ))}
        </div>
      </PageLayout>
  )
}