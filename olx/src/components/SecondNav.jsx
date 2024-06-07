import React from "react";
import { useState } from "react";
import "./secondNav.css";
import DropDownMenu from '../components/DropDownMenu'
import { ChevronDownIcon } from "lucide-react";

const SecondNav = () => {

const[show, setShow]=useState(false)

const navToggle=()=>{
  show===false?setShow(true):setShow(false)

}



  return (
    <div>
      <div className="secondNav">
        <div className="toggler" onClick={navToggle}>
        <li>ALL CATEGORIES</li>
        <li>
          <ChevronDownIcon size="24" />
        </li>
        </div>
    

        <li>Cars</li>

        <li>Motorcycles</li>

        <li>Mobile Phones</li>

        <li>For Sale: Houses & Apartments</li>

        <li>Scooters</li>

        <li>Commercial & Other Vehicles</li>

        <li>For Rent: Houses & Apartments</li>
      </div>

      <div className="thirdNav">
      <div className="thirdNav">
  {show ? <DropDownMenu /> : null}
</div>


      </div>
    </div>
  );
};
export default SecondNav;
