export const commentReducer = (state = { commentItems: [] }, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            const item = action.payload;
                return {
                    ...state,
                    commentItems: [...state.commentItems, item],
                };

        case "REMOVE_CARD":
            return {
                commentItems: state.commentItems.filter((x) => x.id !== action.payload),
            };
        default:
            return state;
    }
};