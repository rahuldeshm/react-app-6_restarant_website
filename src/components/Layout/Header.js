import React from "react";
import mealsimage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>My Restaurant</h1>
        <HeaderCartButton openHandler={props.openHandler}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsimage} alt="Atable full of delicious food" />
      </div>
    </>
  );
}

export default Header;
