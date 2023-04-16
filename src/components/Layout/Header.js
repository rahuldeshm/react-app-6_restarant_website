import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1>ReactMeals</h1>
      <div>Your Cart {props.num}</div>
    </div>
  );
}

export default Header;
