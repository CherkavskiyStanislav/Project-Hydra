import React, { useState } from 'react';
import './MobileNav.scss'
import { useTranslation } from 'react-i18next';


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
            <a href='/'>{t('navbar-menu-about')}</a>
          </li>
          <li className='navbar__mobile-item'>
            <a href='/'>{t('navbar-menu-services')}</a>
          </li>
          <li className='navbar__mobile-item'>
            <a href='/'>{t('navbar-menu-tech')}</a>
          </li>
          <li className='navbar__mobile-item'>
            <a href='/'>{t('navbar-menu-how')}</a>
          </li>
          <div className='navbar__mobile_container'>
            <button className='navbar__mobile-button'>
              <a href='/' className='navbar__mobile-contact'>{t('navbar-buttons-contact')}</a>
            </button>
            <button className='navbar__mobile-button'>
              <a href='/' className='navbar__mobile-join'>{t('navbar-buttons-join')}</a>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
