import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productsComment } from "../redux/actions/comment";

export default function Comment({ id }) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    // todo: Function used to trigger the action
    const handleClick = () => {
        dispatch(productsComment(id, name, comment));
        setName("");
        setComment("");
    }

    return (
        <div className={"w-full flex justify-center "}>
            <hr className={"mb-5 border-solid border-1 mt-5"} />
            <div className={"w-full md:w-2/3 bg-white p-10 rounded-lg"}>
                <div className={"space-y-5"}>
                    <div>
                        <input
                            placeholder={"Kullanıcı adı"}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className={"border p-3 outline-none rounded-lg w-full"}
                        />
                    </div>
                    <div>
                        <textarea
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                            className={"border p-3 outline-none rounded-lg w-full"}
                        />
                    </div>
                    <div>
                        <button disabled={name ==""?true: comment== "" ? true:false} onClick={handleClick} className={"border p-3 rounded-lg"}>Yorum Yap</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
