import "./calendar-buttons.css";
import React from "react";

const CalendarButtons = ({ setMonthsShown }) => {
  const expandCalendar = () => {
    setMonthsShown(3);
  };

  const collapseCalendar = () => {
    setMonthsShown(1);
  };

  return (
    <div className="calendar-buttons">
      <button className="btn" onClick={collapseCalendar}>
        -
      </button>
      <button className="btn" onClick={expandCalendar}>
        +
      </button>
    </div>
  );
};

export default CalendarButtons;
