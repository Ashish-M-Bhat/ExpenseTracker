import PositionBars from "./PositionBars";
import React, {useState} from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const [barsPosition, setBarsPosition] = useState("Relative");
  const positioningBars = (positioningType)=> {
    setBarsPosition(positioningType);
  }

  let totalAmountSpentInMonthArray = props.dataForChart.map(
    (eachData) => eachData.totalAmountSpentInMonth
  );
  
  const totalAmountSpentInYear = totalAmountSpentInMonthArray.reduce((a, b) => a + b, 0);
  const maxAmountInYear = Math.max(...totalAmountSpentInMonthArray);
  
  return (
    <>
    <PositionBars barsPosition={barsPosition} positioningBars={positioningBars} />
    <div className="chart">
      
      {props.dataForChart.map((eachData) => (
        <ChartBar
          key={eachData.label}
          totalAmountSpentInMonth={eachData.totalAmountSpentInMonth}
          label={eachData.label}
          maxAmountInYear={maxAmountInYear}
          totalAmountSpentInYear={totalAmountSpentInYear}
          barsPosition={barsPosition}
        />
      ))}
    </div>
    </>
  );
};
export default Chart;
