export const searchReducer = (state = { search: [] }, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
