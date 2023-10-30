export const searchReducer = (state = { search: [] }, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        products: action.payload,
      };

    default:
      return state;
  }
};
