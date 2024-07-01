import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { ProjectCard } from '../../UI/ProjectCard/ProjectCard'
import { Projects } from '../../components/Lists/projects'
import './projectpage.css'

export const ProjectsPage = () => {
  return (
      <PageLayout>
        <h1>Project Page</h1>
        <p>This should be an introduction to the project page *Still need to figure out layout for this*</p>
        <div className='project-layout'>
          {/* Map through all availible Projects */}
          {Projects.map((project) => (
            <ProjectCard key={project.id} imgSrc={project.url} imgAlt={project.altImage} title={project.title} description={project.description} buttonText={project.buttonText} link={project.link} />
          ))}
        </div>
      </PageLayout>
  )
}