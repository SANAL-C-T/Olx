import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Item from './pages/productDetail';
import Addproduct from './pages/productAdd';
import Postproduct from './pages/PostDetail';
import ProductDetail from './pages/productDetail';
import DataContextProvider from './context/Dataprovider';
import AuthContextProvider  from './context/authProvider'
function App() {
  return (
    <AuthContextProvider>
    <DataContextProvider>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item" element={<Item />} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/Addproduct/post" element={<Postproduct />} />
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        </Routes>
    
    </DataContextProvider>
    </AuthContextProvider>
  );
}

export default App;
