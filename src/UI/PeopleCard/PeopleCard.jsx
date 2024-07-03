import React from 'react'
import './peoplecard.css'
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

export const PeopleCard = ({imgSrc, imgAlt, title, name, description}) => {
  return (
    <>
      {/* Bootstrap Card Layout */}
      <Card style={{width: '25rem' , height: '30rem'}} className='card' bsPrefix='card-container'>
        {/**
       * If image and alt are unavailible, the placeholder animation = true
       */}
        {(!imgSrc && !imgAlt) ?
        <Placeholder>
          <Card.Img variant="top" style={{height: '60%'}} src="holder.js/100px180" />
        </Placeholder>
        :
        <Card.Img variant="top" style={{height: '60%'}} bsPrefix='card-img' src={imgSrc} alt={imgAlt} />
      }
        <Card.Body>
          {/**
          * If title and name are unavailible, the placeholder animation = true
          */}
          {(!title | !name) ?
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            :
            <Card.Title bsPrefix='people-card-title'>
              {title + name}
            </Card.Title>
        }
          <Card.Text>
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
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}