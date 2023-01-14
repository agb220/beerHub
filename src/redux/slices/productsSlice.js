import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProductsStatus",
  async (params) => {
    const { search, category, currentPage } = params;
    const res = await axios.get(
      `http://localhost:3001/products?page=${currentPage}&${search}${category}`
    );
    return res.data;
  }
);

const initialState = {
  products: [],
  status: "loading",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
      state.products = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = "success";
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "error";
      state.products = [];
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
