import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";

const ExpensesList = (props) => {  
  if (props.ExpensesFilteredByYear.length === 0) {
    return <h2 className="expenses-list__fallback">Nothing to display!</h2>;
  } else
    return (
      <ul className="expenses-list">
        {props.ExpensesFilteredByYear.map((eachExpense) => {
          return (
            <ExpenseItems
              key={eachExpense.id}
              id={eachExpense.id}
              title={eachExpense.title}
              amount={eachExpense.amount}
              date={eachExpense.date}
              dispatchExpenses={props.dispatchExpenses}
            />
          );
        })}
      </ul>
    );
};
export default ExpensesList;
