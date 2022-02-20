import React, { useState } from "react";
import { ACTIONS } from "../../App";
import "../NewExpenses/ExpenseForm.css";

export default function EditExpenseForm(props) {
  // For Date to be seen in the Editing Form
  let currentDate = props.date;
  currentDate.setDate(currentDate.getDate());

  const [userInput, setUserInput] = useState({
    enteredTitle: props.title,
    enteredAmount: props.amount,
    enteredDate: currentDate,
  });
  
  // Handler for Remove Button
  const expenseRemovalButtonHandler = () => {
    const confirmExpenseRemoval = window.confirm(`Are you sure you want to remove the "${userInput.enteredTitle}"?`)
    confirmExpenseRemoval && props.dispatchExpenses({type:ACTIONS.REMOVE_EXPENSE, payload:{id:props.id}});
  };

  // Handler for Cancel Button
  const expenseEditCancelButtonHandler = () => {
    props.toggleOffEditFormHandler(true);
  };

  // Handler for Edit Title input
  const editTitleHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  // Handler for Edit Date input
  const editDateHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: new Date(event.target.value) };
    });
  };

  // Handler for Edit Amount input
  const editAmountHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  // Handler for Submit Button
  const editSubmitHandler = (event) => {
    event.preventDefault();
     const editedData = {
       id: props.id,
       title: userInput.enteredTitle,
       date: new Date(userInput.enteredDate),
       amount: +(userInput.enteredAmount)
     };
     // Close the form and pass the data up
     props.toggleOffEditFormHandler(true);
     props.dispatchExpenses({type:ACTIONS.EDIT_EXPENSE, payload:{expenseObject:editedData}});
     
  };
  return (
    <div>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={userInput.enteredTitle}
              onChange={editTitleHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2016-01-01"
              max="2022-31-12"
              value={userInput.enteredDate.toLocaleDateString("en-CA")}
              onChange={editDateHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="1"
              step="1"
              value={userInput.enteredAmount}
              onChange={editAmountHandler}
            />
          </div>
        </div>
        <button className="expense-item__remove" onClick={editSubmitHandler}>
          Save
        </button>
      </form>

      <div>
        <button
          className="expense-item__remove"
          onClick={expenseEditCancelButtonHandler}
        >
          Cancel
        </button>
        <button
          className="expense-item__remove "
          onClick={expenseRemovalButtonHandler}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
