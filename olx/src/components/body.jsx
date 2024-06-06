import React from 'react'
import Card from './card';
import './body.css'

 const Body = () => {
  return (
    <div>
    
    <div className='bodyContainer'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        
        <div  className='loadmore'>
        <button className='loadmorebtn'>Load more</button>
        </div>
       
    </div>
  )
}

export default Body;