import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removaCard } from "../redux/actions/card";
import {removeFav} from "../redux/actions/favorite";
function Favorite() {
    const dispatch = useDispatch();
    const { favItems } = useSelector((state) => state.favItem);
    //todo: Function to delete a card from favorites

    const deleteCard = (id) => {
        dispatch(removeFav(id));
    };
    return (
        <div className="w-full md:w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3">
            <div className="flex items-center h-20 justify-between">
                <h1>FAVORİLERİM:</h1>
                <AiOutlineClose
                    onClick={() => dispatch({ type: "FAVORITE", payload: false })}
                    size={25}
                    className="cursor-pointer"
                />
            </div>
            {
                favItems.length===0 ? <div className={"justify-center items-center h-full align-middle"}>
                    <div className={"align-middle justify-center text-gray-500"}>Favori ürününüz bulunmuyor</div>
                    </div>:
                favItems?.map((x, index) => (
                <div
                    key={index}
                    className="h-28 flex items-center justify-between border-b py-4 mt-5 space-x-2">
                    <img src={x?.image} alt="" className="h-24" />
                    <div className="w-44">
                        <div className="font-bold text-sm">
                            {x?.title}
                        </div>

                    </div>
                    <div className="font-bold text-lg">
                        {x?.price } TL
                    </div>
                    <div
                        onClick={() => deleteCard(x.id)}
                        className="bg-red-500 w-2- p-2 text-center text-white rounded-lg cursor-pointer">
                        Çıkart
                    </div>
                </div>
            ))}

        </div>
    );
}

export default Favorite;
