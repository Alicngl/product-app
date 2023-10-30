import { Button } from "antd";
import React from "react";
import Search from "../search";
import { useDispatch } from "react-redux";

function Navbar(props) {
  const dispatch = useDispatch();
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
          <div className="ml-2">
            <Button onClick={() => dispatch({ type: "DRAWER", payload: true })}>
              Sepetim
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
