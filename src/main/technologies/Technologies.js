import React, { useState } from 'react';
import './Technologies.scss';
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from 'react-i18next';
import Slide from './../slide/Slide';

import firstTech from '../../img/brands/brand-1.png'
import secondTech from '../../img/brands/brand-2.png'
import thirdTech from '../../img/brands/brand-3.png'
import fourthTech from '../../img/brands/brand-4.png'
import techArrow from '../../img/icons/arrow-down.png'

const Technologies = () => {

  const { t } = useTranslation();

  const hardwares = [
    { id: uuidv4(), url: firstTech, cName: 'hardwares', alt: 'hardwares' },
    { id: uuidv4(), url: secondTech, cName: 'hardwares', alt: 'hardwares' },
    { id: uuidv4(), url: thirdTech, cName: 'hardwares', alt: 'hardwares' },
    { id: uuidv4(), url: fourthTech, cName: 'hardwares', alt: 'hardwares' },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const technoImg = hardwares.map((hard)=>(
    <div className="brands__img" key={hard.id}>
      <img src={hard.url} alt={hard.alt}/>
    </div>
  ));

  return (
    <>
    <div className="main__technologies" id="tech">
      <div className={`background ${expanded ? 'expanded' : ''}`}>
        <h2> 
          {t('technologies-first-h')} <br />
          <span>{t('technologies-second-h')}</span>
        </h2>
      </div>

      <button onClick={handleClick} className={`technobtn ${expanded ? 'expanded' : ''}`}>
        <img src={techArrow} alt='hardwares' className={`technobtn__img ${expanded ? 'expanded' : ''}`}/> 
      </button>
    </div>
    <Slide content={technoImg.slice(0, 4)}/>
    </>
  );
}

export default Technologies;
