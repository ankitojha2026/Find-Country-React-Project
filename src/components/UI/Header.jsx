import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="Header bg-dark text-white">
            <div className="logo-container">
                <NavLink to="/">
                    <img src="/Images/logo.png" alt="Logo" width="50px" />
                </NavLink>
            </div>

            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><NavLink to="/" className="NavLink">Home</NavLink></li>
                    <li><NavLink to="/about" className="NavLink">About</NavLink></li>
                    <li><NavLink to="/country" className="NavLink">Country</NavLink></li>
                    <li><NavLink to="/contact" className="NavLink">Contact</NavLink></li>
                </ul>
            </nav>

            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header>
    );
};

export default Header;
