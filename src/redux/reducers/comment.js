export const commentReducer = (state = { commentItems: [] }, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            const item = action.payload;
                return {
                    ...state,
                    commentItems: [...state.commentItems, item],
                };


        default:
            return state;
    }
};