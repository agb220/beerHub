import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import cart from "../../assets/header-img/cart.svg";
import CartPage from "./CartPage";

function CartBTN() {
  const { totalPrice, totalCount } = useSelector((state) => state.cartSlice);

  return (
    <>
      <Link to="CartPage">
        <div className="info-cart">
          <button className="cart">
            <span className="cart-count">{totalPrice}₴</span>
            <img className="cart-img" src={cart} alt="cart" />
            <span className="cart-count">{totalCount}</span>
          </button>
        </div>
      </Link>
    </>
  );
}

export default CartBTN;
