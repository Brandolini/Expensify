// Grab imports

import ExpenseListItem from "../../components/ExpenseListItem";
import React from "react";
import expenses from "../fixtures/expenses";
import { shallow } from "enzyme";

// Render ExpenseListItem with fixture data
// Create Snapshot
test("should render ExpenseListItem with expense", () => {
  const expense = expenses[0];
  const wrapper = shallow(<ExpenseListItem {...expense} />);
  expect(wrapper).toMatchSnapshot();
});
