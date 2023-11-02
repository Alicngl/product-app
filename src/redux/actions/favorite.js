export const productsFav = (id) => async (dispatch, getState) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
        (res) => res.json()
    );
    dispatch({
        type: "ADD_FAV",
        payload:data
    });
    const {
        favItem: { favItems },
    } = getState();
    localStorage.setItem("favItems", JSON.stringify(favItems));
};

export const removeFav = (productId) => (dispatch, getState) => {
    dispatch({ type: "REMOVE_FAV", payload: productId });

    const {
        favItem: { favItems },
    } = getState();
    localStorage.setItem("favItems", JSON.stringify(favItems));
};
