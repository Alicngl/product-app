import { Button, Col, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import {productsFav, removeFav} from "../../redux/actions/favorite";
import { useState, useEffect } from "react";
import Spinner from "../spinner";

function CardPage({ prd }) {
  const [isFav, setIsFav] = useState(false); // İlk başta favori olmadığınızı varsayalım
  const dispatch = useDispatch();
  const { favItems } = useSelector((state) => state.favItem);

  // Bu etkileşim sadece bileşen yüklendiğinde çalışacak
  useEffect(() => {
    const isFavorited = favItems.find((x) => x.id === prd.id);
    setIsFav(!!isFavorited);
  }, [favItems, prd.id]);

  const addCard = () => {
    window.location = `detail/${prd.id}`;
  };

  const addFavorite = () => {
    dispatch(productsFav(prd.id));
  };
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

export default CardPage;
