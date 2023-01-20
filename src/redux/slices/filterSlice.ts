import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterSliceState {
  searchValue: string;
  categoryIndex: number;
  currentPage: number;
}

const initialState: FilterSliceState = {
  searchValue: "",
  categoryIndex: 0,
  currentPage: 1,
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
  },
});

export const { setCategoryIndex, setCurrentPage, setFilters, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
