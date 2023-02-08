import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterSliceState {
  searchValue: string;
  categoryIndex: number;
  currentPage: number;
  type: number | null;
  selectedType: boolean;
  brand: string | null;
}

const initialState: FilterSliceState = {
  searchValue: "",
  categoryIndex: 0,
  currentPage: 1,
  type: null,
  selectedType: false,
  brand: null,
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
      state.type = action.payload.type;
    },
    setType(state, action: PayloadAction<number>) {
      state.type = action.payload;
    },
    setSelectedType(state, action: PayloadAction<boolean>) {
      state.selectedType = action.payload;
    },
    setBrand(state, action: PayloadAction<string>) {
      state.brand = action.payload;
    },
  },
});

export const {
  setCategoryIndex,
  setCurrentPage,
  setFilters,
  setSearchValue,
  setType,
  setSelectedType,
  setBrand,
} = filterSlice.actions;

export default filterSlice.reducer;
