import classes from "./Meals.module.css";

function Meal(props) {
  return (
    <div className={classes.meal}>
      <h3>{props.mealName}</h3>
      <p>{props.discription}</p>
      <h3>{`$ ${props.price}`}</h3>
    </div>
  );
}

export default Meal;
