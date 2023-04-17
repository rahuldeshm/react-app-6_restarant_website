import React from "react";

function MealItemForm(props) {
  return (
    <form>
      <label>Amount </label>
      <input type="number" placeholder={1}></input>
      <button>+Add</button>
    </form>
  );
}

export default MealItemForm;
