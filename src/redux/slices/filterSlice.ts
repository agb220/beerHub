import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "./productsSlice";

export interface FilterSliceState {
  searchValue: string;
  categoryIndex: number;
  currentPage: number;
  type: Products[];
}

const initialState: FilterSliceState = {
  searchValue: "",
  categoryIndex: 0,
  currentPage: 1,
  type: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryIndex(state, action: PayloadAction<number>) {
      state.categoryIndex = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.currentPage = Number(action.payload.currentPage);
      state.categoryIndex = Number(action.payload.categoryIndex);
    },
    setTypes(state, action: PayloadAction<Products[]>) {
      state.type = action.payload;
    },
  },
});

export const {
  setCategoryIndex,
  setCurrentPage,
  setFilters,
  setSearchValue,
  setTypes,
} = filterSlice.actions;

export default filterSlice.reducer;
