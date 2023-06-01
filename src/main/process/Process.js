import React from "react";
import './Process.scss';
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from 'react-i18next';
import Slide from './../slide/Slide';


function Process() {
    const { t } = useTranslation();
    const numbers = [
        { id: uuidv4(), title: '01', cName: 'cards__elipse', text: t('cards-first-p'), hText: t('cards-first-p2')},
        { id: uuidv4(), title: '02', cName: 'cards__elipse', text: t('cards-second-p'), hText: t('cards-second-p2')},
        { id: uuidv4(), title: '03', cName: 'cards__elipse', text: t('cards-tird-p'), hText: t('cards-tird-p2')},
        { id: uuidv4(), title: '04', cName: 'cards__elipse', text: t('cards-fourth-p'), hText: t('cards-fourth-p2')},
    ]

    const elipseCard = numbers.map((number) => (
        <div key={number.id} className="cards">
            <div className={number.cName}>
                {number.title}
            </div>
            <p>
                {number.text} <br />
                <span>{number.hText}</span>
            </p>
        </div>
    ));

  return (
    <div id="how">
        <Slide content={elipseCard.slice(0, 4)}/>
    </div>
  );
}

export default Process;