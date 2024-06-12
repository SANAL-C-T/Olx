import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './productImage.css'

function ProductdetailImage({ imageUrl }) {
  return (
    <Carousel interval={null} indicators={false}>
      {imageUrl.map((x, index) => (
        <Carousel.Item className="CarouselImageContainer" key={index}>
          <img
            src={x}
            alt={`Slide ${index}`}
            
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductdetailImage;
