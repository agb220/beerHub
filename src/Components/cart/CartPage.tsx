import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";

import { clearCart } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";

import "./cartPage.css";

import cart from "../../assets/cart-img/cart.svg";
import arrow from "../../assets/cart-img/arrow.svg";
import del from "../../assets/cart-img/delete.svg";
import emoji from "../../assets/cart-img/emoji.svg";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const addedProducts = useSelector(
    (state: RootState) => state.cartSlice.products
  );
  const { totalPrice, totalCount } = useSelector(
    (state: RootState) => state.cartSlice
  );

  const onClearCart = () => {
    if (window.confirm("Ви справді хочете очиститу кошик?")) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="cart-content">
      {totalCount ? (
        <div className="cart-content__block">
          <div className="cart-content__top">
            <div className="cart-content__cart">
              <img className="cart-img" src={cart} alt="cart" />
              <span>Кошик</span>
            </div>
            <div className="cart-content__clear">
              <img className="cart-img" src={del} alt="delete" />
              <span onClick={onClearCart}>Очистити кошик</span>
            </div>
          </div>
          <div className="cart-items">
            {addedProducts &&
              addedProducts.map((product) => (
                <CartItem key={product.id} {...product} />
              ))}
          </div>
          <div className="cart-content__bottom">
            <div className="cart-content__text">
              <div className="text">
                Всього замовлено: <span>{totalCount} шт.</span>
              </div>
              <div className="text">
                Сума замовлення:{" "}
                <span>
                  {totalPrice}
                  грн.
                </span>
              </div>
            </div>
            <div className="cart-content__btn">
              <div className="btn-back">
                <Link to="/" className="back">
                  <img src={arrow} alt="arrow" />
                  <span>Назад</span>
                </Link>
              </div>
              <div className="btn-pay">
                <a className="pay">Замовити</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <div className="cart-empty__title">
            <span>Кошик пустий</span>
            <img src={emoji} alt="emoji" />
          </div>
          <div className="cart-empty__text">
            Ви ще не додали жодної пляшки пива в кошик
          </div>
          <div className="empty-btn__block">
            <div className="btn-back__empty">
              <Link to="/" className="back-empty">
                <span>Повернутись назад</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
