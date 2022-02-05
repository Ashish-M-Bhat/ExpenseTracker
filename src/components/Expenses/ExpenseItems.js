import React from "react";
import "./ExpenseItems.css";
import ExpenseDates from "./ExpenseDates";
import Card from '../UI/Card'

function ExpenseItems(props) {
  
  // Handler for the Remove Button. 
  // This passes the id of the expense to the function pointer(state lifting)
  const expenseRemovalButtonHandler = ()=>{
    props.removeCurrentExpenseById(props.id);
  }
  
  //const [title, setTitle] = useState(props.title)
  return (
    <Card className="expense-item">
      <ExpenseDates date={props.date}/>

      <div className="expense-item__description">
        <h2>{props.title} </h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <div>
        <button className="expense-item__remove" onClick={expenseRemovalButtonHandler}>Remove</button>
      </div>
    </Card>
  );
}

export default ExpenseItems;
