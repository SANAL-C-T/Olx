import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './productImage.css'
function ProductdetailImage() {
  return (
    <Carousel interval={null} indicators={false}>
      <Carousel.Item className='CarouselImageContainer'>
        <img
          src="https://via.placeholder.com/800x400.png?text=First+Slide"
          alt="First slide"
         
        />
      </Carousel.Item>
   
    </Carousel>
  );
}

export default ProductdetailImage;
