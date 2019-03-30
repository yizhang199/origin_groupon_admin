import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";

import { setEndDate, setStartDate } from "../../_actions";
import { makeDate } from "../../_helpers";

const DateRanger = ({ startDate, endDate, setStartDate, setEndDate }) => {
  const handleChangeEnd = e => {
    const newDate = new Date(e);

    setEndDate(newDate);
  };
  const handleChangeStart = e => {
    const newDate = new Date(e);

    setStartDate(newDate);
  };
  if (!startDate || !endDate) {
    return <div className="component-date-ranger">loading...</div>;
  }
  return (
    <div className="component-date-ranger">
      <label>
        <DatePicker
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={handleChangeStart}
        />
        <i className="material-icons">date_range</i>
        <div className="component-date-ranger__text">
          <span className="component-date-ranger__text__title">start date</span>
          <span className="component-date-ranger__text__value">
            {makeDate(startDate)}
          </span>
        </div>
      </label>

      <label>
        <DatePicker
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          onChange={handleChangeEnd}
        />
        <i className="material-icons">date_range</i>
        <div className="component-date-ranger__text">
          <span className="component-date-ranger__text__title">end date</span>
          <span className="component-date-ranger__text__value">
            {makeDate(endDate)}
          </span>
        </div>
      </label>
    </div>
  );
};
const mapStateToProps = ({ startDate, endDate }) => {
  return { startDate, endDate };
};
export default connect(
  mapStateToProps,
  { setEndDate, setStartDate }
)(DateRanger);
