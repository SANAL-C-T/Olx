import React, { useState,useContext } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/olxLogo.svg";
import lenss from "../assets/plainSearch.svg";
import arrowDown from "../assets/chevDown.svg";
import blocklens from "../assets/Screenshot 2024-06-06 152940 1.svg";
import sell from "../assets/Frame 1.svg";
import LoginModal from "./LoginModal";
import "./nav.css";
import AuthContext from "../context/authContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
const {userLogged,setUserLogged} =useContext(AuthContext )
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const seller = useNavigate();

const handleSell=()=>{
  seller('/Addproduct')
}


const handleLogout = async () => {
  try {
      await signOut(auth);
      setUserLogged(false)
      console.log("User logged out successfully");
  } catch (error) {
      console.error("Error logging out:", error);
  }
};


  return (
    <div className="fullNav">
      <div className="logos">
        <img src={logo} alt="logo" />
      </div>

      <div className="locations">
        <div className="lenss">
          <img src={lenss} alt="lenss" />
        </div>
        <div className="inputfieds">
          <input placeholder="" value="india" />
        </div>
        <div className="arrowdown">
          <img src={arrowDown} alt="arrowDown" />
        </div>
      </div>

      <div className="search">
        <div className="searchbar">
          <input placeholder="" value="Find Cars, Mobile Phones and more..." />
        </div>
        <div className="lens">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>

      <div className="language">
        <div className="lang">
          <h6>ENGLISH</h6>
        </div>
        <div className="arrow">
          <img src={arrowDown} alt="arrowDown" />
        </div>
      </div>


      {userLogged === false ? (
  <div className="login">
    <span onClick={handleShow}>Login</span>
  </div>
) : (
  <div className="login">
    <span onClick={handleLogout}>Logout</span>
  </div>
)}

      

      <LoginModal show={showModal} onHide={handleClose} />

      <div className="sell">
        <div className="buttons" onClick={handleSell}>
          <img src={sell} alt="sell" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
