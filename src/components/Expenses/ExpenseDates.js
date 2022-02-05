import "./ExpenseDates.css";

function ExpenseDates(props) {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const day = props.date.getDate();
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDates;
