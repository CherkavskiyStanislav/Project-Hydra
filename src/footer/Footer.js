import React from "react";
import './Footer.scss';
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from 'react-i18next';

import frame from '../img/logo/footerLogo.png';
import facebook from '../img/socials/facebook.svg';
import twitter from '../img/socials/twitter.svg';
import linkedin from '../img/socials/linkedin.svg';
import youtube from '../img/socials/youtube.svg';
import instagram from '../img/socials/instagram.svg';
import pinterest from '../img/socials/pinterest.svg';
import gline from '../img/line/line-footer.png';
import vline from '../img/line/vertical-line-footer.png';

function Footer() {
    const { t } = useTranslation();
    const FooterMenuItems = [
        { id: uuidv4(), title: t('footer_nav_link1'), url: '/', cName: 'footer__nav--link'},
        { id: uuidv4(), title: t('footer_nav_link2'), url: '/', cName: 'footer__nav--link'},
        { id: uuidv4(), title: t('footer_nav_link3'), url: '/', cName: 'footer__nav--link'},
        { id: uuidv4(), title: t('footer_nav_link4'), url: '/', cName: 'footer__nav--link'},
        { id: uuidv4(), title: t('footer_nav_link5'), url: '/', cName: 'footer__nav--link'},
      ]
    const FooterBarLists = [
        { id: uuidv4(), title: t('footer_bar_link1'), url: '/', cName: 'footer__bar--link'},
        { id: uuidv4(), title: t('footer_bar_link2'), url: '/', cName: 'footer__bar--link'},
        { id: uuidv4(), title: t('footer_bar_link3'), url: '/', cName: 'footer__bar--link'},
        { id: uuidv4(), title: t('footer_bar_link4'), url: '/', cName: 'footer__bar--link'},
    ];t()
    const SocialMedias = [
        { id: uuidv4(), src: facebook, alt: 'facebook', cName: 'footer__media-img', href: 'https://www.facebook.com/cherkavskiy.stas/', target:"_blank"},
        { id: uuidv4(), src: twitter, alt: 'twitter', cName: 'footer__media-img', href: 'https://twitter.com/intent/tweet?text=Hello%20world', target:"_blank"},
        { id: uuidv4(), src: linkedin ,alt: 'linkedin', cName: 'footer__media-img', href: 'https://www.linkedin.com/in/stanislav-cherkavskyi/', target:"_blank"},
        { id: uuidv4(), src: youtube, alt: 'youtube', cName: 'footer__media-img', href: 'https://www.youtube.com/', target:"_blank"},
        { id: uuidv4(), src: instagram, alt: 'instagram', cName: 'footer__media-img', href: 'https://www.instagram.com/stanislavcherkavskyi/', target:"_blank"},
        { id: uuidv4(), src: pinterest , alt: 'pinterest', cName: 'footer__media-img', href: 'https://www.pinterest.com/cherkavskiy/', target:"_blank"},
    ];
  return (
    <footer className="footer" id="contact">
        <div className="footer__section">
            <img 
                src={frame} 
                alt="logo"
                className="footer__logo"
            />
            <img className="line" src={vline} alt="line" />
            <div className="footer__nav">
                {FooterMenuItems.map((items) => {
                return (
                    <a key={items.id} href={items.url} className={items.cName}>
                    {items.title}
                    </a>
                );
                })}
            </div>
            <img className="line" src={vline} alt="line" />
            <div className="footer__bar">
                {FooterBarLists.map((list) => {
                    return (
                        <a key={list.id} href={list.url} className={list.cName}>
                        {list.title}
                        </a>
                    );
                    })}
            </div>
            <img className="line" src={vline} alt="line" />
            <div className="footer__media">
                <h2>{t('footer_media_h2')}</h2>
                <div className="footer__media--block">
                    {SocialMedias.map((media) => {
                        return (
                            <a key={media.id} href={media.href} target={media.target}>
                                <img alt={media.alt} className={media.cName} src={media.src}
                                />
                            </a>
                        );
                    })}
                </div>
                <button>{t('footer_media_btn')}</button>
            </div>
        </div>
        <img className="footer__line" src={gline} alt="line" />
        <p className="footer__copyright">2023 &#169; HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED</p>
    </footer>
  );
}

export default Footer;