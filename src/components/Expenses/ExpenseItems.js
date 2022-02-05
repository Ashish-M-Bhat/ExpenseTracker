import { useEffect, useState} from "react";
import "./ExpenseItems.css";
import ExpenseDates from "./ExpenseDates";
import Card from '../UI/Card'

function ExpenseItems(props) {

  //const [title, setTitle] = useState(props.title)
  return (
    <Card className="expense-item">
      <ExpenseDates date={props.date}/>

      <div className="expense-item__description">
        <h2>{props.title} </h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
    </Card>
  );
}

export default ExpenseItems;
