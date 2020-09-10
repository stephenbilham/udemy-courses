import { createStore } from "redux";

// Action generators - functions that return action objects

// const add = ({ a, b }, c) => {
//   return a + b + c;
// };
// console.log(add({ a: 1, b: 21 }, 100)); // good simple example showcasing passing obj as arguments

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count: count
});

// REDUCERS
// 1. Reducers are pure functions
// 2. Never change state or action

const CountReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(CountReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Actions - nothing more than an object that gets sent to the store
// increment
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(
  incrementCount({
    incrementBy: 5
  })
);

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(
  decrementCount({
    decrementBy: 10
  })
);

store.dispatch(
  setCount({
    count: 200
  })
);
// i'd like to increment count
// id like to reset count
