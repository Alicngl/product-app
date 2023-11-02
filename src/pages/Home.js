import Product from "../components/Product";
import { useSelector, useDispatch } from "react-redux";
import { productsAction } from "../redux/actions/products";
import { useEffect } from "react";
import { Row } from "antd";
import { searchAction } from "../redux/actions/search";
const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { search } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(productsAction());
    dispatch(searchAction(""));
  }, [dispatch]);

  return (
    <div className="flex justify-center">
      <div className="w-4/5 ">
        <Row
          gutter={[48, 16]}
          className="p-5 "
          justify="center"
          align="bottom"
          height="full">
          {
            search.length>0 ?
                search.map((item, index) => <Product prd={item} key={index} />):
                products &&
                products.map((item, index) => <Product prd={item} key={index} />)
          }
        </Row>
      </div>
    </div>
  );
};

export default Home;
