import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, action) {
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
      state.totalPrice = state.products.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.totalCount = state.products.reduce(
        (sum, product) => sum + product.count,
        0
      );
    },
    // plusProduct(state, action) {
    //   const findProduct = state.products.find(
    //     (obj) => obj.id === action.payload.id
    //   );
    //   if (findProduct) {
    //     findProduct.count++;
    //   }
    // },
    minusProduct(state, action) {
      const findProduct = state.products.find(
        (obj) => obj.id === action.payload.id
      );
      if (findProduct) {
        findProduct.count--;
      }
      state.totalPrice = state.products.reduce((sum, obj) => {
        return obj.price * obj.count - sum;
      }, 0);
      state.totalCount = state.products.reduce(
        (sum, product) => product.count - sum,
        0
      );
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (obj) => obj.id === action.payload.id
      );
    },
    clearCart(state) {
      state.products = [];
      state.totalCount = 0;
      state.totalPrice = 0;
      state.count = 0;
    },
  },
});

export const {
  addProductToCart,
  removeProduct,
  clearCart,
  // plusProduct,
  minusProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
