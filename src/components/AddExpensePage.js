import ExpenseForm from "./ExpenseForm";
import React from "react";
import { addExpense } from "../actions/expenses";
import { connect } from "react-redux";

const AddExpensePage = props => (
  <div>
    <h3>Add Expense</h3>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(addExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
