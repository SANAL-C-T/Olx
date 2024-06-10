// LoginModal.jsx

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/loginEntryPointPost 1.svg";
import img2 from "../assets/loginEntryPointFavorite 1.svg";
import img3 from "../assets/loginEntryPointChat 1.svg";
import "./loginModal.css";

const LoginModal = ({ show, onHide }) => {
  return (
    <div className="modalContainer">
      <Modal
        show={show}
        onHide={onHide}
        dialogClassName="custom-modal"
        size="sm"
      >
        <Modal.Header closeButton></Modal.Header>
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
          <br></br>
          <Form className="ModalForm">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="tel"
                placeholder="Continue with phone"
                autoFocus
              />

              <br></br>
              <Form.Control
                type="tel"
                placeholder="Continue with Google"
                autoFocus
              />
 <br></br>
              <div className="logEmail">
                <h6> OR</h6>
                <br></br>
                <p>Login with Email</p>
              </div>
            </Form.Group>
          </Form>
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
