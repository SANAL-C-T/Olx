import React from "react";
import "./card.css";
import imagess from "../assets/image.jpeg";
import { Heart } from "lucide-react";
import { useNavigate } from 'react-router-dom';
const Card = () => {
  const items = useNavigate();

const handleitem=()=>{
  items('/ProductDetail');
}



  return (
    <div className="cardContainer">
        
      <div className="actualCard" onClick={handleitem}>
      <div className="heart">< Heart size="24" color="black" /></div>
        <div className="imageof">
          <img src={imagess} alt=""></img>
        </div>
        <div className="price">₹ 100000</div>
        <div className="year">2015 - 110000 km</div>
        <div className="name">BMW (Petrol)</div>
        <div className="location">DEVINAGAR, KOLLAM</div>
        <div className="posted">TODAY</div>
      </div>
    </div>
  );
};
export default Card;
