import React from 'react'
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'
import Spinner from 'react-bootstrap/Spinner'
import './publicationscard.css'
import { Button } from 'react-bootstrap'

export const PublicationsCard = ({name, authors, description, location, link}) => {
  return (
    <>
        <Card style={{width: '35rem' , height: '15rem', margin: '10px', padding: '5px', borderColor: 'none', borderRadius: '10px', border: '0', justifyContent: 'center'}} bsPrefix='card people-card-container'>
            <Card.Body>
                <Card.Title style={{fontWeight: '900'}}>{name}</Card.Title>
                <Card.Text style={{fontWeight: '700', textAlign: 'start'}}>
                {description}
                </Card.Text>
                <Card.Text style={{textAlign: 'start'}}>
                    Authors: {authors}
                </Card.Text>
                <Card.Text style={{textAlign: 'start', fontSize: '15px'}}>
                {location}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{textAlign: 'end', bottom: '5px'}} bsPrefix='footer-publications-btn'>
                <Button className='col-2'  aria-hidden="true" href={link}>Link</Button>
            </Card.Footer>
        </Card>
    </>
  )
}