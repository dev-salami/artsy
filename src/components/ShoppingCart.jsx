import CartItems from "../components/cartItem";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { useEffect } from "react";
import ShopNav from "./ShopNav";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Check } from "../redux/cartSlice";
function ShoppingCart() {
  const dispatch = useDispatch();
  const { cartItems, amount } = useSelector((state) => state.cart);
  const total = () => {
    if (cartItems.length > 0) {
      const listAmount = cartItems.map((item) => {
        return item.amount;
      });
      const totalMoney = listAmount.reduce((acc, cur) => {
        return acc + cur;
      });
      dispatch(Check(totalMoney));
    }
  };
  useEffect(() => total(), [cartItems]);

  return (
    <>
      <ShopNav />

      <section className="container mx-auto px-4 md:px-12">
        {cartItems.length === 0 ? (
          <div className="flex flex-col justify-center gap-6 w-fit mx-auto mt-20">
            <p className="uppercase">You have Nothing in your Cart </p>
            <Link
              to="/products"
              className="px-6 py-2 w-fit mx-auto bg-blue-500 text-white"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CartItems key={item.id} {...item} />
            ))}
          </div>
        )}
        {cartItems.length !== 0 && (
          <>
            <hr className="border-gray-700 border-t-[3px] " />
            <section className="flex sm:flex-row flex-col-reverse sm:mt-0 mt-6 gap-12 justify-center items-center sm:justify-between p-6">
              <div className="flex gap-5 flex-col text-center">
                <Link
                  to="/shippingDetails"
                  className="px-6 py-2 bg-blue-500 text-white"
                >
                  Proceed to checkout
                </Link>
                <Link className="text-blue-500 underline" to="/products">
                  Continue Shopping
                </Link>
              </div>
              <div className="sm:w-1/3 w-full  flex gap-4 flex-col">
                <div className="justify-between flex">
                  <span className="text-gray-600 font-medium">
                    Products In Cart
                  </span>
                  <span className="font-semibold">
                    {cartItems.length}{" "}
                    {cartItems.length === 1 ? "Item" : "Items"}
                  </span>
                </div>
                <div className="justify-between flex">
                  <span className="text-gray-600 font-medium">
                    Shipping Fee
                  </span>
                  <span className="font-semibold">
                    $ {(0.1 * amount).toFixed(2)}
                  </span>
                </div>
                <div className="justify-between flex">
                  <span className="text-gray-600 font-medium">Total</span>
                  <span className="font-semibold">$ {amount.toFixed(2)}</span>
                </div>
                <div>
                  <hr className="border-gray-700 border-t-[3px]" />
                  <p className="flex justify-between">
                    <span>Grand Total :</span>
                    <span className="font-semibold">
                      $ {(1.1 * amount).toFixed(2)}
                    </span>
                  </p>
                  <hr className="border-gray-700 border-t-[3px]" />
                </div>
              </div>
            </section>
          </>
        )}
      </section>
    </>
  );
}
export default ShoppingCart;
