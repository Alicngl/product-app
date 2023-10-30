import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removaCard } from "../../redux/actions/card";
function Card() {
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.card);
  const deleteCard = (id) => {
    dispatch(removaCard(id));
  };
  return (
    <div className="w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3">
      <div className="flex items-center h-20 justify-between">
        <h1>SEPETİM:</h1>
        <AiOutlineClose
          onClick={() => dispatch({ type: "DRAWER", payload: false })}
          size={25}
          className="cursor-pointer"
        />
      </div>
      {cardItems?.map((x, index) => (
        <div
          key={index}
          className="h-28 flex items-center justify-between border-b py-4 mt-5">
          <img src={x?.image} alt="" className="h-24" />
          <div className="w-44">
            <div className="font-bold text-sm">
              {x?.title} ({x?.qty})
            </div>
            <div className="opacity-70 text-xs">
              {(x?.description).substring(0, 90)}
            </div>
          </div>
          <div className="font-bold text-lg">{x?.price} TL</div>
          <div
            onClick={() => deleteCard(x.id)}
            className="bg-red-500 w-2- p-2 text-center text-white rounded-lg cursor-pointer">
            Sil
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
