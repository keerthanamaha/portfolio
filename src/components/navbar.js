import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import contactImage from '../assets/contact.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} className='logo' alt='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
            <Link className='desktopMenuListItem'>Clients</Link>
        </div>
        <button className='desktopMenuButton'>
            <img src={contactImage} alt='contact image' className='desktopMenuImg'/>Contact me
        </button>
    </nav>
  )
}

export default Navbar