export const drawerReducer = (state = { drawer: false }, action) => {
  switch (action.type) {
    case "DRAWER":
      return action.payload;

    default:
      return state;
  }
};

export const favoriteDrawerReducer = (state = { drawer: false }, action) => {
  switch (action.type) {
    case "FAVORITE":
      return action.payload;

    default:
      return state;
  }
};
