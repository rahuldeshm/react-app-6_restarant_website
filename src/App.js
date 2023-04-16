import React from "react";
import Header from "./components/Layout/Header";
import MealsSummery from "./components/Meals/MealsSummery";
import AvailableMeals from "./components/Meals/AvailableMeals";

function App() {
  return (
    <>
      <Header></Header>
      <MealsSummery></MealsSummery>
      <AvailableMeals />
    </>
  );
}

export default App;
