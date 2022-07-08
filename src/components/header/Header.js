import React, { useState } from "react";
import { ImSpoonKnife } from "react-icons/im";
import { BsCartFill } from "react-icons/bs";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./head.css";
import Card from "../card/Card";
const Header = (props) => {
  const [mod, setMod] = useState(false);
  return (
    <div>
      <ul>
        <li>
          <ImSpoonKnife className="I" />
        </li>
        <li>
          <a href="#about">
            <h5>Food's Restaurant</h5>
          </a>
        </li>
        <li>
          <BsCartFill className="cart" onClick={() => setMod(!mod)} />
        </li>
      </ul>
      <Modal show={mod}>
        <Modal.Header>Thank You</Modal.Header>
        <Modal.Body>Total Cost : 0</Modal.Body>
        <Modal.Footer>
          <Link to="/thanku">
            <Button onClick={mod}>Save and Checkout</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Header;
