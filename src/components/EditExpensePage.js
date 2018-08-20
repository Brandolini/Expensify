import { editExpense, removeExpense } from "../actions/expenses";

import ExpenseForm from "./ExpenseForm";
import React from "react";
import { connect } from "react-redux";

const EditExpensePage = props => {
  console.log(props);
  return (
    <div>
      <p>Editing expense with id {props.match.params.id}</p>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.match.params.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={({ id }) => {
          props.dispatch(removeExpense({ id: props.match.params.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};
export default connect(mapStateToProps)(EditExpensePage);
