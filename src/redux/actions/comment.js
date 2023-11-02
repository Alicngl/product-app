export const productsComment = (id, name,comment) => async (dispatch, getState) => {

    dispatch({
        type: "ADD_COMMENT",
        payload: {
            id: id,
            name: name,
            comment: comment,

        },
    });
    const {
        commentItem: { commentItems },
    } = getState();
    localStorage.setItem("commentItems", JSON.stringify(commentItems));
};


