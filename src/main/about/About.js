import React from "react";
import './About.scss';
import { useTranslation } from 'react-i18next';
import man from '../../img/main/mainMan.webp';


function About() {
  const { t } = useTranslation();
  return (
    <div className="main__about" id="about">
      <img src={man} alt="man" className="main__about--img"/>
      <div className="main__about--text">
          <h2>{t('about__info-h2')}</h2>
          <h3>{t('about__info-h3')}</h3>
          <p>{t('about__info-p')}</p>
          <button>{t('about__info-btn')}</button>
      </div>
    </div>
  );
}

export default About;