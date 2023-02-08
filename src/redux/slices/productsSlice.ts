import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
// import { CartProduct } from "./cartSlice";

type FetchProductsArgs = {
  search: string;
  category: string;
  currentPage: number;
  typeSelected: string;
  brandSelected: string;
};

export type Products = {
  map(
    arg0: (typeProduct: Products, index: number) => JSX.Element
  ): import("react").ReactNode;
  id: string;
  name: string;
  img: string;
  brand: string;
  price: number;
  volume: number;
  style: string;
  type: string;
  ABV: number;
  IBU: number;
  lactose: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface ProductsSliceState {
  products: Products[];
  status: Status;
}

const initialState: ProductsSliceState = {
  products: [],
  status: Status.LOADING,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProductsStatus",
  async (params: FetchProductsArgs) => {
    const { search, category, currentPage, typeSelected, brandSelected } =
      params;
    const res = await axios.get<Products[]>(
      `http://localhost:3001/products?page=&${currentPage}&${search}?&${typeSelected}&${category}&${brandSelected}`
    );
    return res.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Products[]>) {
      state.products = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.products = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.products = [];
    });
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
