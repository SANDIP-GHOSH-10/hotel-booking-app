import Button from 'react-bootstrap/Button';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Ghosh Hotel and Banquet</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/booking">Book Now</Nav.Link>
            <Nav.Link href="/showbooking">Show Booking</Nav.Link>
            
            
          </Nav>
          <Link to={"/login"}>
          <Button variant="outline-success">Login</Button>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
