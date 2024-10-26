import React, { useEffect, useState } from 'react';
import './header.scss';
import NavbarLogo from './Navbar-logo/NavbarLogo';
import NavbarMenuToggle from './navbar-menu-toggle/NavbarMenu';
import NavbarLinks from './navbar-links/NavbarLinks';
import NavbarDarkToggle from './navbar-dark-toggle/NavbarDarkToggle';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <nav className="navbar">
      <a href="#" className="skip-link">Skip to main content</a>
      <div className="container">
        <NavbarLogo />
        <NavbarMenuToggle isOpen={isMenuOpen} onClick={toggleMenu} />
        {isMenuOpen && <NavbarLinks />}
        <NavbarLinks />
        <NavbarDarkToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      </div>
    </nav>
  )
}

export default Header