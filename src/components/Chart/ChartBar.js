import { useState } from "react/cjs/react.development";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barHeight = '0%';


  if (props.totalAmountSpentInMonth > 0) {
    if(props.barsPosition === "Relative")
      barHeight = Math.round((props.totalAmountSpentInMonth / props.totalAmountSpentInYear) * 100) + '%';
    else if (props.barsPosition === "Absolute")
    barHeight = Math.round((props.totalAmountSpentInMonth / props.maxAmountInYear) * 100) + '%';
  }
return (
  <div className='chart-bar'>
    <div className='chart-bar__inner'>
      
      <div
        className='chart-bar__fill'
        style={{ height: barHeight }}
      ></div>
    </div>
    <div className='chart-bar__label'>{props.label}</div>
  </div>
);
};

export default ChartBar;
