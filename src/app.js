import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

import React, { Component } from "react";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from "./actions/filters";

import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water bill", amount: 3000, createdAt: 4000 })
);
store.dispatch(
  addExpense({ description: "Gas Bill", amount: 4000, createdAt: 500000 })
);
store.dispatch(addExpense({ description: "Enema Bill", amount: 200000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// console.log(store.getState());
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
