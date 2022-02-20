import { useState, useReducer } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const EXPENSES = [
  {
    id: 0,
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 1, title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 2,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 3,
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export const ACTIONS = {
  ADD_EXPENSE: 'add-expense',
  EDIT_EXPENSE: 'edit-expense',
  REMOVE_EXPENSE:'remove-expense'
};

const expensesReducer = (expensesState, action) =>{
  switch(action.type)
  {
    case ACTIONS.ADD_EXPENSE:
      return [action.payload.expenseObject, ...expensesState];

    case ACTIONS.EDIT_EXPENSE:
      const expenseObject = action.payload.expenseObject;
      const indexOfExpenseToEdit = expensesState.findIndex(e => e.id === expenseObject.id);
      if (indexOfExpenseToEdit !== -1) {
        expensesState[indexOfExpenseToEdit].title = expenseObject.title;
        expensesState[indexOfExpenseToEdit].date = expenseObject.date;
        expensesState[indexOfExpenseToEdit].amount = expenseObject.amount;
      }
      return [...expensesState];

    case ACTIONS.REMOVE_EXPENSE:
      return expensesState.filter(e => e.id !== action.payload.id);

    default: return expensesState;
  }
}

function App() {
  const [expensesState, dispatchExpenses] = useReducer(expensesReducer, EXPENSES);

  return (
    <>
      <NewExpense allExpenses={expensesState} dispatchExpenses={dispatchExpenses}/>
      <Expenses
        allExpenses={expensesState}
        dispatchExpenses={dispatchExpenses}
      />
    </>
  );
}

export default App;
