import { useState } from "react";
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

function App() {
  const [expenses, setExpenses] = useState(EXPENSES);

  // State Lifting from NewExpense
  const onAddNewExpense = (expenseObject) => {
    setExpenses((prevExpenses) => {
      return [expenseObject, ...prevExpenses];
    });
  };

  const removeCurrentExpenseById = (idOfExpenseToBeRemoved) => {
    setExpenses((prevExpenses) => {
      const findIndex = prevExpenses.findIndex(
        (a) => a.id === idOfExpenseToBeRemoved
      );
      // Always finds the id though.
      findIndex !== -1 && prevExpenses.splice(findIndex, 1);
      return [...prevExpenses];
    });
  };

  const onEditExpense = (expenseObject) => {
    setExpenses((prevExpenses) => {
      const findIndex = prevExpenses.findIndex(
        (a) => a.id === expenseObject.id
      );

      // Always finds the id though.
      if (findIndex !== -1) {
        expenses[findIndex].title = expenseObject.title;
        expenses[findIndex].date = expenseObject.date;
        expenses[findIndex].amount = expenseObject.amount;
      }
      return [...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense allExpenses={expenses} onAddNewExpense={onAddNewExpense} />
      <Expenses
        allExpenses={expenses}
        onEditExpense={onEditExpense}
        removeCurrentExpenseById={removeCurrentExpenseById}
      />
    </>
  );
}

export default App;
