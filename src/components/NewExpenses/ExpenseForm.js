import { useState } from "react";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //const [userInput, setUserInput] = {enteredTitle:'', enteredAmount: '', enteredDate:''};

  // Handlers for form inputs and submit button
  const titleAddHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*
        setUserInput({...userInput, enteredTitle: event.target.value}) // Don't use this
        setUserInput((prevState) => { return {...prevState, enteredTitle: event.target.value}}) // Fine!
    */
  };
  const amountAddHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateAddHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent the page from reloading on submit
    const inputObject = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: parseInt(enteredAmount),
    };
    props.onAddNewExpense(inputObject);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
    // console.log(enteredTitle); still shows older value since it's updated later
  };

  // Create a form with 3 inputs and a button
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleAddHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2016-01-01"
            max="2022-31-12"
            value={enteredDate}
            onChange={dateAddHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredAmount}
            onChange={amountAddHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button> Add expense</button>
      </div>
    </form>
  );
};

export default NewExpense;