import React from 'react'
import { PageLayout } from '/src/components/PageLayout/PageLayout'
import { Container } from 'react-bootstrap'
import './aquifer.css'

export const Aquifer = () => {
  return (
    <>
        <PageLayout>
          <Container>
            <h1>Aquifer</h1>
            <img src='/src/images/aquiferpump.jpg' alt='Aquifer Photo' className='aquifer-img'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, impedit culpa, praesentium est aspernatur alias recusandae id porro dolorum labore sed ratione? Rerum dignissimos quos, accusantium officiis doloribus nulla quas.</p>
          </Container>
        </PageLayout>
    </>
  )
}
