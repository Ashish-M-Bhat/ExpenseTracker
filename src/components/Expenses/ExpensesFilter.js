import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const yearSelectHandler = (event) => {
    props.onYearSelected(event.target.value);
  };
//<label>Filter by year</label>
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label></label>
        <select value={props.selectedYear} onChange={yearSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
