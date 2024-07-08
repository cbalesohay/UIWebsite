import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'
import Spinner from 'react-bootstrap/Spinner'
import './projectcard.css'

export const ProjectCard = ({imgSrc, imgAlt, title, description, buttonText, link}) => {
  return (
    <>
      {/* Bootstrap Card Layout */}
      <Card style={{ width: '25rem', height: '30rem'}} bsPrefix='card project-card-container'>
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
          <Card.Text>
            {description}
          </Card.Text>
        }
        </Card.Body>
        <Card.Footer bsPrefix='footer-project-card'>
          {/**
           * If buttonText is unavailible, the placeholder animation = true
           */}
          {(!buttonText && !link) ?
          <Button variant="disabled secondary" className='col-3' bsPrefix='btn project-btn' aria-hidden="true">
            <Spinner animation="border" size='sm' role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Button>
          :
          <Button bsPrefix='btn project-btn' type='submit' value='submit' href={link}>{buttonText}</Button>
        }
        </Card.Footer>
        
      </Card>
    </>
  );
}