// import { createStore, combineReducers, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import filtersReducer from "./reducers/filtersReducer";
// import productsReducer from "./reducers/productsReducer";
// import cartReducer from "./reducers/cartReducer";

// const rootReducer = combineReducers({
//   filtersReducer,
//   productsReducer,
//   cartReducer,
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    filterSlice: filterSlice,
    cartSlice: cartSlice,
    productsSlice: productsSlice,
  },
});

export default store;
