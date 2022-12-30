import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, calcTotal, decCount } from "../redux/cartSlice";

function CartItem({
  url,
  id,
  amount,
  count,
  creator,
  name,
  price,
  size,
  like,
}) {
  const [likeA, setLikeA] = useState(like);

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const curItem = cartItems.find((i) => i.id === id);
  const num = curItem.count;
  const total = num * curItem.price.usd;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  // useEffect(() => {

  // }, [count]);

  return (
    <div>
      <hr className="border-gray-700 border-t-[3px] " />
      <div className=" flex items-center sm:flex-row flex-col gap-3 md:gap-12 py-8 ">
        <div className="">
          <img className=" max-h-60" src={url} alt="" />
        </div>
        <div className="w-full flex sm:justify-between justify-around  md:text-xl p-3">
          <div className="flex justify-between gap-2 flex-col capitalize">
            <p>{name}</p>
            <p>{creator}</p>
            <p>
              <span>Size</span>
              <span>:</span>
              <span> {size.ft}</span>
            </p>
            <div className="flex gap-4 items-center">
              <div
                className=" cursor-pointer"
                onClick={() => {
                  setLikeA(!likeA);
                }}
              >
                {likeA ? (
                  <FcLike
                    className="m-2  active:scale-120 duration-300"
                    size={40}
                  />
                ) : (
                  <FcLikePlaceholder
                    className="m-2  active:scale-120 duration-300"
                    size={40}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between  ">
            <button
              className="items-center justify-center flex border-[3px] border-black p-1 rounded-full"
              onClick={() => dispatch(removeItem(id))}
            >
              <FaTimes />
            </button>

            <p className="font-semibold">{count}</p>
            <p className="font-semibold">{price.usd}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
