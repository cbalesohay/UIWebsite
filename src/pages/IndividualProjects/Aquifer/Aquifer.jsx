import React from 'react'
import { PageLayout } from '/src/components/PageLayout/PageLayout'
import { Container, Button } from 'react-bootstrap'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './aquifer.css'

export const Aquifer = () => {
  return (
    <>
        <PageLayout>
          <Container>
            <h1>Aquifer</h1>
            <img src='/src/images/aquiferpump.jpg' alt='Aquifer Photo' className='aquifer-img'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, impedit culpa, praesentium est aspernatur alias recusandae id porro dolorum labore sed ratione? Rerum dignissimos quos, accusantium officiis doloribus nulla quas.</p>
            <Container style={{textAlign: 'start', paddingBottom: '10px'}}>
              <Link to='/Projects'>
                <Button style={{border: '2px solid rgb(94, 72, 255)',borderRadius: '0px', boxShadow: 'inset 0 0 0 0 #5E48FF', borderColor: '#5E48FF', width: '200px'}} type='submit' value='submit' bsPrefix='btn btn-slide-animation btn-slide-animation-lupine'><FaArrowLeft size={22} /> Back to Projects</Button>
              </Link>
            </Container>
          </Container>
        </PageLayout>
    </>
  )
}
