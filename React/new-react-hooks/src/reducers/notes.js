const noteReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_NOTES":
      return action.notes;
    case "ADD_NOTE":
      return [
        ...state,
        {
          title: action.title,
          description: action.description
        }
      ];
    case "REMOVE_NOTE":
      return state.filter(note => note.title !== action.title);
    default:
      return state;
  }
};

export { noteReducer as default };
