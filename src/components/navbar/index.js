import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuShoppingCart } from "react-icons/lu";
import { searchAction } from "../../redux/actions/search";
import {GrFavorite} from "react-icons/gr"
function Navbar(props) {
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.card);
  const { favItems } = useSelector((state) => state.favItem);

  const [search, setSearch] = useState("");

  const searchPost = (e) => {
      dispatch(searchAction(search));
      setSearch(e.target.value)

  };
  return (
    <div className=" border-solid border-2 ">

      <div className="w-3/4 md:flex justify-between m-auto p-2 md:p-5 items-center">
        <div onClick={()=>window.location="/"} className={"cursor-pointer p-2 text-center"}>
          <h1 className={"font-bold"}>SHOPPING APP</h1>
        </div>
        <div className="flex content-center items-center ">
          <div>
            <input
              value={search}
              onChange={(e) => searchPost(e)}
              placeholder="Search..."
              className="border p-3 outline-none rounded-lg"
            />
          </div>
          <div
            className="relative ml-5"
            onClick={() => dispatch({ type: "DRAWER", payload: true })}>
            <LuShoppingCart size={25} className="cursor-pointer" />
            <span className="absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm">
              {cardItems?.length}
            </span>
          </div>
          <div
              className="relative ml-5"
              onClick={() => dispatch({ type: "FAVORITE", payload: true })}>
            <GrFavorite size={25} className="cursor-pointer" />
            <span className="absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm">
              {favItems?.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
