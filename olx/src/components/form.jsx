import React, { useState } from "react";
import "./form.css";
import carData from "../Staticdata/car";

const Form = () => {
  const [selectedBrand, setBrand] = useState("");
  const [selectBrand, setBrandModel] = useState([]);

  const handleBrandChange = (e) => {
    const inData = e.target.value;
    console.log("inData::", inData);
    setBrand(inData);
    setBrandModel(carData[inData] || []); // data[key]
    console.log(selectBrand);
  };

  return (
    <div className="formAddData">
      <div className="formSection">
        <div className="formHeading">
          <h5>SELECTED CATEGORY</h5>
        </div>

        <h6 style={{ marginLeft: "20px", marginTop: "20px" }}>
          INCLUDE SOME DETAILS
        </h6>
        <div className="brand">
          <h6 style={{ marginLeft: "20px", marginTop: "20px" }}>Brand *</h6>
          <select className="Models" onChange={handleBrandChange}>
            <option value=""></option>
            {Object.keys(carData).map((brand, index) => (
              <option className="selectBrand" key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="brand">
          <h6 style={{ marginLeft: "20px", marginTop: "20px" }}>Model *</h6>
          <select className="Models">
            <option value=""></option>
            {selectBrand.map((model, index) => (
              <option className="selectBrand" key={index} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        <div className="year">
          <h6 style={{ marginTop: "20px" }}>Year *</h6>
          <input className="yearInput" placeholder=""></input>
        </div>

        <div className="fuel">
          <h6 style={{ marginTop: "20px", marginLeft: "20px" }}>Fuel *</h6>
          <div className="fuelContainer">
            <div className="bubble">CNG & Hybrids</div>
            <div className="bubble">Diesel</div>
            <div className="bubble">Electric</div>
            <div className="bubble">LPG</div>
            <div className="bubble">Petrol</div>
          </div>
        </div>

        <div className="trans">
          <h6 style={{ marginTop: "20px", marginLeft: "20px" }}>
            Transmission *
          </h6>

          <div className="transContainer">
            <div className="transbubble">Automatic</div>
            <div className="transbubble">Manual</div>
          </div>
        </div>

        <div className="km">
          <h6 style={{ marginTop: "20px", marginLeft: "20px" }}>KM driven *</h6>
          <input type="tel" className="kmInput" placeholder=""></input>
        </div>

        <div className="owners">
          <h6 style={{ marginTop: "20px", marginLeft: "20px" }}>
            No. of Owners *
          </h6>

          <div className="ownerContainer">
            <div className="ownerbubble">1st</div>
            <div className="ownerbubble">2nd</div>
            <div className="ownerbubble">3rd</div>
            <div className="ownerbubble">4th</div>
            <div className="ownerbubble">4+</div>
          </div>
        </div>

        <div className="titleContainer">
          <h6 style={{ marginTop: "20px", marginLeft: "20px" }}>Ad title *</h6>
          <input type="textarea"></input>
          <h6 style={{ marginLeft: "20px", fontSize: "x-small" }}>
            Mention the key features of your item (e.g. brand, model, age, type)
            0 / 70
          </h6>
        </div>

        <div className="descriptionContainer">
          <div className=" *">
          <h6 style={{ marginTop: "20px", marginLeft: "20px" }}>Description</h6>

            <input type="textarea"></input>
            <h6 style={{ marginLeft: "20px", fontSize: "x-small" }}>
            A minimum length of 10 characters is required. Please edit the field.
            0 / 4096
          </h6>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
