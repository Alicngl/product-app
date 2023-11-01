export const productsComment = (id, name,comment) => async (dispatch, getState) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
        (res) => res.json()
    );
    console.log(id,name,comment)
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

export const removaCard = (productId) => (dispatch, getState) => {
    dispatch({ type: "REMOVE_CARD", payload: productId });

    const {
        card: { cardItems },
    } = getState();
    localStorage.setItem("cardItems", JSON.stringify(cardItems));
};
