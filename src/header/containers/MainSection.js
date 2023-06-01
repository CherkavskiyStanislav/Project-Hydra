import React from "react";
import { ContactSection } from './ContactSection';
import { useTranslation } from 'react-i18next';
import './MainSection.scss';
import girl from '../../img/main/headerGirl.webp';

function MainSection (){
  const { t } = useTranslation();

  const words = t('main-section__right-sidebar').split(' ');
  const firstWord = words[0];
  const sixthWord = words[5];
  const seventhWord = words[6];

    return (
      <>
        <div className="header__section">
          <div className="header__section--right">
            <h2> 
              <span>{firstWord}</span> {' '}
              {words.slice(1, 4).join(' ')} <br />
              {words.slice(4, 5).join(' ')} {' '}
              <span>{sixthWord} {' '} {seventhWord}</span>
            </h2>
            <p>{t('main-section__right-text')}
            </p>
            <div className="header__section--right--button">
              <button>{t('main-section__right-sidebar__btn')}</button>
            </div>
          </div>
          <div className="header__section--left">
            <img src={girl} alt="girl"/>
          </div>
        </div>
        <ContactSection />
      </>
    );
}
export default MainSection