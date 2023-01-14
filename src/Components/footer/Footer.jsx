import React from "react";

import facebook from "../../assets/footer-img/facebook.svg";
import instagram from "../../assets/footer-img/instagram.svg";
import telegram from "../../assets/footer-img/telegram.svg";

import footer from "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer className="footer-body _container">
        <div className="footer-top">
          <div className="footer-logo">
            <a className="logo" href="#">
              Beer Hub
            </a>
          </div>
          <div className="footer-menu">
            <ul className="menu-list">
              <li className="menu-sublist">
                <span className="menu-title">Каталог</span>
                <ul>
                  <li className="menu-item _footer-item">
                    <a className="menu-link" href="#">
                      Пиво
                    </a>
                  </li>
                  <li className="menu-item _footer-item">
                    <a className="menu-link" href="#">
                      Колекції
                    </a>
                  </li>
                  <li className="menu-item _footer-item">
                    <a className="menu-link __red" href="#">
                      SALE!
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-sublist">
                <span className="menu-title">Клієнтам</span>
                <ul>
                  <li className="menu-item _footer-item">
                    <a className="menu-link" href="#">
                      Каталог
                    </a>
                  </li>
                  <li className="menu-item _footer-item">
                    <a className="menu-link" href="#">
                      Оплата та доставка
                    </a>
                  </li>
                  <li className="menu-item _footer-item">
                    <a className="menu-link" href="#">
                      Про нас
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-sublist">
                <span className="menu-title">Контактна інформація</span>
                <ul>
                  <li className="menu-item _footer-item">
                    <a className="menu-link" href="tel:380734545454">
                      +38073-454-54-54
                    </a>
                  </li>
                  <li className="menu-item _footer-item">
                    <a className="menu-link" href="mailto:beerhub@com.ua">
                      beerhub@com.ua
                    </a>
                  </li>
                  <li className="menu-item _footer-item">
                    <a className="menu-media" href="#">
                      <img className="menu-img" src={telegram} alt="telegram" />
                    </a>
                  </li>
                  <li className="menu-item _footer-item">
                    <a className="menu-button" href="#">
                      Передзвонити вам?
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer-media">
            <h3 className="media-title">Ми в соціальних мережах</h3>
            <ul className="media-list">
              <li className="media-item ">
                <a className="media-link" href="#">
                  <img className="media-img" src={facebook} alt="facebook" />
                </a>
              </li>
              <li className="media-item ">
                <a className="media-link" href="#">
                  <img className="media-img" src={instagram} alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copy">Copyright - BEER HUB 2022</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
