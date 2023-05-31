import React, { useState, useRef } from "react";
import './Navbar.scss'
import MobileNav from "./MobileNav";
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

import frame from '../../img/logo/barLogo.png';
import logo from '../../img/logo/barLogoName.png';

function Navbar (){
  const { t, i18n } = useTranslation();

  const [activeButton, setActiveButton] = useState('');

  const changeLanguage = (lng) => {
    setActiveButton(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="header__navbar">
      <div className="navbar__logo">
        <img className="navbar__logo--first" src={frame} alt="logo"/>
        <img className="navbar__logo--second" src={logo} alt="HYDRA"/>
      </div>

      <MobileNav />
      
      <ul className="navbar__menu">
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
        <div className="navbar__buttons">
          <button className="navbar__buttons--contact">
            <HashLink smooth to="#contact">
              {t('navbar-buttons-contact')}
            </HashLink>
          </button>
          <button className="navbar__buttons--join">
            <HashLink smooth to="#join">
              {t('navbar-buttons-join')}
            </HashLink>
          </button>
        </div>
      </ul>

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
  )
}
export default Navbar