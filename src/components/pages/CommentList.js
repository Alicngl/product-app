import { useDispatch, useSelector } from "react-redux";

export default function CommentList({ id }) {
    const dispatch = useDispatch();
    const { commentItems } = useSelector((state) => state.commentItem);
    const filteredItems = commentItems.filter((x) => x.id === id);
    return (
        <div className={"w-full flex md:justify-center"}>
            <div className={"w-full md:max-w-2/3 md:w-2/3 p-3 bg-white p-10 rounded-lg"}>
                <h2 className={"text-xl border-b py-5 font-bold"}>Değerlendirmeler ({filteredItems.length})</h2>
                {commentItems.map((x, index) => {
                    if (x.id === id) {
                        return (
                            <div key={index} className={"border-b py-3"}>
                                <div className={"text-lg font-bold"}>{x.name}</div>
                                <div style={{ wordWrap: "break-word" }}>{x.comment}</div>
                                {/* veya
                                <div style={{ overflowWrap: "break-word" }}>{x.comment}</div> */}
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}
