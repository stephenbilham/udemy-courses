const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1
    };
  }
  if (action.type === "DECREMENT") {
    if (state.count <= 0) {
      return {
        count: 0
      };
    }
    return {
      count: state.count - 1
    };
  }
  if (action.type === "LARGE_INCREMENT") {
    return {
      count: state.count + action.value
    };
  }
  if (action.type === "LARGE_DECREMENT") {
    if (state.count <= 0) {
      return {
        count: 0
      };
    }
    return {
      count: state.count - action.value
    };
  }

  return state;
};

export default reducer;
