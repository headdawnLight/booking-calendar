import "./app.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import CalendarButtons from "../calendar-buttons/calendar-buttons";
import StatusContainer from "../status-container/status-container";
import DatePicker, { registerLocale } from "react-datepicker";
import { addMonths } from "date-fns";
import tr from "date-fns/locale/tr";
registerLocale("tr", tr);

const App = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate] = useState(null);
  const [monthsShown, setMonthsShown] = useState(1);

  const booked = [new Date("2022-11-21")];
  const checked = [new Date("2022-11-25")];
  const pendingPayment = [new Date("2022-11-22"), new Date("2022-11-23")];

  const excludeDates = [...booked, ...checked, ...pendingPayment];

  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-1": [...booked],
    },
    {
      "react-datepicker__day--highlighted-custom-2": [...checked],
    },
    {
      "react-datepicker__day--highlighted-custom-3": [...pendingPayment],
    },
  ];

  return (
    <div className="app">
      <h1>Booking Calendar</h1>

      <div className="calendar-container">
        <StatusContainer />

        <CalendarButtons
          monthsShown={monthsShown}
          setMonthsShown={setMonthsShown}
        />

        <DatePicker
          inline
          locale={"tr"}
          onChange={(date) => setStartDate(date)}
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          maxDate={addMonths(new Date(), 11)}
          monthsShown={monthsShown}
          excludeDates={excludeDates}
          highlightDates={highlightWithRanges}
        />
      </div>
    </div>
  );
};

export default App;
