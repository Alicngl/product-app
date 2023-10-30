import CardPage from "../components/pages/CardPage";
import { useSelector, useDispatch } from "react-redux";
import { productsAction } from "../redux/actions/products";
import { useEffect } from "react";
import { Row } from "antd";
const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);
  console.log(products, "products");

  return (
    <div className="flex">
      <div className="w-1/5 border-r min-h-screen">filterpage</div>
      <div className="w-4/5">
        <Row
          gutter={[48, 16]}
          className="p-5 "
          justify="center"
          align="bottom"
          height="full">
          {products &&
            products.map((item, index) => <CardPage prd={item} key={index} />)}
        </Row>
      </div>
    </div>
  );
};

export default Home;
