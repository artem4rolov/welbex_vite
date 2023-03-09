import "./Header.css";
import logo from "../../assets/img/logo.svg";
import telegram from "../../assets/img/tg.svg";
import phone from "../../assets/img/phone.svg";
import whatsapp from "../../assets/img/wa.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-img" src={logo} alt="" />
        <span>крупный интегратор CRM в Росcии и ещё 8 странах</span>
      </div>
      <nav className="header__nav">
        <ul>
          <li className="header__nav-item">Услуги</li>
          <li className="header__nav-item">Виджеты</li>
          <li className="header__nav-item">Интеграции</li>
          <li className="header__nav-item">Кейсы</li>
          <li className="header__nav-item">Сертификаты</li>
        </ul>
      </nav>
      <div className="header__contact">
        <div className="header__contact-number">+7 555 555-55-55</div>
        <div className="header__contact-socials">
          <img src={telegram} alt="" className="header__contact-socials-item" />
          <img src={phone} alt="" className="header__contact-socials-item" />
          <img src={whatsapp} alt="" className="header__contact-socials-item" />
        </div>
      </div>
    </header>
  );
};

export default Header;
