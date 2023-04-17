import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "e1", name: "Shshi", amount: 2, price: 12.99 }].map((e) => (
        <li>{e.name}</li>
      ))}
    </ul>
  );
  function closeHandler() {
    props.closeHandler();
  }
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>223.23</span>
      </div>
      <div className={classes.actions}>
        <button onClick={closeHandler}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
