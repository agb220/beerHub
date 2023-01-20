import React from "react";

import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";

import { RootState } from "../../redux/store";
import { CartProduct } from "../../redux/slices/cartSlice";
import { addProductToCart } from "../../redux/slices/cartSlice";

import "./product.css";

type ProductProps = {
  id: string;
  name: string;
  img: string;
  brand: string;
  price: number;
  volume: number;
  style: string;
  ABV: number;
  IBU: number;
  lactose: string;
};

const Product: React.FC<ProductProps> = ({
  id,
  name,
  img,
  brand,
  price,
  volume,
  style,
  ABV,
  IBU,
  lactose,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) =>
    state.cartSlice.products.find((obj: any) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : "";

  const onAddProduct = () => {
    const obj: CartProduct = {
      id,
      name,
      brand,
      img,
      price,
      volume,
      count: 0,
    };
    dispatch(addProductToCart(obj));
  };

  return (
    <div className="product-item">
      <div className="product-img">
        <img className="img" src={img} alt="beer" />
      </div>
      <div className="product-block-info">
        <div className="product-name">
          {name} {brand}
          {volume} л.
        </div>
      </div>
      <div className="product-price">{price} грн</div>
      <div className="product-block__order">
        <button className="order-btn" onClick={onAddProduct}>
          <span>Додати в кошик</span>

          <span className={addedCount === "" ? "" : "order-count"}>
            {addedCount && addedCount}
          </span>
        </button>
      </div>
      <div className="product-characteristic">
        <h3 className="product-characteristic__title">Характеристики:</h3>
        <div className="product-characteristic-body">
          <div className="product-style">Стиль: {style}</div>
          <div className="product-abv">ABV: {ABV}</div>
          <div className="product-ibu">IBU: {IBU}</div>
          <div className="product-lactose">{lactose}</div>
        </div>
      </div>
    </div>
  );
};

Product.defaultProps = {
  style: "Різне",
  ABV: 0,
  IBU: 0,
};

export default Product;
