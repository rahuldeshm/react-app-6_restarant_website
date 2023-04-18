import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import DataContext from "../../store/data-context";

function Cart(props) {
  const ctx = useContext(DataContext);
  let price = 0;
  const cartItems = (
    <div>
      {ctx.cartitemlist.map((e, index) => {
        price = price + e.price * e.amount;
        return <CartItem key={index + "cart"} e={e} index={index}></CartItem>;
      })}
    </div>
  );

  function ordering() {
    console.log("Ordering");
  }

  return (
    <Modal onClick={props.closeHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${price.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.closeHandler}>Close</button>
        <button onClick={ordering}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
