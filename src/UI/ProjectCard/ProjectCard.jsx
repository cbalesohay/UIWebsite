import React from 'react'
import Card from 'react-bootstrap/Card'
import Link from 'react-bootstrap/CardLink'
import Placeholder from 'react-bootstrap/Placeholder'
import Spinner from 'react-bootstrap/Spinner'
import './projectcard.css'

export const ProjectCard = ({imgSrc, imgAlt, title, description, link}) => {
  return (
    <>
      <Link href={link} bsPrefix='project-link-container'>
        {/* Bootstrap Card Layout */}
        <Card href={link} style={{ width: '25rem', height: '30rem', cursor: 'pointer'}} bsPrefix='card project-card-container'>
          {/**
           * If image and alt are unavailible, the placeholder animation = true
           */}
          {(!imgSrc) ?
            <Placeholder style={{height: '60%'}}>
              <Spinner animation="border" variant='primary' role="status" style={{marginTop: '125px' }}>
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Placeholder>
            :
            <Card.Img variant="top" style={{height: '60%'}} src={imgSrc} alt={imgAlt} bsPrefix='project-card-img'/>
          }
          <Card.Body>
            {/**
             * If title is unavailible, the placeholder animation = true
             */}
            {(!title) ?
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              :
              <Card.Title bsPrefix='project-card-title'>
                {title}
              </Card.Title>
          }
            {/**
             * If description is unavailible, the placeholder animation = true
             */}
            {(!description) ? 
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            :
            <Card.Text bsPrefix='project-hover-text-change'>
              <p className='project-decription-text'>{description}</p>
              <h1 className='hover-comment'></h1>
            </Card.Text>
          }
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}