import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../redux/actions/card";
import { useLocation } from 'react-router-dom';

function BasketList() {
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.card);
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname,"path")

  //todo: Function to delete a product from the cart
  const deleteCard = (id) => {
    dispatch(removeCard(id));
  };
  console.log(pathname=="/detail/:id"?"1":"2")
  const handleClick=(id)=>{
    if (pathname==`/`){
      window.location=`detail/${id}`
    }else{
      window.location=`${id}`
      dispatch({ type: "DRAWER", payload: false })}
  }
  return (
    <div className=" w-full md:w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3">
      <div className="flex items-center h-20 justify-between">
        <h1>SEPETİM:</h1>
        <AiOutlineClose
          onClick={() => dispatch({ type: "DRAWER", payload: false })}
          size={25}
          className="cursor-pointer"
        />
      </div>
      {
        cardItems.length===0 ?<div className={"justify-center items-center h-full align-middle"}>
              <div className={"align-middle justify-center text-gray-500"}>Sepetinizde ürün bulunmuyor</div>
            </div>:
        cardItems?.map((x, index) => (
        <div
          key={index}
          className="h-28 flex items-center justify-between border-b py-4 mt-5 space-x-2">
          <img src={x?.image} alt="" className="h-24" />
          <div className="w-44">
            <div className="font-bold text-sm cursor-pointer" onClick={()=>handleClick(x.id)}>
              {x?.title} ({x?.qty})
            </div>

          </div>
          <div className="font-bold text-lg">
            {cardItems.length > 0 ? x?.price * x.qty : x?.price} TL
          </div>
          <div
            onClick={() => deleteCard(x.id)}
            className="bg-red-500 w-3- p-2 text-center text-white rounded-lg cursor-pointer">
            Sil
          </div>
        </div>
      ))}
    </div>
  );
}

export default BasketList;
