export const favReducer = (state = { favItems: {} }, action) => {
    switch (action.type) {
        case "ADD_FAV":
            const item = action.payload;
            const existItem = state.favItems.find((x) => x.id === item.id);
            if (existItem) {
                return {
                    ...state,
                    favItems: state.favItems

                };
            } else {
                return {
                    ...state,
                    favItems: [...state.favItems, item],
                };
            }
        case "REMOVE_FAV":
            return {
                favItems: state.favItems.filter((x) => x.id !== action.payload),
            };

        default:
            return state;
    }
};
