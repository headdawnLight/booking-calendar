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
  const [minDate] = useState(startDate);
  const [monthsShown, setMonthsShown] = useState(1);

  const booked = [new Date("2022-11-21")];
  const pendingPayment = [new Date("2022-11-22")];
  const checked = [new Date("2022-11-25")];

  const excludeDates = [...booked, ...pendingPayment];

  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-1": [...checked],
    },
    {
      "react-datepicker__day--highlighted-custom-2": [...pendingPayment],
    },
  ];

  return (
    <div className="app">
      <h1>Booking Calendar</h1>

      <div className="calendar-container">
        <StatusContainer />
        <CalendarButtons setMonthsShown={setMonthsShown} />

        <DatePicker
          inline
          locale={"tr"}
          onChange={(date) => setStartDate(date)}
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          minDate={minDate}
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
