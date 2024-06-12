import React, { useState } from "react";
import Card from "./card";
import "./body.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Body = () => {
  const { data, limit, setLimit } = useContext(DataContext);

  const handleLimit = () => {
   
  setLimit(prev=>prev+8)
    }
  

  return (
    <div>
      <div className="bodyContainer">
        <div className="bodyContainer">{<Card key={55} details={data} />}</div>
      </div>

      <div className="loadmore">
        <button className="loadmorebtn" onClick={handleLimit}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default Body;
