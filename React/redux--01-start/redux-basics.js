const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};
//REDUCER -- only thing that updates the state at the end
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }

  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

//STORE
const store = createStore(rootReducer);
console.log(store.getState());

//SUBSCRIPTION -- make sure you dont have to call get state manually but tell you if something changed

store.subscribe(() => {
  console.log("[subscription]", store.getState());
});

//DISPATCHING ACTION
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
