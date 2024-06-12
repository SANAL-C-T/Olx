import React from "react";
import "./card.css";
import { Heart } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Card = ({ details }) => {
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/ProductDetail/${id}`); // Navigate to ProductDetail page with item ID
  };

  return (
    <div className="cardContainer">
      {details.map((item, idx) => (
        <div key={idx} className="actualCard" onClick={() => handleItemClick(item.id)}>
          <div className="heart">
            <Heart size={24} color="black" />
          </div>
          <div className="imageof">
            <img src={item.imageUrls} alt={item.title} />
          </div>
          <div className="price">₹ {item.price}</div>
          <div className="year">{item.Year} - {item.kilometerDriven} km</div>
          <div className="name">{item.title}</div>
          <div className="location">{item.location}</div>
          <div className="posted">TODAY</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
