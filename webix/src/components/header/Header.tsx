import './header.css';
import logo from '../../static/images/webix-logo.png';
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
    <div className="header">
      <div className="container">
        <nav className="menu-nav desktop">
          <img src={logo} alt="logo" className="logo" />

          <ul className="menu-list">
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
          </ul>

          <div className="menu-about-us">
            <a href="#">О нас</a>
            <div className="menu-phone-number">7 (701) 234 56 78</div>
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

          <img src={logo} alt="logo" className="logo-mobile" />
          
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
            <p>webix.office@gmail.com</p>
            <p>7 (725) 384-9106</p>
            <div className="social-media-img">
              <img src={telegram} alt="telegram" />
              <img src={instagram} alt="instagram" />
              <img src={whatsapp} alt="whatsapp" />
            </div>
          </div>
          </ul>

          
        </nav>
      </div>
    </div>
  );
};

export default Header;
