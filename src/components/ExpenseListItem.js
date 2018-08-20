import { Link } from "react-router-dom";
import React from "react";
import moment from "moment";

const ExpenseListItem = ({ description, amount, id, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h4>{description}</h4>
      </Link>
      <p>
        amount: ${amount / 100}{" "}
        <span>
          {" "}
          -{" "}
          {moment(createdAt)
            .format("MMM Do, YYYY")
            .toString()}
        </span>
      </p>
    </div>
  );
};

export default ExpenseListItem;
