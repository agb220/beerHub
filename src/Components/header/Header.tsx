import React from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";

import CartBTN from "../cart/CartBTN";
import Search from "../search/Search";

import icon from "../../assets/header-img/icon.svg";
import telegram from "../../assets/header-img/telegram.svg";
import cart from "../../assets/header-img/cart.svg";

//import header from "./header.css";
import "./header.css";

function Header() {
  const { products, totalCount, totalPrice } = useSelector(
    (state: RootState) => state.cartSlice
  );
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(products);
      localStorage.setItem("cart", json);
      //console.log(json);
    }
    isMounted.current = true;
  }, [products, totalCount, totalPrice]);

  return (
    <div className="header">
      <header className="header-body _container">
        <div className="header-block">
          <div className="header-top">
            <div className="header-contacts">
              <ul className="contacts-list">
                <li className="contact-item">
                  <a className="menu-link" href="tel:380734545454">
                    +38073-454-54-54
                  </a>
                </li>
                <li className="contact-item">
                  <a className="contact-link" href="#">
                    <img
                      className="contact-img"
                      src={telegram}
                      alt="telegram"
                    />
                  </a>
                </li>
                <li className="contact-item">
                  <a className="contact-button" href="#">
                    Передзвонити вам?
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-logo">
              <Link className="logo" to="/">
                Beer Hub
              </Link>
            </div>

            <div className="header-menu">
              <ul className="menu-list">
                <li className="menu-item">
                  <a className="menu-link" href="#">
                    Пиво
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="#">
                    Оплата та доставка
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="#">
                    Про нас
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-info">
              <div className="info-search">
                <Search />
              </div>
              <CartBTN />
              <div className="info-login">
                <a className="login" href="#">
                  <img className="login-img" src={icon} alt="login" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
