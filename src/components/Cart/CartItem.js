import { useContext } from "react";
import React from "react";
import classes from "./CartItem.module.css";
import DataContext from "../../store/data-context";

function CartItem(props) {
  const ctx = useContext(DataContext);
  const amountAdder = () => {
    ctx.removeItem("add", props.index);
  };
  const amountDeleter = () => {
    ctx.removeItem("delete", props.index);
  };
  return (
    <ul className={classes["cart-item"]}>
      <h2>{props.e.name} </h2>
      <div className={classes.summary}>
        <span className={classes.price}>{`$${props.e.price.toFixed(2)}`}</span>
        <h2>X</h2>
        <span className={classes.amount}>{` ${props.e.amount}`}</span>
      </div>

      <div className={classes.actions}>
        <button onClick={amountAdder}>+</button>
        <button onClick={amountDeleter}>-</button>
      </div>
    </ul>
  );
}

export default CartItem;
