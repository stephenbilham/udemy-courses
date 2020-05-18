import moment from "moment";
import filterReducer from "../../reducers/filters";

test("should setup default filters value", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const action = {
    type: "SORT_BY_DATE"
  };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set sortBy to text", () => {
  const text = "text here";
  const action = {
    type: "SET_TEXT_FILTER",
    text: text
  };
  const state = filterReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("should set startDate Filter", () => {
  const startDate = moment();
  const action = {
    type: "SET_START_DATE",
    startDate: startDate
  };
  const state = filterReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

test("should set endDate Filter", () => {
  const endDate = moment();
  const action = {
    type: "SET_END_DATE",
    endDate: endDate
  };
  const state = filterReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});
