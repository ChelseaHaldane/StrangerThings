import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/signup'>Register</NavLink>
      <NavLink to='/logout'>Logout</NavLink>
    </nav>
  );
};

export default Navbar;