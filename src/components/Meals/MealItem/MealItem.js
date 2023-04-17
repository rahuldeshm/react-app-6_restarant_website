import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemform";

function MealItem(props) {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <p className={classes.discription}>{props.discription}</p>
        <h3 className={classes.price}>{`$${props.price.toFixed(2)}`}</h3>
      </div>
      <MealItemForm id={props.id}></MealItemForm>
    </li>
  );
}

export default MealItem;
