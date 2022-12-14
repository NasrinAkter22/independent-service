import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/'>Expert <span className='text-danger'>Doctors</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/services'>Services</Nav.Link>
      <Nav.Link as={Link} to='/expert'>Experts</Nav.Link>
      <Nav.Link as={Link} to='/bloge'>Bloge</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to='/about'>About</Nav.Link>
      <Nav.Link eventKey={2}  as={Link} to='/login'>
        Login
      </Nav.Link>
      <Nav.Link eventKey={2}  as={Link} to='/SignUp'>
        Sign Up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;