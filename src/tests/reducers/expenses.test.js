import expenses from "../fixtures/expenses";
import expensesReducer from "../../reducers/expenses";
import moment from "moment";

// should set default state
test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});
// should add expense
test("should add expense", () => {
  const newExpense = {
    id: "4",
    description: "Green Shamrocks",
    note: "",
    amount: 50000000,
    createdAt: moment(0).add(5, "days")
  };
  const action = { type: "ADD_EXPENSE", expense: newExpense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

// should edit expense
test("should edit expense", () => {
  const amount = 100;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

// should not edit expense if expense not found
test("should not edit expense", () => {
  const amount = 100;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// should remove expense
test("should remove expense by id", () => {
  const action = { type: "REMOVE_EXPENSE", id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});
// should not remove expenses if id not found
test("should not remove expense if not id", () => {
  const action = { type: "REMOVE_EXPENSE", id: -1 };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
