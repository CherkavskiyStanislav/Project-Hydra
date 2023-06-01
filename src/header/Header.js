import React from "react";
import Navbar from './containers/navbar/Navbar.js';
import MainSection from './containers/MainSection.js';
import './Header.scss'


function Header() {
  return (
    <header className="header">
        <Navbar />
        <MainSection />
    </header>
  );
}

export default Header;