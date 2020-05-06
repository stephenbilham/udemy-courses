import { createStore, combineReducers } from "redux";
import uuid from "uuid";
//ADD_EXPENSE
const addExpense = () => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid() // UUID package
  }
});
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//Filters Reducers
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: "sdfsdfds",
      description: "January rent",
      note: "this was the final payment for this address",
      amount: 56200,
      createdAt: 0
    }
  ],
  filters: [
    {
      text: "rent",
      sortBy: "amount",
      startDate: undefined,
      endDate: undefined
    }
  ]
};
