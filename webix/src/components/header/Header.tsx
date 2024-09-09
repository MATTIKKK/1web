import './header.css';
import logo from '../../static/images/webix-logo.png';
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
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
