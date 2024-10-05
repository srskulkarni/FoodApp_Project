import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <img src={logo} alt="Logo" />
      <ul className='NavBar-menu'>
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
