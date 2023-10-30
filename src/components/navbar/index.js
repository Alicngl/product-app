import { Button } from "antd";
import React from "react";
import Search from "../search";
import { useDispatch, useSelector } from "react-redux";
import { BsBasketFill } from "react-icons/bs";
function Navbar(props) {
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.card);
  return (
    <div className=" border-solid border-2 ">
      <div className="w-3/4 flex justify-between m-auto p-5 items-center">
        <div>
          <h1>Shop</h1>
        </div>
        <div className="flex content-center items-center ">
          <div>
            <Search />
          </div>
          <div
            className="relative ml-5"
            onClick={() => dispatch({ type: "DRAWER", payload: true })}>
            <BsBasketFill size={25} className="cursor-pointer" />
            <span className="absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm">
              {cardItems?.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
