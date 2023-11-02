import { Button, Col, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import {productsFav, removeFav} from "../redux/actions/favorite";
import { useState, useEffect } from "react";
import Spinner from "./spinner";

function Product({ prd }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const { favItems } = useSelector((state) => state.favItem);

  //todo: Check if the product is favorited

  useEffect(() => {
    const isFavorited = favItems.find((x) => x.id === prd.id);
    setIsFav(!!isFavorited);
  }, [favItems, prd.id]);

  //todo: Function to navigate to the product detail page
  const addCard = () => {
    window.location = `detail/${prd.id}`;
  };

  //todo: Function to add the product to favorites
  const addFavorite = () => {
    dispatch(productsFav(prd.id));
  };

  //todo: Function to remove the product from favorites
  const deleteCard = () => {
    dispatch(removeFav(prd.id));
  };

  return (
      <div>
        {
          prd ?  <Col
              className="bg-white p-5 m-2 shadow-xl rounded-xl border w-60">
            {isFav ?
                <MdFavorite size={20} className={"cursor-pointer"} onClick={deleteCard} />
                :
                <MdFavoriteBorder size={20} className={"cursor-pointer"} onClick={addFavorite} />
            }

            <div align="center">
              <Image
                  src={prd.image}
                  width="70px"
                  height={"70px"}
              />
              <div className="h-9 my-3">{prd.title.substring(0, 35)}...</div>
              <div>{prd.price} TL</div>
              <Button onClick={addCard} justify="bottom">İncele</Button>
            </div>
          </Col>
              :
              <Spinner/>

        }
      </div>
  );
}

export default Product;
