import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // State to manage the forms toggle
  const [addNewExpenseButton, toggleForm] = useState(false);
  const [newId, setNewId] = useState(props.allExpenses[props.allExpenses.length-1].id + 1);

  // Handlers For buttons
  const addNewExpenseButtonHandler = (event) => {
    toggleForm(true);
  };
  const cancelNewExpenseButtonHandler = (event) => {
    toggleForm(false);
  };

  // State lifting from ExpenseForm.js
  const onAddNewExpense = (expenseObject) => {
    //console.log(props.allExpenses.length)
    const newExpense = { ...expenseObject, id: newId };
    setNewId(newId+1);
    props.onAddNewExpense(newExpense);
    // When a new expense is added, the form disappears as well
    toggleForm(false);
  };

  return (
    <div className="new-expense">
      {addNewExpenseButton === false && (
        <button onClick={addNewExpenseButtonHandler}>Add new Expense</button>
      )}
      {addNewExpenseButton === true && (
        <button onClick={cancelNewExpenseButtonHandler}>Cancel</button>
      )}

      {addNewExpenseButton === true && (
        <ExpenseForm onAddNewExpense={onAddNewExpense} />
      )}
    </div>
  );
};

export default NewExpense;
