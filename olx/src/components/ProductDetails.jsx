import React, { useContext } from "react";
import "./productDetail.css";
import ProductImage from "./productdetailImage";
import DataContext from "../context/DataContext";
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useContext(DataContext);

  // Find the selected item based on the id
  const selectedItem = data.find(item => item.id === id);

  if (!selectedItem) {
    return <div>Loading...</div>; // Placeholder for loading state or error handling
  }

  return (
    <div className="productDetailsContainer">
      <div>
        <ProductImage imageUrl={selectedItem.imageUrls} />
      </div>

      <div className="boxContainer">
        <div className="leftBox">
          <div className="namex">{selectedItem.title}</div>

          <div className="smallBox">
            <h4>Overview</h4>
            <hr></hr>
            <div className="smallBoxCont">
            <div className="yearOfx">{selectedItem.Year}</div>
          <div className="kilometerDrivenx">{selectedItem.kilometerDriven} km</div>
          <div className="locationx">{selectedItem.location}</div>
          <div className="postedx">TODAY</div>
            </div>
    
          </div>
     
       
          <div className="descriptionx">
            <h4>Description</h4>
            <hr></hr>
            {selectedItem.description}</div>
        </div>

        <div className="rightBox">
       
          <div className="pricex">₹ {selectedItem.price}
            <div className="pricebtn ">
            <button>MAKE OFFER</button>
            </div>
           
          </div>
      

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
