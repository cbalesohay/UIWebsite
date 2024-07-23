import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Spinner from 'react-bootstrap/Spinner';
import './menucard.css'

export const MenuCard = ({imgSrc, imgAlt, title, description, buttonText, link}) => {
  return (
    <>
      {/* Bootstrap Card Layout */}
      <Card style={{ width: '25rem', height: '30rem', margin: '20px', border: 'none', backgroundColor: '#FFFFFF', borderRadius: '0px', boxShadow: '5px 5px 5px rgb(255, 255, 255, .3)'}}>
          {/**
           * If image and alt are unavailible, the placeholder animation = true
           */}
          {(!imgSrc) ?
          <Placeholder style={{height: '60%'}}>
            <Spinner animation="border" variant='primary' role="status" style={{marginTop: '125px' }}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            {/* <Card.Img variant="top" style={{height: '60%'}} src=''/> */}
          </Placeholder>
          :
          <Card.Img variant="top" style={{height: '60%', width: '100%'}} src={imgSrc} alt={imgAlt} bsPrefix='menu-card-img'/>
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
          <Card.Title style={{fontSize: '30px'}}>
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
          <Card.Text style={{minHeight: '60px'}}>
            {description}
          </Card.Text>
        }
        </Card.Body>
        <Card.Footer bsPrefix='footer-menu-btn'>
          {/**
           * If buttonText & link are unavailible, the placeholder animation = true
           */}
          {(!buttonText && !link) ?
          <Button variant="disabled secondary" className='col-2' bsPrefix='btn menu-btn' aria-hidden="true">
            <Spinner animation="border" size='sm' role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Button>
          :
          <Button bsPrefix='btn menu-btn' type='submit' value='submit' href={link}>{buttonText}</Button>
        }
        </Card.Footer>
      </Card>
    </>
  )
}