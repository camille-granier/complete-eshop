import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartBtn from './buttons/CartBtn';
import LoginBtn from './buttons/LoginBtn';
import RegisterBtn from './buttons/RegisterBtn';

const NavBar = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="/"
                className= { 
                  (thisNav) => thisNav.isActive ? "nav-active" : ''}
                  >Home</NavLink>
        <NavLink to="/products"
                  className= { 
                    (thisNav) => thisNav.isActive ? "nav-active" : ''}
                    >Products</NavLink>
        <NavLink to="/about"
                  className= { 
                    (thisNav) => thisNav.isActive ? "nav-active" : ''}
                    >About</NavLink>
        <NavLink to="/contact"
                  className= { 
                    (thisNav) => thisNav.isActive ? "nav-active" : ''}
                    >Contact</NavLink>
        </Nav>
        <LoginBtn />
        <RegisterBtn />
        <CartBtn />
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default NavBar;