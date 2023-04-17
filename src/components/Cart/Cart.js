import React from "react";
import classes from "./Cart.module.css";

function Cart(props) {
  return (
    <div className={classes.cart}>
      <div>
        <p>Sushi</p>
      </div>
      <div className={classes.total}>
        <h2>Total Amount</h2>
        <h2>34.22</h2>
      </div>
      <div className={classes.actions}>
        <button>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
}

export default Cart;
