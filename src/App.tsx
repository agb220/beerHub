import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/header/Header";
import Main from "./Main/Main";
import CartPage from "./Components/cart/CartPage";
import Footer from "./Components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
