import React from "react";
import image1 from "../assets/carTech.svg";
import image2 from "../assets/olx.svg";
import image3 from "../assets/carwala.svg";
import image4 from "../assets/bikewala.svg";
import image5 from "../assets/carTraade.svg";
import image6 from "../assets/mobility.svg";

import "./footer3.css";

const Footer3 = () => {
  return (
    <div className="footer3Container">
      <div className="img1">
        <img src={image1}></img>
      </div>
      <div className="img2">
        <img src={image2}></img>
      </div>
      <div className="img3">
        <img src={image3}></img>
      </div>
      <div className="img4">
        <img src={image4}></img>
      </div>
      <div className="img5">
        <img src={image5}></img>
      </div>
      <div className="img6">
        <img src={image6}></img>
      </div>
    </div>
  );
};
export default Footer3;
