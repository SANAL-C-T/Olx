// LoginModal.jsx

import React, { useState, useRef,useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/loginEntryPointPost 1.svg";
import img2 from "../assets/loginEntryPointFavorite 1.svg";
import img3 from "../assets/loginEntryPointChat 1.svg";
import "./loginModal.css";
import { db, auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/authContext'



const LoginModal = ({ show, onHide }) => {
  const [clickSignUp, setClickSignUp] = useState(false);
  const [clickLogin, setClickLogin] = useState(false);
  const [hides, setHide] = useState(false);
  const { userLogged, setUserLogged } = useContext(AuthContext);

  const loginUsername = useRef();
  const loginPassword = useRef();

  const signUpName = useRef();
  const signUpEmail = useRef();
  const signUpPassword = useRef();
  const navigate = useNavigate();

  const handleSignupClick = () => {
    setClickSignUp(true);
    setClickLogin(false);
    setHide(true);
  };

  const handleLoginClick = () => {
    setClickLogin(true);
    setClickSignUp(false);
    setHide(true);
  };

  const handleCloseClick = () => {
    setClickSignUp(false);
    setClickLogin(false);
    setHide(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserLogged(true); // User is logged in
        onHide()
      } else {
        setUserLogged(false); // User is logged out
      }
    });

    return () => unsubscribe();
  }, [setUserLogged]);

console.log("userLogged:::",userLogged)
  
  const handleLoginSubmit = async () => {
    const email = loginUsername.current.value;
    const password = loginPassword.current.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in");
      setUserLogged(true);
     
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };



  
  const handleSignUpSubmit = async () => {
    const name = signUpName.current.value;
    const email = signUpEmail.current.value;
    const password = signUpPassword.current.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

     await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        userId: user.uid
      });

  
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };






  return (
    <div className="modalContainer">
      <Modal
        show={show}
        onHide={onHide}
        dialogClassName="custom-modal"
        size="sm"
      >
        <Modal.Header closeButton onClick={handleCloseClick}></Modal.Header>

        <Modal.Body>
          <Carousel className="imageCard" indicators={false}>
            <Carousel.Item className="carouselItem">
              <img src={img1} alt="First slide" />
              <Carousel.Caption className="carouselCaption"></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img src={img2} alt="Second slide" />
              <Carousel.Caption className="carouselCaption"></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img src={img3} alt="Third slide" />
              <Carousel.Caption className="carouselCaption"></Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <br />
          {!hides && (
            <Form className="ModalForm">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <div className="logEmail">
                  <br />
                  <div onClick={handleLoginClick}>Login with Email</div>
                </div>
                <br />
                <div className="logEmail">
                  <h6> OR</h6>
                  <br />
                  <div onClick={handleSignupClick}>Sign Up</div>
                </div>
              </Form.Group>
            </Form>
          )}

          {clickLogin && (
            <Modal.Body>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <h4>Login</h4>
                <br />
                <Form.Control type="email" placeholder="Email" autoFocus ref={loginUsername} />
                <br />
                <Form.Control type="password" placeholder="Password" autoFocus ref={loginPassword} />
                <br />
                <Button style={{ padding: "5px" }} onClick={handleLoginSubmit}>
                  Login
                </Button>
              </Form.Group>
            </Modal.Body>
          )}

          {clickSignUp && (
            <Modal.Body>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <h4>Sign Up</h4>
                <br />
                <Form.Control type="text" placeholder="Name" autoFocus ref={signUpName} />
                <br />
                <Form.Control type="email" placeholder="Email" autoFocus ref={signUpEmail} />
                <br />
                <Form.Control type="password" placeholder="Password" autoFocus ref={signUpPassword} />
                <br />
                <Button style={{ padding: "5px" }} onClick={handleSignUpSubmit}>
                  Sign up
                </Button>
              </Form.Group>
            </Modal.Body>
          )}
        </Modal.Body>

        <Modal.Footer>
          <div className="footer">
            <div className="foot11">
              All your personal details are safe with us.
            </div>
            <div className="foot2">
              If you continue, you are accepting OLX Terms and Conditions and
              Privacy Policy
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginModal;
