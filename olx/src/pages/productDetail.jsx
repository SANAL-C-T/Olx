import React from 'react'
import Nav from "../components/Navbar";
import SecondNav from "../components/SecondNav";
import ProductDetails from '../components/ProductDetails';

import Footer2 from "../components/footer2";
import Footer3 from "../components/footer3";
 const productDetail = () => {
  return (
    <div className='productDetail'>
   <Nav />
      <SecondNav />
     
     <ProductDetails/>
      <Footer2 />
      <Footer3 />
    </div>
  )
}
export default productDetail;