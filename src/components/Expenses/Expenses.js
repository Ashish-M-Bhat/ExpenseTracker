import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2021");
  //const [expenses, setFilteredExpenses] = useState(props.expenses);

  const onYearSelected = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const ExpensesFilteredByYear = props.allExpenses.filter(
    (eachExpense) => eachExpense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onYearSelected={onYearSelected}
      />
      <ExpensesChart ExpensesFilteredByYear={ExpensesFilteredByYear} />
      <ExpensesList ExpensesFilteredByYear={ExpensesFilteredByYear} removeCurrentExpenseById={props.removeCurrentExpenseById} onEditExpense={props.onEditExpense}/>
    </Card>
  );
}

export default Expenses;
