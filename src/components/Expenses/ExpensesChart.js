import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const dataForChart = [
    { label: "Jan", totalAmountSpentInMonth: 0 },
    { label: "Feb", totalAmountSpentInMonth: 0 },
    { label: "Mar", totalAmountSpentInMonth: 0 },
    { label: "Apr", totalAmountSpentInMonth: 0 },
    { label: "May", totalAmountSpentInMonth: 0 },
    { label: "Jun", totalAmountSpentInMonth: 0 },
    { label: "Jul", totalAmountSpentInMonth: 0 },
    { label: "Aug", totalAmountSpentInMonth: 0 },
    { label: "Sep", totalAmountSpentInMonth: 0 },
    { label: "Oct", totalAmountSpentInMonth: 0 },
    { label: "Nov", totalAmountSpentInMonth: 0 },
    { label: "Dec", totalAmountSpentInMonth: 0 },
  ];
  props.ExpensesFilteredByYear.forEach((eachExpense) => {
    const month = eachExpense.date.getMonth();
    dataForChart[month].totalAmountSpentInMonth += eachExpense.amount;
  });

  return (
  <Chart dataForChart={dataForChart} />
  );
};

export default ExpensesChart;
