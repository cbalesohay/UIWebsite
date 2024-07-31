import React from 'react'
import Card from 'react-bootstrap/Card'
import CardLink from 'react-bootstrap/CardLink'
import Placeholder from 'react-bootstrap/Placeholder'
import Spinner from 'react-bootstrap/Spinner'
import Image from 'react-bootstrap/Image';
import './projectcard.css'

export const ProjectCard = ({imgSrc, imgAlt, title, description, link}) => {
  const cardLinkStyle = {
    width: '25rem',
    height: '30rem',
    cursor: 'pointer',
    textDecoration: 'none'
  }
  const cardImageStyle = {
    height: '60%',
    width: '100%',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px'
  }
  return (
    <>
      {/* <Link href={link} bsPrefix='project-link-container'> */}
        {/* Bootstrap Card Layout */}
        <CardLink href={link} style={cardLinkStyle} bsPrefix='card project-card-container'>
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
            <Image variant="top" style={cardImageStyle} src={imgSrc} alt={imgAlt}/>
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
            /**
             * this is throwing an error in browser <div> / <p> cannot go in here
             */
            <Card.Text bsPrefix='project-hover-text-change'>
              {/* <p className='project-decription-text'>{description}</p> */}
              {description}
              {/* <h1 className='hover-comment'></h1> */}
            </Card.Text>
          }
          </Card.Body>
        </CardLink>
      {/* </Link> */}
    </>
  );
}