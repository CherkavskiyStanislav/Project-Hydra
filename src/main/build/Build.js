import React from "react";
import './Build.scss';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from "uuid";
import Slide from './../slide/Slide';

import firstList from '../../img/main/user-card-1.webp';
import secondList from '../../img/main/user-card-2.webp';
import thirdList from '../../img/main/user-card-3.webp';
import fourthList from '../../img/main/user-card-4.webp';

import buildArrow from '../../img/line/line-card-horizontal.png'

function Build() {
  
  const { t } = useTranslation();
  
  const services = [
    { id: uuidv4(), img: firstList, title: 'SIMULATION', description: t('build__why-p') },
    { id: uuidv4(), img: secondList, title: 'EDUCATION', description: t('build__why-p') },
    { id: uuidv4(), img: thirdList, title: 'SELF-CARE', description: t('build__why-p') },
    { id: uuidv4(), img: fourthList, title: 'OUTDOOR', description: t('build__why-p') },
]

  const serviceCard = services.map((service) => (
    <div key={service.id} className="service">
      <img src={service.img} alt="service" className="service__img" />
      <h2 className="service__title">{service.title}</h2>
      <img src={buildArrow} alt="arrow" className="service__arrow" />
      <p className="service__description">{service.description}</p>
      <button className="service__button">{t('build__why-btn')}</button>
    </div>
  ));

  return (
    <div id="serv">
    <Slide  content={serviceCard.slice(0, 4)}/>
    </div>
  );
}

export default Build;

{/* <div className="main__list" id="serv">
{serviceCard}
</div> */}