import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import DataContext from "../../store/data-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(DataContext);
  return (
    <button className={classes.button} onClick={props.openHandler}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span className="">My Cart</span>
      <span className={classes.badge}>{ctx.noOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
