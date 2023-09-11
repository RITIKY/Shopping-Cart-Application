import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Component/About/About";
import Products from "./Component/Products/Products";
import Profile from "./Component/Profile/Profile";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Header/Header";
import { useState } from "react";
import data from "./database.json";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const addtocart = (item) => {};
  return (
    <>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/products"
              element={
                <Products addtocart={addtocart} />
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
    </>
  );
};

export default App;
