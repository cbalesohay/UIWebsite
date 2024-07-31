import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { ProjectCard } from '../../UI/ProjectCard/ProjectCard'
import { Projects } from '../../components/Lists/projects'
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import './projectpage.css'

export const ProjectsPage = () => {
  const topImageStyle = {
    width: '100%',
    maxHeight: '600px',
    minHeight: '330px',
    objectFit: 'cover'
  }
  return (
      <PageLayout>
        {/* <h1 className='project-title-text'>PROJECTS</h1> */}
        <Container fluid style={{padding: '0px', position: 'relative'}}>
          <Image style={topImageStyle} src='src/images/General/weather_rack_on_Tubbs_Hill.jpg' alt='View' fluid/>
          <h1 className='picture-text-style'>PROJECTS</h1>
        </Container>
        <Container bsPrefix='project-intro-container'>
        {/* <p>This should be an introduction to the project page *Still need to figure out layout for this*</p> */}
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