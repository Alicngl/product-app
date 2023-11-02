import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import CommentList from "../components/CommentList";
import ProductDetail from "../components/ProductDetail";

const Detail = () => {
  const { id } = useParams();


  return (
      <div className={"w-full "}>
          <ProductDetail id={id}/>
         <div className={"bg-gray-200 space-y-5 py-5"}>
           <CommentList id={id}/>
           <Comment id={id}/>
         </div>


      </div>

  );
};
export default Detail;
