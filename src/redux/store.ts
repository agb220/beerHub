import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import productsSlice from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    filterSlice: filterSlice,
    cartSlice: cartSlice,
    productsSlice: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
