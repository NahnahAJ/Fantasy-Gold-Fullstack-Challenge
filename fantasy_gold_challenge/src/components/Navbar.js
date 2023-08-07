import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the styles from the styles folder
import Logout from './Logout';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><a href='/home'>Echo</a></h1>
      <NavLink exact to='/' activeClassName="activeLink">Share Feedback</NavLink>
      <NavLink to='/feedback' activeClassName="activeLink">My Feedback</NavLink>
      <NavLink to='/teamfeedback' activeClassName="activeLink">Team Feedback</NavLink>
      <Logout />
    </nav>
  )
}

export default Navbar;
