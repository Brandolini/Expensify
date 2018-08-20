import "react-dates/initialize";

import React, { Component } from "react";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from "../actions/filters";

import { DateRangePicker } from "react-dates";
import DefaultTheme from "react-dates/lib/theme/DefaultTheme";
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import { connect } from "react-redux";

ThemedStyleSheet.registerTheme(DefaultTheme);

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => this.props.dispatch(setTextFilter(e.target.value))}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount(e.target.value));
            } else if (e.target.value === "date") {
              this.props.dispatch(sortByDate(e.target.value));
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          endDate={this.props.filters.endDate}
          startDate={this.props.filters.startDate}
          onDatesChange={this.onDatesChange}
          endDateId="your_unique_end_date_id"
          startDateId="your_unique_start_date_id"
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};
export default connect(mapStateToProps)(ExpenseListFilters);
