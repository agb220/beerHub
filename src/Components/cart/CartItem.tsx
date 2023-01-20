import React from "react";

import { useDispatch } from "react-redux";

import { remove } from "lodash";

import {
  addProductToCart,
  CartProduct,
  minusProduct,
  removeProduct,
} from "../../redux/slices/cartSlice";

import minus from "../../assets/cart-img/minus.svg";
import plus from "../../assets/cart-img/plus.svg";
import clear from "../../assets/cart-img/clear.svg";

type CartItemProps = {
  id: string;
  name: string;
  brand: string;
  volume: number;
  price: number;
  img: string;
  count: number;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  brand,
  volume,
  price,
  img,
  count,
}) => {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    if (window.confirm("Ви справді хочете видалити товар?")) {
      dispatch(removeProduct(id));
    }
  };

  const onClickPlus = () => {
    const product: CartProduct = {
      id,
      name,
      brand,
      volume,
      price,
      img,
      count: 0,
    };
    dispatch(addProductToCart(product));
  };
  const onClickMinus = () => {
    dispatch(minusProduct(id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img className="cart-img__product" src={img} alt="beer" />
      </div>
      <div className="cart-item__block">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__brand">{brand}</div>
        <div className="cart-item__volume">{volume} л.</div>
      </div>
      <div className="cart-item__price">{price}uah</div>
      <div className="cart-item__remove">
        <button
          className="cart-item__btn _minus"
          onClick={onClickMinus}
          disabled={count === 1}
        >
          <img className="cart-img" src={minus} alt="minus" />
        </button>
        <div className="cart-item__count">{count}</div>
        <button className="cart-item__btn _plus">
          <img
            className="cart-img"
            src={plus}
            alt="plus"
            onClick={onClickPlus}
          />
        </button>
      </div>
      <div className="cart-item__price">{count * price} uah</div>
      <div className="cart-item__clear" onClick={onClickRemove}>
        <img className="cart-img" src={clear} alt="clear" />
      </div>
    </div>
  );
};

export default CartItem;
