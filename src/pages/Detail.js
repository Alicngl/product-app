import { Image } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsActionDetail } from "../redux/actions/products";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { productsCard } from "../redux/actions/card";
import Spinner from "../components/spinner";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(productsActionDetail(id));
  }, [dispatch]);

  const increment = (stock) => {
    if (count <= stock) {
      console.log("plus");
      setCount(count + 1);
    }
  };

  const decrement = () => {
    console.log("asdasd");
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addCard = () => {
    dispatch(productsCard(id, count));
    dispatch({ type: "DRAWER", payload: true });
  };

  return (
    <div className="w-full flex items-center justify-center md:space-x-5 md:px-5  pt-20">

      {
        product ? <div className="md:flex items-center  md:w-2/3 md:space-x-10 md:pt-20 ">
          <img src={product?.image} className="w-2/3  md:w-1/3" alt="" />
          <div className="md:w-2/3 space-y-5 px-5">
            <div className="font-bold text-xl">{product?.title}</div>
            <div className="opacity-70">{product?.description}</div>
            <div className="opacity-70">Category:{product?.category}</div>
            <div className="opacity-50">
              Rate:{product?.rating?.rate} - Stock:{product?.rating?.count}
            </div>
            <div className="font-bold text-xl">{product?.price} TL</div>
            <div className="flex items-center space-x-4">
              <CgMathMinus
                  onClick={decrement}
                  className="cursor-pointer border rounded-full p-1"
                  size={30}
              />
              <span className="text-2xl">{count}</span>
              <CgMathPlus
                  onClick={() => increment(product?.rating?.count)}
                  className="cursor-pointer border rounded-full p-1"
                  size={30}
              />
            </div>
            <button
                disabled={count===0 ? true:false}
                onClick={addCard}
                className={`p-3 w-full ${count===0 ?"bg-gray-400":"bg-indigo-600"} text-center rounded-lg text-white text-lg`}>
              Sepete Ekle
            </button>
          </div>
        </div>: <Spinner/>
      }

    </div>
  );
};
export default Detail;
