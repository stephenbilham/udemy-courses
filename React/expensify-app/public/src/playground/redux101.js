import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1
    };
  } else {
    return state;
  }
});

console.log(store.getState());

//Actions - nothing more than an object that gets sent to the store
// increment
store.dispatch({
  type: "INCREMENT"
});

// i'd like to increment count
// id like to reset count

console.log(store.getState());
