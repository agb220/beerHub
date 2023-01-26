import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import cart from "../../assets/header-img/cart.svg";
import CartPage from "./CartPage";

const CartBTN: React.FC = () => {
  const { totalPrice, totalCount } = useSelector(
    (state: RootState) => state.cartSlice
  );

  return (
    <>
      <Link to="CartPage">
        <div className="info-cart">
          <button className="cart">
            <span className="cart-count">
              {totalPrice}
              <span>₴</span>
            </span>
            <img className="cart-img" src={cart} alt="cart" />
            <span className="cart-count">{totalCount}</span>
          </button>
        </div>
      </Link>
    </>
  );
};

export default CartBTN;
