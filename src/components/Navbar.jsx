import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/signup'>Register</NavLink>
      <NavLink to='/logout'>Logout</NavLink>
      <NavLink to='/header'>Header</NavLink>
    </nav>
  );
};

export default Navbar;