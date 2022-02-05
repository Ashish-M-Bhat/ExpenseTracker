import "../Expenses/ExpensesFilter.css";

const PositionBars = (props) => {
  const positioningBarsHandler = (event) => {
    event.preventDefault();
    props.positioningBars(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label></label>
        <select value={props.barsPosition} onChange={positioningBarsHandler}>
          <option value="Absolute">Absolute</option>
          <option value="Relative">Relative</option>
        </select>
      </div>
    </div>
  );
};
export default PositionBars;
