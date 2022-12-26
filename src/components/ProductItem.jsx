import { Link } from "react-router-dom";
import Img from "../asset/product-1.png";
function ProductItem({ item }) {
  return (
    <div className="flex flex-col gap-1 px-2 ">
      <img src={item.url} className="w-full rounded-xl" alt="" />
      <div className="flex justify-between text-sm px-3 flex-wrap">
        <Link to={`/products/${item.id}`} className=" text-gray-700 uppercase">
          {item.name}
        </Link>
        <p className=" font-bold ">${item.price.usd}</p>
      </div>
    </div>
  );
}
export default ProductItem;
