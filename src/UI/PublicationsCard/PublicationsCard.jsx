import React from 'react'
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'
import Spinner from 'react-bootstrap/Spinner'
import { Button } from 'react-bootstrap'
import './publicationscard.css'

export const PublicationsCard = ({name, authors, description, location, link}) => {
  return (
    <>
        <Card style={{width: '35rem' , height: 'fit-content', margin: '10px', padding: '5px', justifyContent: 'center', borderColor: '#191919', borderRadius: '0px'}} bsPrefix='card publications-card-container'>
            <Card.Body>
                <Card.Title style={{fontWeight: '900', fontSize: '20px'}}>{name}</Card.Title>
                <Card.Text style={{fontWeight: '700', fontSize: '15px', textAlign: 'start'}}>
                {description}
                </Card.Text>
                <Card.Text style={{textAlign: 'start', fontSize: '15px'}}>
                    Authors: {authors}
                </Card.Text>
                <Card.Text style={{textAlign: 'start', fontSize: '15px'}}>
                {location}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{textAlign: 'end', bottom: '10px', textDecoration: 'none', paddingBottom: '5px', paddingRight: '5px'}} bsPrefix='footer'>
                <Button style={{border: '2px solid rgb(241, 179, 0)',borderRadius: '0px', boxShadow: 'inset 0 0 0 0 #F1B300', borderColor: '#F1B300', width: '200px'}} bsPrefix='btn btn-slide-animation btn-slide-animation-pride-gold' type='submit' value='submit' href={link}>Article</Button>
            </Card.Footer>
        </Card>
    </>
  )
}