import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import Logo from '../img/logosscleanwh.png'
import Turkish from '../img/turkey.png'
import English from '../img/united-kingdom.png'
import { faBell, faEarthAmericas, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect  expand='lg' className='navbar-top justify-content-between' fixed='top'>
        <Container>
          <Navbar.Brand href='#home' className='d-flex justify-content-center'>
            <img className='d-inline-block align-top' alt='logo' src={Logo} width='75' height='75' style={{objectFit: 'cover'}}/>
            <div style={{fontSize: '2rem' , letterSpacing: '4px', color: 'white', margin: 'auto'}}>
              <strong>
              BIKEY
              </strong>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mx-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#about'>About Us</Nav.Link>
              <NavDropdown title='Product' id='collapsible-nav-dropdown'>
                <NavDropdown.Item style={{color:'black'}} href='#action/3.1'>Product 1</NavDropdown.Item>
                <NavDropdown.Item style={{color:'black'}} href='#action/3.2'>Product 2</NavDropdown.Item>
                <NavDropdown.Item style={{color:'black'}} href='#action/3.3'>Product 3</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item style={{color:'black'}} href="#action/3.4">Seperated Products 4</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#blog'>Blog</Nav.Link>
              <Nav.Link href='#contact'>Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
              <FontAwesomeIcon icon={faHeart} style={{color: 'white', fontWeight: '200'}}/>
              </Nav.Link>
              <NavDropdown title={
                <span>
                  <FontAwesomeIcon  icon={faUser} style={{color: 'white', fontWeight: '200'}}/>
                </span>
              }>
                 <NavDropdown.Item href='#profile' style={{textTransform: 'capitalize' ,color: 'black'}}> Profile</NavDropdown.Item>
                <NavDropdown.Item href='#messages' style={{textTransform: 'capitalize',  color: 'black'}}> Messages</NavDropdown.Item>
                <NavDropdown.Divider></NavDropdown.Divider>
                <NavDropdown.Item href='#settings' style={{textTransform: 'capitalize',  color: 'black'}}> Settings</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={
                <span>
                  <FontAwesomeIcon icon={faBell} style={{color: 'white', fontWeight: '200'}}/>
                </span>
              }>
                 <NavDropdown.Item href='#' style={{ textTransform: 'capitalize' ,  color: 'black'}}>1 Unread message</NavDropdown.Item>
                <NavDropdown.Item href='#' style={{ textTransform: 'capitalize', color: 'black' }}>Push Notifications</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={
                <span>
                  <FontAwesomeIcon icon={faEarthAmericas} style={{color:'white', fontWeight: '200'}} />
                </span>
              }>
               <NavDropdown.Item style={{color:'black'}} href='#turkish'>
                  <img src={Turkish} style={{ marginRight: '10px' }}  alt='turkish'/>
                  Türkçe</NavDropdown.Item>
                <NavDropdown.Item style={{color:'black'}} href='#english'>
                  <img src={English} style={{ marginRight: '10px' }} alt='english' />
                  English
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
