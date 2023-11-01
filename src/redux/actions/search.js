export const searchAction = (keyword) => async (dispatch) => {

  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  dispatch({
    type: "SEARCH",
    payload: data.filter(
      (dt) =>
        dt.title.toLowerCase().includes(keyword.toLowerCase()) ||
        dt.description.toLowerCase().includes(keyword.toLowerCase()) ||
        dt.category.toLowerCase().includes(keyword.toLowerCase())
    ),
  });
};
