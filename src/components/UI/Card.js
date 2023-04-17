import classes from "./Card.module.css";

function Card(props) {
  const cla = `${classes.card} ${props.className}`;
  return <div className={cla}>{props.children}</div>;
}

export default Card;
