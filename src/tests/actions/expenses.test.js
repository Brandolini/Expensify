import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123"
  });
});
test("should setup edit expense action object", () => {
  const action = editExpense("1234", { note: "testing" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "1234",
    updates: {
      note: "testing"
    }
  });
});
test("should setup add expense action object", () => {
  const expenseData = {
    description: "Rent",
    amount: 20000,
    createdAt: 123456789,
    note: "This was last month's rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
test("should setup add expense action with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
