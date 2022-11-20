import "./calendar-buttons.css";
import React from "react";

const CalendarButtons = ({ setMonthsShown }) => {
  const onChangeHandler = (event) => {
    switch (event.target.innerText) {
      case "1":
        return setMonthsShown(1);

      case "3":
        return setMonthsShown(3);

      case "6":
        return setMonthsShown(6);

      case "9":
        return setMonthsShown(9);

      case "12":
        return setMonthsShown(12);

      default:
        return setMonthsShown(1);
    }
  };

  const btnTexts = [1, 3, 6, 9, 12];

  return (
    <div className="calendar-buttons">
      <span className="txt">aylık gösterim: </span>

      {btnTexts.map((text, i) => (
        <button key={i} className="btn" onClick={onChangeHandler}>
          {text}
        </button>
      ))}
    </div>
  );
};

export default CalendarButtons;
