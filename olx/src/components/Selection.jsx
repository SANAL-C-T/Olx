import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

import "./selection.css";
import { ChevronRight } from "lucide-react";

const categories = {
  Cars: ["Car"],
  Properties: [
    "For Sale: Houses & Apartments",
    "For Rent: Houses & Apartments",
    "Lands & Plots",
    "For Rent: Shops & Offices",
    "For Sale: Shops & Offices",
    "PG & Guest Houses",
  ],
  Mobiles: ["Mobile Phones", "Accessories", "Tablets"],
  Jobs: [
    "Data entry & Back office",
    "Sales & Marketing",
    "BPO & Telecaller",
    "Driver",
    "Office Assistant",
    "Delivery & Collection",
    "Teacher",
    "Cook",
    "Receptionist & Front office",
    "Operator & Technician",
    "IT Engineer & Developer",
    "Hotel & Travel Executive",
    "Accountant",
    "Designer",
    "Other Jobs",
  ],
  Bikes: ["Motorcycles", "Scooters", "Spare Parts", "Bicycles"],
  "Electronics & Appliances": [
    "TVs",
    "Video - Audio",
    "Kitchen & Other Appliances",
    "Computers & Laptops",
    "Cameras & Lenses",
    "Games & Entertainment",
    "Fridges",
    "Computer Accessories",
    "Hard Disks, Printers & Monitors",
    "ACs",
    "Washing Machines",
  ],
  "Commercial Vehicles & Spares": [
    "Commercial & Other Vehicles",
    "Spare Parts"
  ],
  Furniture: [
    "Sofa & Dining",
    "Beds & Wardrobes",
    "Home Decor & Garden",
    "Kids Furniture",
    "Other Household Items"
  ],
  Fashion: ["Men", "Women", "Kids"],
  "Books, Sports & Hobbies": [
    "Books",
    "Gym & Fitness",
    "Musical Instruments",
    "Sports Equipment",
    "Other Hobbies"
  ],
  Pets: [
    "Fishes & Aquarium",
    "Pet Food & Accessories",
    "Dogs",
    "Other Pets"
  ],
  Services: [
    "Education & Classes",
    "Tours & Travel",
    "Electronics Repair & Services",
    "Health & Beauty",
    "Home Renovation & Repair",
    "Cleaning & Pest Control",
    "Legal & Documentation Services",
    "Packers & Movers",
    "Other Services"
  ],
};

const Selection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  //this state is used to control the display style of the sub category.

const Navigate=useNavigate();


const handleclick=()=>{
    //this function takes the user to the add details page, its given as a new route.
    Navigate('/Addproduct/post');
}



  return (
    <div className="selectorContainer">
      <div className="choose">
        <h5>CHOOSE A CATEGORY</h5>
      </div>

      <div className="chooseContainer">
        <div className="sideleft">
          {Object.keys(categories).map((cat, index) => (
            <div 
              key={index} 
              className="theitem" 
              onClick={() => setSelectedCategory(cat)}
            >
              {cat} <ChevronRight />
            </div>
          ))}
        </div>

        <div className="sideright">
          {selectedCategory && categories[selectedCategory].map((subcat, subIndex) => (
            <div className="theitem" key={subIndex} onClick={handleclick}>{subcat}  </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selection;
