import React from 'react'

import apple from '../assets/appstore_2x.webp'
import play from '../assets/playstore_2x.webp'
import banner from '../assets/phone-app.webp'
import './foot.css'
 const Footer = () => {
  return (
    <div className='foot1'> 
<div className='images'>
<img src={banner} ></img>
</div>
<div className='footertext'>
<h3>TRY THE OLX APP</h3>
<h5>Buy, sell and find just about anything using the app on your mobile.</h5>
</div>
<div className="vertical-line"></div>
<div className='stores'>
<h5>GET YOUR APP TODAY</h5>
<div className='storesImage'>
<img src={apple}></img>
<img src={play}></img>
</div>

</div>
    </div>
  )
}
export default Footer;