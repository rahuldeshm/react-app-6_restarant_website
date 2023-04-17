import React, { useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [amount, setAmount] = useState(1);
  function onChangeHandler(e) {
    e.preventDefault();
    setAmount(e.target.value);
  }
  function onAddHandler(e) {
    e.preventDefault();
    props.onClickAdd(amount);
    setAmount(1);
  }
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          value: amount,
          onChange: onChangeHandler,
          id: `Amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
        }}
      />
      <button onClick={onAddHandler}>+Add</button>
    </form>
  );
}

export default MealItemForm;
