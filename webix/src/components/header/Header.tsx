import './header.css';
import logo from '../../static/images/novanest-logo.png';
import telegram from '../../static/images/telegram-logo.png';
import instagram from '../../static/images/instagram-logo.png';
import whatsapp from '../../static/images/whatsapp-logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSetActive = () => {
    setIsActive(prev => !prev);
  };

  const categoryMap = {
    Корпоративный: 'Корпоративные логотипы',
    Технологии: 'Технологические логотипы',
    Мода: 'Логотипы про моду',
    Еда: 'Логотипы про еду',
    Спорт: 'Спортивные логотипы',
    Креатив: 'Креативные логотипы',
  };
  

  return (
    <header className="header">
      <div className="container">
        <nav className="menu-nav desktop">
          <a href="/"><img src={logo} alt="logo" className="logo" /></a>

          <ul className="menu-list">
          {Object.entries(categoryMap).map(([russian, type], index) => (
              <li key={index}>
                <Link to={`/categories/${type}`}>{russian}</Link>
              </li>
            ))}
          </ul>

          <div className="menu-about-us">
            <a href="/about-us">О нас</a>
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
          <a href="/"><img src={logo} alt="logo" className="logo-mobile" /></a>
          <p className='menu-phone-number'>+7 (727) 345-6789</p>
          </div>
          
          <ul
            id="menu-list"
            className={isActive ? "menu-list active" : "menu-list"}
          >
            {Object.entries(categoryMap).map(([russian, english], index) => (
              <li key={index}>
                <Link to={`/categories/${english}`}>{russian}</Link>
              </li>
            ))}

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
