import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

const NavBar = () => (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"><Image src="holder.js/100px250" fluid /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    
      
      <div className="d-flex my-3 my-lg-0">
        <i className="fa fa-search icons mr-3"></i>
        <div id="kids">KIDS</div>
        <i className="fa fa-bell icons mx-3"></i>
        <i className="fa fa-user icons mx-3"></i>
      </div>
   
    </Navbar>
);

export default NavBar;