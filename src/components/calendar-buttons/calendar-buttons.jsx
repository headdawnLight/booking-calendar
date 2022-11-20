import "./calendar-buttons.css";
import React from "react";

const CalendarButtons = ({ monthsShown, setMonthsShown }) => {
  const expandCalendar = () => {
    switch (monthsShown) {
      case 1:
        return setMonthsShown(3);

      case 3:
        return setMonthsShown(6);

      case 6:
        return setMonthsShown(9);

      case 9:
        return setMonthsShown(12);

      default:
        return setMonthsShown(1);
    }
  };

  const collapseCalendar = () => {
    setMonthsShown(1);
  };

  return (
    <div className="calendar-buttons">
      <button className="btn" onClick={collapseCalendar}>
        -
      </button>

      <span className="txt">aylık gösterim</span>

      <button className="btn" onClick={expandCalendar}>
        +
      </button>
    </div>
  );
};

export default CalendarButtons;
