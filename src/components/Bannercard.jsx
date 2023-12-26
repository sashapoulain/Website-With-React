import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

const Bannercard = () => {
  return (
    <div>
      <Card className="text-center mt-5 mb-5 border-0">
      {/* <Card.Header>asdf</Card.Header> */}
      <Card.Body>
         <blockquote className='blockquote mb-0'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
            sed dapibus dae. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius
            </p>
            <footer className='blockquote-footer'>
               Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
         </blockquote>
      </Card.Body>
      </Card>
      <Container className='text-center'>
         <Row className="justify-content-center">
         <div className='col-sm-6 col-xl-6'>
            <Card className='cardy rounded-0'>
              <h2>Go For Hike</h2>
               <Card.Body style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
            sed dapibus dae.</Card.Body>
            </Card>
         </div>
         <div className='col-sm-6 col-xl-6 text-right'>
            <Card className='cardy rounded-0'>
            <h2>Lost in Small Street</h2>
            <Card.Body style={{textAlign: 'right'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
            sed dapibus dae.</Card.Body>
            </Card>
         </div>
         </Row>
      </Container>
    </div>
  )
}

export default Bannercard
