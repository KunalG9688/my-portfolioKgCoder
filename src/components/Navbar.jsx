import React, { useState } from 'react';
import LogoKg from '../assets/img/kg.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        console.log('Opening menu');
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        console.log('Closing menu');
        setIsMenuOpen(false);
    };

    return (
        <nav>
            <div className='logo-border'>
                <img className="logo" src={LogoKg} alt="Logo" />
            </div>
            <ul id='sidemenu' className={isMenuOpen ? 'open' : ''}>
                <i className="bi bi-x" onClick={closeMenu}></i>
                <li><a href="#header" onClick={closeMenu}>Home</a></li>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                <li><a href="#work" onClick={closeMenu}>Work</a></li>
                <li><a href="#certification" onClick={closeMenu}>Certification</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
            <i className="bi bi-list" onClick={openMenu}></i>
        </nav>
    );
};

export default Navbar;
