export const productsAction = () => async (dispatch) => {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  dispatch({ type: "GET_PRODUCTS", payload: data });
};
