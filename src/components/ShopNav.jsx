import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function ShopNav() {
  const [A, setA] = useState(true);
  const [B, setB] = useState(false);
  const [C, setC] = useState(false);

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto  md:px-0 px-8 mt-12 mb-6 ">
        <div className="flex justify-center sm:justify-between items-center gap-4 sm:flex-row flex-col">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " border-b-[3px] border-black  sm:w-fit"
                : "border-black  sm:w-fit"
            }
            to="/cart"
          >
            Shopping Cart
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " border-b-[3px] border-black sm:w-fit"
                : "border-black sm:w-fit"
            }
            to="/shippingDetails"
          >
            Shipping Details
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? " border-b-[3px] border-black sm:w-fit"
                : "border-black sm:w-fit"
            }
            to="/paymentDetails"
          >
            Payment Detail
          </NavLink>
        </div>
        <hr className="sm:flex hidden" />
      </div>
      <Outlet />
    </>
  );
}
export default ShopNav;
