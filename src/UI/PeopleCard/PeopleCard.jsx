import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'
import Spinner from 'react-bootstrap/Spinner'
import './peoplecard.css'

export const PeopleCard = ({imgSrc, imgAlt, title, name, description, position}) => {
  const [changeCard, setChangeCard] = useState(false);

  /**
   * Function to handle Card change
   */
  const handleClick = () => {
    setChangeCard(!changeCard)
  }

  return (
    <>
      {/* Bootstrap Card Layout */}
      <Card onClick={() => setChangeCard(!changeCard)} style={{width: '20rem' , height: '25rem', margin: '10px', padding: '0px', borderColor: 'none', cursor: 'pointer', borderRadius: '0', border: '0', justifyContent: 'center'}} className='card' bsPrefix='people-card-container'>
        {/**
       * If image and alt are unavailible, the placeholder animation = true
       */}
       {(changeCard) ?
        ''
        :
        (!imgSrc) ?
          <Placeholder style={{height: '60%'}} bsPrefix='placeholder-card-img'>
            <Spinner animation="border" variant='primary' role="status" style={{marginTop: '125px' }}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            {/* <Card.Img variant="top" style={{height: '60%'}} src="holder.js/100px180" /> */}
          </Placeholder>
          :
          <Card.Img bsPrefix='people-card-img' src={imgSrc} alt={imgAlt} />
      }
        <Card.Body>
          {/**
          * If title and name are unavailible, the placeholder animation = true
          */}
          {(!title && !name) ?
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            :
            <Card.Title bsPrefix='people-card-title'>
              {title + name}
            </Card.Title>
        }
          {/**
          * If title and name are unavailible, the placeholder animation = true
          */}
          {(!changeCard) ?
              (!position) ?
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
              :
              <Card.Title bsPrefix='people-card-position'>
                {position}
              </Card.Title>
            :
              (!position) ?
                <Placeholder as={Card.Title} animation="glow" style={{margin: '0px'}}>
                  <Placeholder xs={4} />
                </Placeholder>
                :
                <Card.Title bsPrefix='people-card-position'>
                  {position}
                </Card.Title>
           
        }
          <Card.Text>
            {/**
            * If description is unavailible, the placeholder animation = true
            */}
            {(!changeCard) ?
            ''
            :
            (!description) ?
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