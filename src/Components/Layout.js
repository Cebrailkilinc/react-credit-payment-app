import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Header'
import Principal from './Principal'



function Layout() {
  return (
    <>
      <Container>
        <Row >
          <Header/>           
         
        </Row>
        <Row>
          <Col><Principal/></Col>
          <Col><Principal/></Col>
        </Row>
        <Row>
          
        </Row>

      </Container>
    </>

  )
}

export default Layout