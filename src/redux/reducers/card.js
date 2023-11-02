export const cardReducer = (state = { cardItems: [] }, action) => {
  switch (action.type) {
    case "ADD_CARD":
      const item = action.payload;
      const existItem = state.cardItems.find((x) => x.id === item.id); // "item.payload" yerine "item.id" kullanın
      if (existItem) {
        return {
          ...state,
          cardItems: state.cardItems.map((x) =>
              x.id === existItem.id ? { ...existItem, qty: existItem.qty + item.qty } : x
          ),
        };
      } else {
        return {
          ...state,
          cardItems: [...state.cardItems, item],
        };
      }
    case "REMOVE_CARD":
      return {
        cardItems: state.cardItems.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};
