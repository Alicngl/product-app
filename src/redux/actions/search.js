export const searchAction = (keyword) => async (dispatch) => {
  console.log(keyword, "key");
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  dispatch({
    type: "SEARCH",
    payload: data.filter(
      (dt) =>
        dt.title.toLowerCase().includes(keyword) ||
        dt.description.toLowerCase().includes(keyword) ||
        dt.category.toLowerCase().includes(keyword)
    ),
  });
};
