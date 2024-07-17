import React from 'react'
import { useEffect } from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { ProjectCard } from '../../UI/ProjectCard/ProjectCard'
import { Projects } from '../../components/Lists/projects'
import './projectpage.css'
import { Container } from 'react-bootstrap'

export const ProjectsPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
      <PageLayout>
        <h1 className='project-title-text'>PROJECTS</h1>
        <Container bsPrefix='project-intro-container'>
        <p>This should be an introduction to the project page *Still need to figure out layout for this*</p>
        </Container>
        <Container bsPrefix='project-layout'>
          {/* Map through all availible Projects */}
          {Projects.map((project) => (
            <ProjectCard key={project.id} imgSrc={project.url} imgAlt={project.altImage} title={project.title} description={project.description} buttonText={project.buttonText} link={project.link} />
          ))}
        </Container>
      </PageLayout>
  )
}