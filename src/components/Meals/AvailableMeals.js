import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const mealsall = [
  {
    id: "e1",
    mealName: "Sushi",
    discription: "Finest fish and veggies",
    price: 33.99,
  },
  {
    id: "e2",
    mealName: "Schnitzel",
    discription: "A germen speciality!",
    price: 16.99,
  },
  {
    id: "e3",
    mealName: "Barbecue Burger",
    discription: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "e4",
    mealName: "Green Bowl",
    discription: "Healthy.. and green...",
    price: 29.54,
  },
];
function AvailableMeals() {
  const mealsList = mealsall.map((e) => (
    <MealItem
      key={e.id}
      id={e.id}
      mealName={e.mealName}
      discription={e.discription}
      price={e.price}
    ></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
  // return (
  //   <div className={classes.availablemeals}>
  //     {mealsall.map((e) => {
  //       return (
  //         <Card>
  //           <MealItem
  //             key={e.id}
  //             mealName={e.mealName}
  //             discription={e.discription}
  //             price={e.price}
  //           ></MealItem>
  //         </Card>
  //       );
  //     })}
  //   </div>
  // );
}

export default AvailableMeals;
