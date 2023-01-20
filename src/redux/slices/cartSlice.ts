import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalCount } from "../../utils/calcTotalCount";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLS } from "../../utils/getCartFromLS";

export type CartProduct = {
  id: string;
  name: string;
  brand: string;
  volume: number;
  price: number;
  img: string;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  totalCount: number;
  products: CartProduct[];
}

const { products, totalPrice, totalCount } = getCartFromLS();

const initialState: CartSliceState = {
  products: products,
  totalPrice: totalPrice,
  totalCount: totalCount,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<CartProduct>) {
      const findProduct = state.products.find(
        (obj) => obj.id === action.payload.id
      );

      if (findProduct) {
        findProduct.count++;
      } else {
        state.products.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.products);
      state.totalCount = calcTotalCount(state.products);
    },
    minusProduct(state, action: PayloadAction<string>) {
      const findProduct = state.products.find(
        (obj) => obj.id === action.payload
      );
      if (findProduct) {
        findProduct.count--;
      }
      state.totalPrice = state.products.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
      state.totalCount = state.products.reduce(
        (sum, product) => sum + product.count,
        0
      );
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = state.products.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
      state.totalCount = state.products.reduce(
        (sum, product) => sum + product.count,
        0
      );
    },
    clearCart(state) {
      state.products = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addProductToCart, removeProduct, clearCart, minusProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
