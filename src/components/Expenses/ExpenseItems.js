import React, { useState } from "react";

import "./ExpenseItems.css";
import ExpenseDates from "./ExpenseDates";
import Card from "../UI/Card";
import EditExpenseForm from "./EditExpenseForm";

function ExpenseItems(props) {
  const [editButtonVisible, toggleOffEditForm] = useState(true);
  
  const toggleOffEditFormHandler = (booleanForToggleEditForm)=>{
    toggleOffEditForm(booleanForToggleEditForm); // true, so hide the edit form
  }
  return (
    <Card className="expense-item">
      <ExpenseDates date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title} </h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <div>
        {/* Below code is for Editing the expenses*/}
        
        { // Editing form is invisible
          editButtonVisible === true && (
            <button
              className="expense-item__remove"
              onClick={() => toggleOffEditForm(false)}
            >
              Edit
            </button>
          )
        }
        {
          // Expense Editing section
          editButtonVisible === false && (
            <EditExpenseForm
              id={props.id}
              title={props.title}
              date={props.date}
              amount={props.amount}
              toggleOffEditFormHandler={toggleOffEditFormHandler}
              dispatchExpenses={props.dispatchExpenses}
            />
          )
        }
      </div>
    </Card>
  );
}

export default ExpenseItems;
