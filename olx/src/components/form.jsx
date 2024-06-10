import React, { useState, useRef } from "react";
import "./form.css";
import carData from "../Staticdata/car";
import ImageAdder from "../components/imageAdd";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Form = () => {
  const [selectedBrand, setBrand] = useState("");
  const [selectModel, setBrandModel] = useState([]);
  const [choosedModel, setChoosedModel] = useState("");
  const [images, setImages] = useState([]);
  const vehicleYear = useRef();
  const kilometerDriven = useRef();
  const title = useRef();
  const description = useRef();
  const price = useRef();
  const location = useRef();

  const handleBrandChange = (e) => {
    const inData = e.target.value;
    setBrand(inData);
    setBrandModel(carData[inData] || []);
  };

  const handleModelChange = (e) => {
    const modelData = e.target.value;
    setChoosedModel(modelData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    const vehicleYearValue = vehicleYear.current.value;
    const titleValue = title.current.value;
    const descriptionValue = description.current.value;
    const priceValue = price.current.value;
    const locationValue = location.current.value;
    const kilometerDrivenValue = kilometerDriven.current.value;

    try {
    
        // Upload images to Firebase Storage and get URLs
        const imageUrls = await Promise.all(
          images.map(async (image, index) => {
            const imageRef = ref(storage, `images/${date.getTime()}_${index}_${image.name}`);
            await uploadBytes(imageRef, image);
            const url = await getDownloadURL(imageRef);
            return url;
          })
        );
  
        console.log("Image URLs:", imageUrls);
  

      // Add form data and image URLs to Firestore
      const docRef = await addDoc(collection(db, "items"), {
        brand: selectedBrand,
        model: choosedModel,
        Year: vehicleYearValue,
        title: titleValue,
        description: descriptionValue,
        price: priceValue,
        location: locationValue,
        kilometerDriven: kilometerDrivenValue,
        imageUrls: imageUrls,
        DateOfPost: date,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="formAddData">
      <form onSubmit={handleSubmit} className="formSection">
        <div className="formHeading">
          <h5>SELECTED CATEGORY</h5>
        </div>

        <h6 style={{ marginLeft: "20px", marginTop: "20px" }}>INCLUDE SOME DETAILS</h6>
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
          <select className="Models" onChange={handleModelChange}>
            <option value=""></option>
            {selectModel.map((model, index) => (
              <option className="selectBrand" key={index} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        <div className="year">
          <h6 style={{ marginTop: "20px" }}>Year *</h6>
          <input className="yearInput" ref={vehicleYear} placeholder=""></input>
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
          <h6 style={{ marginTop: "20px", marginLeft: "20px" }}>Transmission *</h6>
          <div className="transContainer">
            <div className="transbubble">Automatic</div>
            <div className="transbubble">Manual</div>
          </div>
        </div>

        <div className="km">
          <h6 style={{ marginTop: "20px", marginLeft: "20px" }}>KM driven *</h6>
          <input type="tel" ref={kilometerDriven} className="kmInput" placeholder=""></input>
        </div>

        <div className="owners">
          <h6 style={{ marginTop: "20px", marginLeft: "20px" }}>No. of Owners *</h6>
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
          <input type="textarea" ref={title}></input>
          <h6 style={{ marginLeft: "20px", fontSize: "x-small" }}>
            Mention the key features of your item (e.g. brand, model, age, type) 0 / 70
          </h6>
        </div>

        <div className="descriptionContainer">
          <h6 style={{ marginTop: "20px", marginLeft: "20px" }}>Description</h6>
          <input type="textarea" ref={description}></input>
          <h6 style={{ marginLeft: "20px", fontSize: "x-small" }}>
            A minimum length of 10 characters is required. Please edit the field. 0 / 4096
          </h6>
        </div>

        <div className="priceContainer">
          <h6 style={{ marginTop: "20px", marginLeft: "20px" }}>SET A PRICE</h6>
          <input className="priceInput" placeholder="" ref={price}></input>
        </div>

        <ImageAdder images={images} setImages={setImages} />

        <div className="priceContainer">
          <h6 style={{ marginTop: "20px", marginLeft: "20px" }}>CONFIRM YOUR LOCATION</h6>
          <input className="priceInput" placeholder="" ref={location}></input>
        </div>

        <div className="postbutton">
          <button type="submit">Post now</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
