import React, { useState, useRef } from "react";
import './Navbar.scss'
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from "uuid";
import { FaBars, FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

import frame from '../../img/logo/barLogo.png';
import logo from '../../img/logo/barLogoName.png';

function Navbar (){
  const { t, i18n } = useTranslation();

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  const [activeButton, setActiveButton] = useState('');

  const changeLanguage = (lng) => {
    setActiveButton(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <>
    <nav className="navbar">
      <div className="navbar__logo">
        <img className="navbar__logo--first" src={frame} alt="logo"/>
        <img className="navbar__logo--second" src={logo} alt="HYDRA"/>
      </div>
      <ul className="navbar__menu" ref={navRef}>
        <li className="navbar__menu--links">
          <HashLink smooth to="#about">{t('navbar-menu-about')}</HashLink>
        </li>
        <li className="navbar__menu--links">
          <HashLink smooth to="#serv">{t('navbar-menu-services')}</HashLink>
        </li>
        <li className="navbar__menu--links">
          <HashLink smooth to="#tech">{t('navbar-menu-tech')}</HashLink>
        </li>
        <li className="navbar__menu--links">
          <HashLink smooth to="#how">{t('navbar-menu-how')}</HashLink>
        </li>
        <button onClick={showNavbar} className="navbar-btn navbar-close-btn">
          <FaTimes />
        </button>
      </ul>
      <button onClick={showNavbar} className="navbar-btn">
        <FaBars />
      </button>
      <div className="navbar__buttons">
        <button className="navbar__buttons--contact">{t('navbar-buttons-contact')}</button>
        <button className="navbar__buttons--join">{t('navbar-buttons-join')}</button>
      </div>
      <div className="navbar__language">
          <button
            className={`navbar-language--button ${activeButton === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <button
            className={`navbar-language--button ${activeButton === 'ua' ? 'active' : ''}`}
            onClick={() => changeLanguage('ua')}
          >
            UA
          </button>
        </div>
    </nav>

    </>
  )
}
export default Navbar