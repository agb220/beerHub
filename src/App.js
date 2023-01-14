import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Components/header/Header";
import Main from "./Main/Main";
import CartPage from "./Components/cart/CartPage";
import Footer from "./Components/footer/Footer";

import "./App.css";

// export const SearchContext = React.createContext();

function App() {
  // const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      {/* <SearchContext.Provider
      // value={{ searchValue, setSearchValue }}
      > */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/cartpage" element={<CartPage />} exact />
      </Routes>
      <Footer />
      {/* </SearchContext.Provider> */}
    </div>
  );
}

export default App;
