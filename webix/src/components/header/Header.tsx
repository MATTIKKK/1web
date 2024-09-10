import './header.css';
import logo from '../../static/images/novanest-logo.png';
import telegram from '../../static/images/telegram-logo.png';
import instagram from '../../static/images/instagram-logo.png';
import whatsapp from '../../static/images/whatsapp-logo.png';
import { useState } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSetActive = () => {
    setIsActive(prev => !prev);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="menu-nav desktop">
          <img src={logo} alt="logo" className="logo" />

          <ul className="menu-list">
            <li>
              <a href="#">Корпоративный</a>
            </li>
            <li>
              <a href="#">Технологии</a>
            </li>
            <li>
              <a href="#">Мода</a>
            </li>
            <li>
              <a href="#">Еда</a>
            </li>
            <li>
              <a href="#">Спорт</a>
            </li>
            <li>
              <a href="#">Креатив</a>
            </li>
          </ul>

          <div className="menu-about-us">
            <a href="about-us">О нас</a>
            <p className="menu-phone-number">+7 (727) 345-6789</p>
          </div>
        </nav>

        <nav className="menu-nav mobile">
          <div
            onClick={handleSetActive}
            className={isActive ? 'menu-burger active' : 'menu-burger'}
          >
            <div className="menu-burger-line menu-burger-line-1"></div>
            <div className="menu-burger-line menu-burger-line-2"></div>
            <div className="menu-burger-line menu-burger-line-3"></div>
          </div>

          <div className="menu-nav-info">
          <img src={logo} alt="logo" className="logo-mobile" />
          <p className='menu-phone-number'>+7 (727) 345-6789</p>
          </div>
          
          <ul
            id="menu-list"
            className={isActive ? "menu-list active" : "menu-list"}
          >
            <li>
              <a href="#">Финансы</a>
            </li>
            <li>
              <a href="#">Утилиты</a>
            </li>
            <li>
              <a href="#">Здоровье</a>
            </li>
            <li>
              <a href="#">Игры</a>
            </li>
            <li>
              <a href="#">Социальные сети</a>
            </li>
            <li>
              <a href="#">Путешествия</a>
            </li>

            <div className="menu-more-info">
            <div className="social-media-img">
              <img src={telegram} alt="telegram" />
              <img src={instagram} alt="instagram" />
              <img src={whatsapp} alt="whatsapp" />
            </div>
          </div>
          </ul>

          
        </nav>
      </div>
    </header>
  );
};

export default Header;
