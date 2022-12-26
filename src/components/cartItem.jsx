import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, calcTotal, decCount } from "../redux/cartSlice";

function CartItem({ url, id, amount, count, creator, name, price, size }) {
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
      <div className=" flex sm:flex-row flex-col gap-3 md:gap-12 py-8 ">
        <div className="">
          <img className=" sm:h-60" src={url} alt="" />
        </div>
        <div className="w-full flex justify-between  md:text-xl p-3">
          <div className="flex justify-between gap-2 flex-col capitalize">
            <p>{name}</p>
            <p>{creator}</p>
            <p>
              <span>Size</span>
              <span>:</span>
              <span> {size.ft}</span>
            </p>
            <div className="md:text-2xl text-xl font-medium flex sm:gap-4 justify-between sm:p-0 p-1 border-black sm:border-0 border-2 rounded-lg">
              <button
                onClick={() => {
                  dispatch(decCount(id));
                }}
                className="sm:p-2"
              >
                -
              </button>

              <span className="sm:p-2"> {count}</span>
              <button
                onClick={() => {
                  dispatch(decCount(id));
                }}
                className="sm:p-2"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between  ">
            <button onClick={() => dispatch(removeItem(id))}>
              <FaTimes />
            </button>
            <p className="font-semibold">{price.usd}</p>

            <p className="font-semibold">{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
