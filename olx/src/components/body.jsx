import React, { useState } from "react";
import Card from "./card";
import "./body.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Body = () => {
  const dataFromDB = useContext(DataContext);


  const handleLimit = () => {

const dataLnegth=dataFromDB.data.length;
    let num = 8+dataFromDB.limit;
    if(dataLnegth<8){ //this logic has to be corrected again
      dataFromDB.setLimit(dataLnegth)
    }else{
      dataFromDB.setLimit(num);
    }
   
  };

  return (
    <div>
      <div>
        {dataFromDB.data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.location}</p>
            <img src={item.imageUrls}></img>
          </div>
        ))}
      </div>

      <div className="bodyContainer">


      <div className="bodyContainer">
        {[...Array(dataFromDB.limit)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
     
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
