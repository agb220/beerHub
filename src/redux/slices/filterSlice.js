import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  categoryIndex: 0,
  currentPage: 1,
  searchValue: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryIndex(state, action) {
      state.categoryIndex = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.categoryIndex = Number(action.payload.categoryIndex);
    },
  },
});

export const { setCategoryIndex, setCurrentPage, setFilters, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
