import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Item from './pages/productDetail';
import Addproduct from './pages/productAdd';
import Postproduct from './pages/PostDetail';
function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item" element={<Item />} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/Addproduct/post" element={<Postproduct />} />
        </Routes>
     
    </div>
  );
}
export default App;
