import React, { useState } from 'react';
import './imageAdd.css';
import { CameraIcon } from 'lucide-react';

const ImageAdd = ({images,setImages}) => {
 

  const uploadImage = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);

  };
  
    console.log(images);
  const numberOfInputs = 20;

  return (
    <div className='imageContainer'>
      <h6 style={{ marginTop: "20px", marginLeft: "20px" }}>UPLOAD UP TO 20 PHOTOS</h6>
      <div className="custom-file-input">
        <div className='individualImages'>
          {Array.from({ length: numberOfInputs }).map((_, index) => (
            <div key={index} className='individualImg'>
              <label htmlFor={`file-input-${index}`}>
                <CameraIcon size="30" className="custom-icon" />
              </label>
              <input
                type="file"
                id={`file-input-${index}`}
                className="file-input"
                onChange={uploadImage}
                accept="image/*"
                multiple
              />
            </div>
          ))}
        </div>
      </div>
      <div className="imagePreview">
        {images.map((image, index) => (
          <img key={index} src={image} className="uploadedImage" />
        ))}
      </div>
    </div>
  );
};

export default ImageAdd;
