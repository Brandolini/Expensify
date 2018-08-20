import { createStore } from "redux";

// Action generators -- functions that return action objects
const incrementCount = ({ incrementBy = 1 }) => ({
  type: "INCREMENT",
  incrementBy
});
// decrementCount
const decrementCount = ({ decrementBy = 1 }) => ({
  type: "DECREMENT",
  decrementBy
});

// setCount
const setCount = ({ count = 1 }) => ({
  type: "SET",
  count
});

// resetCount
const resetCount = () => ({
  type: "RESET"
});

// REDUCERS
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
};
const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// Increment count

store.dispatch(incrementCount({ incrementBy: 60 }));

store.dispatch(decrementCount({ decrementBy: 100 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 1000 }));
store.dispatch(resetCount());
store.dispatch(setCount({ count: 25000 }));
