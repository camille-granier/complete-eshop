import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartBtn from './UI/CartBtn';
import LoginBtn from './UI/LoginBtn';
import RegisterBtn from './UI/RegisterBtn';
import { useContext } from 'react';
import AuthContext from '../redux/context/auth-context';

const NavBar = () => {

  
  const navigate = useNavigate();
  const AuthCtx = useContext(AuthContext);
  const isLoggedIn = AuthCtx.isLoggedIn;
  const logoutHandler = () => {
    AuthCtx.logout();
    navigate('/');
  }

    return (
        <>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="/"
                 aria-current="page"
                className= { 
                  (thisNav) => thisNav.isActive ? "nav-link active" : 'nav-link'}
                  >Home</NavLink>
        <NavLink to="/products"
                  className= { 
                    (thisNav) => thisNav.isActive ? "nav-link active" : 'nav-link'}
                    >Products</NavLink>
        <NavLink to="/about"
                  className= { 
                    (thisNav) => thisNav.isActive ? "nav-link active" : 'nav-link'}
                    >About</NavLink>
        <NavLink to="/contact"
                  className= { 
                    (thisNav) => thisNav.isActive ? "nav-link active" : 'nav-link'}
                    >Contact</NavLink>
       </Nav>
      </Navbar.Collapse>
      <div className='nav-cont'>
  {!isLoggedIn  
  ? <LoginBtn /> 
  :
        <>
           <button className='btn-header btn btn-outline-dark ms-2'
                   onClick={logoutHandler}>
               <span className='fa fa-sign-out me-2'></span><span className="btn-text">Logout</span>
            </button> 
        </>
}
  {!isLoggedIn && <RegisterBtn />}
  <CartBtn />
  </div>
  </Container>
</Navbar>
        </>
    );
};

export default NavBar;