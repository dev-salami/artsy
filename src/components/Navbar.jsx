import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsSearch, BsBell, BsCart } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function Navbar() {
  const dispatch = useDispatch();
  const [Open, SetOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 2000,
      easing: "ease-out",
      delay: 200,
    });
  }, []);
  return (
    <section className="text-black  ">
      <section className="p-2 md:p-4 bg ">
        <div className="justify-between flex items-center text-center relative  ">
          <Link
            className={`text-xl lg:text-2xl font-bold z-[1000]  top-0 md:left-2 left-1/2 -translate-x-1/2 md:translate-x-0
            ${Open ? "fixed pt-2" : "absolute"} 
              `}
            to="/"
          >
            ARTSY
          </Link>
          <span></span>

          {/* DESKTOP NAV */}
          <div className="flex justify-between md:w-3/4 items-center text-sm  pt-1 ">
            <ul className="md:flex hidden flex-row space-x-4   items-center">
              <NavLink
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-black" : ""
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-black" : ""
                }
                to="/products"
              >
                MarketPlace
              </NavLink>

              <NavLink
                to="/auctions"
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-black" : ""
                }
              >
                Auctions
              </NavLink>
              <NavLink
                to="/drop"
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-black" : ""
                }
              >
                Drop
              </NavLink>
              {/* <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? " active" : "link")}
              >
                Contact Us
              </NavLink> */}
            </ul>
            <ul className="flex  flex-row space-x-10 pr-4 justify-end   items-center">
              <BsSearch size={25} />
              <NavLink to="/cart" className="relative">
                <BsCart size={25} />
                <span className=" text-xs absolute -translate-x-[2px] font-semibold top-0 translate-y-1">
                  {cartItems.length}
                </span>
              </NavLink>
              <NavLink className="sm:flex hidden" to="/notification">
                <BsBell size={25} />
              </NavLink>
            </ul>
          </div>

          {!Open && (
            <div
              onClick={() => {
                SetOpen(!Open);
              }}
              className="z-[99] absolute top-0 left-2 sm:p-2 cursor-pointer font-thin md:hidden flex"
            >
              {Open ? <FaTimes size={20} /> : <FaBars size={25} />}
            </div>
          )}
          {/* MOBILE NAV */}
          <div
            className={
              Open
                ? " translate-x-0 fixed inset-0  ease-out bg-white  duration-1000 md:hidden z-50"
                : "translate-x-[1000px] fixed inset-0  ease-in  duration-1000 bg-white  md:hidden z-50 "
            }
          >
            <div className=" container mx-auto relative h-full ">
              {Open && (
                <div
                  onClick={() => {
                    SetOpen(!Open);
                  }}
                  className="z-[99] absolute top-4 right-4 sm:p-2 cursor-pointer font-thin md:hidden flex"
                >
                  {Open ? <FaTimes size={20} /> : <FaBars size={25} />}
                </div>
              )}
              <ul className="  text-2xl space-y-10 flex-col items-center pt-40 flex  ">
                <NavLink
                  onClick={() => {
                    SetOpen(false);
                  }}
                  className={({ isActive }) => (isActive ? " active" : "link")}
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={() => {
                    SetOpen(false);
                  }}
                  className={({ isActive }) => (isActive ? " active" : "link")}
                  to="/products"
                >
                  MarketPlace
                </NavLink>

                <NavLink
                  onClick={() => {
                    SetOpen(!Open);
                  }}
                  to="/auctions"
                  className={({ isActive }) => (isActive ? " active" : "link")}
                >
                  Auctions
                </NavLink>
                <NavLink
                  onClick={() => {
                    SetOpen(false);
                  }}
                  to="/drop"
                  className={({ isActive }) => (isActive ? " active" : "link")}
                >
                  Drops
                </NavLink>
                <NavLink
                  to="/message"
                  className={({ isActive }) =>
                    isActive
                      ? " active"
                      : "link absolute bottom-[10%] right-6 w-12 h-12 bg-[#0066b2] flex justify-center items-center rounded-full"
                  }
                >
                  <RiMessage2Fill style={{ color: "white" }} />
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Navbar;
