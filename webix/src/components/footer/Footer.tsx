import './footer.css';
import logo from '../../static/images/shopin-logo.png';
import telegram from '../../static/images/telegram-white.png';
import instagram from '../../static/images/instagram-white.png';
import whatsapp from '../../static/images/whatsapp-white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main desktop">
          <div className="footer-block first-block">
            <img src={logo} alt="" />
            <p className="footer-small-text">Copyright © 2024 SHOPIN</p>
          </div>

          <div className="second-block">
            <div className="footer-block">
              <p className="footer-text footer-phone-number">
                +7 (727) 345-6789
              </p>
              <p className="footer-small-text">Политика конфиденциальности</p>
              <a
                className="footer-small-text"
                href="https://novanest.webshop2.kz/api/products/documents/payment-terms.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Условие оплаты
              </a>
            </div>

            <div className="footer-block">
              <p className="footer-text .footer-mail">shopin.shop@mail.com</p>
              <p className="footer-small-text">Публичная Оферта</p>
              <a
                className="footer-small-text"
                href="https://novanest.webshop2.kz/api/products/documents/return-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Политика возврата
              </a>
            </div>

            <div className="footer-block">
              <div className="footer_social-media-img">
                <img src={telegram} alt="telegram" />
                <img src={instagram} alt="instagram" />
                <img src={whatsapp} alt="whatsapp" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-main mobile">
          <div className="footer-block first-block">
            <img src={logo} alt="" />
          </div>

          <div className="second-block">
            
            <div className="footer-block">
              <p className="footer-text footer-phone-number">
                +7 (727) 345-6789
              </p><p className="footer-text .footer-mail">shopin.shop@mail.com</p>
              <div className="footer_social-media-img">
                <img src={telegram} alt="telegram" />
                <img src={instagram} alt="instagram" />
                <img src={whatsapp} alt="whatsapp" />
              </div>
              
            </div>

            <div className="footer-block">
              <p className="footer-small-text">Copyright © 2024 SHOPIN</p>
              <p className="footer-small-text">Политика конфиденциальности</p>
              <p className="footer-small-text">Публичная Оферта</p>
              <a
                className="footer-small-text"
                href="https://novanest.webshop2.kz/api/products/documents/return-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Политика возврата
              </a>
              <a
                className="footer-small-text"
                href="https://novanest.webshop2.kz/api/products/documents/payment-terms.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Условие оплаты
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
