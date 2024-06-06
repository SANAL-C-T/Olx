import React from "react";
import { useState } from "react";
import "./secondNav.css";
import DropDownMenu from '../components/DropDownMenu'
import { ChevronDownIcon } from "lucide-react";

const SecondNav = () => {
  return (
    <div>
      <div className="secondNav">
        <li>ALL CATEGORIES</li>
        <li>
          <ChevronDownIcon size="24" />
        </li>

        <li>Cars</li>

        <li>Motorcycles</li>

        <li>Mobile Phones</li>

        <li>For Sale: Houses & Apartments</li>

        <li>Scooters</li>

        <li>Commercial & Other Vehicles</li>

        <li>For Rent: Houses & Apartments</li>
      </div>

      <div className="thirdNav">

<DropDownMenu/>

      </div>
    </div>
  );
};
export default SecondNav;
