import React from "react";
import "./productDetail.css";

import ProductImage from "./productdetailImage";
const ProductDetails = () => {
  return (
    <div className="productdetailsContainer">
      <div>
        <ProductImage/>
      </div>

      <div className="boxContainer">
        <div className="leftbox">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="rightbox"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default ProductDetails;
