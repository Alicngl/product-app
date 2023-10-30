import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
function Card() {
  const dispatch = useDispatch();
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
      <div className="h-28 flex items-center ustify-between border-b py-4 mt-5">
        <img src="" alt="" className="h-24" />
        <div className="w-44">
          <div className="font-bold text-sm">asd</div>
          <div className="opacity-70 text-xs">asd</div>
        </div>
        <div className="font-bold text-lg">asd</div>
        <div className="bg-red-500 w-2- p-2 text-center text-white rounded-lg cursor-pointer">
          Sil
        </div>
      </div>
    </div>
  );
}

export default Card;
