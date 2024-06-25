import React from 'react'
import { PageLayout } from '../../components/Page Layout/PageLayout'
import { ProjectCard } from '../../UI/ProjectCard/ProjectCard'
import { Projects } from '../../components/Lists/projects'
import './projectpage.css'

export const ProjectsPage = () => {
  return (
      <PageLayout>
        <h1>Project Page</h1>
        <div className='project-layout'>
          {/* Map through all availible Projects */}
          {Projects.map((project, index) => (
            <ProjectCard key={index} imgSrc={project.url} imgAlt={project.altImage} title={project.title} description={project.description} buttonText={project.buttonText} link={project.link} />
          ))}
        </div>
      </PageLayout>
  )
}