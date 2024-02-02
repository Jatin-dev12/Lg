import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Button} from 'react-bootstrap';
import '../../src/App.css';
import { useLocation, useNavigate } from "react-router-dom";
import Logo from '../Images/logo.png'


function Header() {
  const location = useLocation();
    const pathname = location.pathname;

    const navigate = useNavigate();

    const logoutAction = (e) => {
       
      localStorage.setItem('Login', '');
      navigate('/');
  }	
  return (
    
    <Navbar bg="light" data-bs-theme="light">
    <Container fluid>
      
    <Navbar.Brand href="#home">
    <img
              src={Logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />


          </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-end">   
        <Button variant="primary" href='#' onClick={(e) => logoutAction(e)}>Logout</Button>
          
       

    
              </Nav>
         </Navbar.Collapse>
            
    </Container>
  </Navbar>


  );
}

export default Header;