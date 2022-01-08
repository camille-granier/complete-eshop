import React from 'react';
import { NavLink } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';
import Login from './buttons/Login';
import Register from './buttons/Register';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid px-4">
    <NavLink className="navbar-brand" to="/">The Collection</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>Contact</NavLink>
        </li>
      </ul>
      <div className='buttons'>
        <Login />
        <Register />
        <CartBtn />
      </div>
    </div>
  </div>
</nav>
        </>
    );
};

export default Navbar;