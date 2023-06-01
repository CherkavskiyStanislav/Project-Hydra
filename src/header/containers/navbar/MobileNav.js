import React, { useState } from 'react';
import './MobileNav.scss'
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';


const MobileNav = () => {
  const { t } = useTranslation();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle('no-scroll');
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <div className='navbar__mobile'>
      <button className='navbar__mobile-toggle' onClick={toggleNav}>
        <div className={`navbar__mobile-icon ${!isNavOpen ? '' : 'active'}`} />
      </button>
      {isNavOpen && (
        <div className='navbar__mobile-overlay' onClick={closeNav} />
      )}
      <div className={`navbar__mobile-menu ${!isNavOpen ? '' : 'open'}`}>
        <ul className='navbar__mobile-list'>
          <li className='navbar__mobile-item'>
            <HashLink to="#about" onClick={closeNav}>{t('navbar-menu-about')}</HashLink>
          </li>
          <li className='navbar__mobile-item'>
            <HashLink to="#serv" onClick={closeNav}>{t('navbar-menu-services')}</HashLink>
          </li>
          <li className='navbar__mobile-item'>
            <HashLink to="#tech" onClick={closeNav}>{t('navbar-menu-tech')}</HashLink>
          </li>
          <li className='navbar__mobile-item'>
            <HashLink to="#how" onClick={closeNav}>{t('navbar-menu-how')}</HashLink>
          </li>
          <div className='navbar__mobile_container'>
            <button className='navbar__mobile-button'>
              <HashLink to="#contact" onClick={closeNav}>
                {t('navbar-buttons-contact')}
              </HashLink>
            </button>
            <button className='navbar__mobile-button'>
              <HashLink to="#join" onClick={closeNav}>
                {t('navbar-buttons-join')}
              </HashLink>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
