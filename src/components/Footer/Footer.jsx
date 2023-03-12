import React from "react";
import { footerData } from "../../data";
import telegram from "../../assets/img/tg.svg";
import phone from "../../assets/img/phone.svg";
import whatsapp from "../../assets/img/wa.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* menu data */}
      <div className="footer__data-menu">
        {footerData.map((item) => {
          const { title, items } = item;

          return (
            <ul className="menu__item" key={Math.random()}>
              <span className="menu__item-title">{title}</span>
              {items.map((item) => (
                <li key={Math.random()}>
                  <a className="menu__item-href" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          );
        })}
      </div>
      {/* contact data */}
      <div className="footer__contact">
        <span className="menu__item-title">Контакты</span>
        <div className="footer__contact-number">+7 555 555-55-55</div>
        <div className="footer__contact-socials">
          <img src={telegram} alt="" className="footer__contact-socials-item" />
          <img src={phone} alt="" className="footer__contact-socials-item" />
          <img src={whatsapp} alt="" className="footer__contact-socials-item" />
        </div>
        <span className="footer__adress">
          Москва, Путевой проезд 3с1, к 902
        </span>
        <div className="copyright">
          <span className="copyright__title">
            ©WELBEX 2022. Все права защищены.
          </span>
          <a className="copyright__href">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
