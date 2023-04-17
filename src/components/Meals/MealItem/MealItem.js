import DataContext from "../../../store/data-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemform";
import React, { useContext } from "react";

function MealItem(props) {
  const ctx = useContext(DataContext);
  function addHandler(e) {
    ctx.onAdd({
      id: props.id,
      name: props.mealName,
      price: props.price,
      amount: e,
    });
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <p className={classes.discription}>{props.discription}</p>
        <h3 className={classes.price}>{`$${props.price.toFixed(2)}`}</h3>
      </div>
      <MealItemForm id={props.id} onClickAdd={addHandler}></MealItemForm>
    </li>
  );
}

export default MealItem;
