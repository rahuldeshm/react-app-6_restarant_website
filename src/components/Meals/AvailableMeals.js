import React from "react";
import classes from "./Meals.module.css";
import Meal from "./Meal";

function AvailableMeals() {
  const mealsall = [
    { mealName: "Sushi", discription: "Finest fish and veggies", price: 22.99 },
    { mealName: "Schnitzel", discription: "A german speciality!", price: 15.5 },
    {
      mealName: "Barbecue Burger",
      discription: "American, raw,meaty",
      price: 12.99,
    },
    {
      mealName: "Green Bowl",
      discription: "Healthy and green...",
      price: 10.2,
    },
  ];
  return (
    <div className={classes.availablemeals}>
      {mealsall.map((e) => {
        return (
          <Meal
            mealName={e.mealName}
            discription={e.discription}
            price={e.price}
          ></Meal>
        );
      })}
    </div>
  );
}

export default AvailableMeals;
