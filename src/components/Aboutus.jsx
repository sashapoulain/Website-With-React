import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Aboutimg from '../img/aboutus.jpg';

const Aboutus = () => {
  return (
    <div>
     <div className='about-us'>
         <div style={{width:'50%'}}>
            <img src={Aboutimg} alt='about-us'/>
         </div>
         <div className='about-text' style={{width:'50%'}}>
               <h2>About Us</h2>
               <p>
                  We are a group of passionate and experienced professionals who have come together to create an online platform that provides the best possible service for our clients.
                  We are a group of passionate and experienced professionals who have come together to create an online platform that provides the best possible service for our clients.
                  We are a group of passionate and experienced professionals who have come together to create an online platform that provides the best possible service for our clients.
                  We are a group of passionate and experienced professionals who have come together to create an online platform that provides the best possible service for our clients.
                  We are a group of passionate and experienced professionals who have come together to create an online platform that provides the best possible service for our clients.
                  have come together to create an online platform that provides the best possible service for our clients.
               </p>
         </div>
     </div>
    </div>
  )
}

export default Aboutus
