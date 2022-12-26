import { IoMdClose } from "react-icons/io";
import Lapimg from "../asset/bid-img.png";
import { Link, useNavigate } from "react-router-dom";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { sendMsg } from "../redux/msgSlice";
import Bids from "../bid.json";
import { useSelector, useDispatch } from "react-redux";

import { FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import Navbar from "../components/Navbar";
function LiveBid() {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.msg);

  const navigate = useNavigate();
  const [likeA, setLikeA] = useState(false);
  const [text, setText] = useState("");
  const [price, setprice] = useState("102");

  // const [Bidder, setBidder] = useState([...Bids]);

  // const latestBid = [...Bids];
  const Package = {
    name: "Salami Khalil",
    pic: "https://cdn2.iconfinder.com/data/icons/basic-plain/512/man_person_member_male_avatar_user_account_client_profile-512.png",
    msg: text,
  };

  const sendText = () => {
    dispatch(sendMsg(Package));
    console.log(message);
    setText("");
  };
  // function getRandomNumber() {
  //   let randomNumber;
  //   do {
  //     randomNumber = Math.floor(Math.random() * (1100 - 100 + 1)) + 100;
  //   } while (randomNumber === previousRandomNumber && randomNumber !== 1090);
  //   previousRandomNumber = randomNumber;
  //   return randomNumber;
  // }

  // let previousRandomNumber;

  // setInterval(function () {
  //   setprice(getRandomNumber());
  // }, 5000);
  // const random = () => {
  //   randomNumber = Math.floor(Math.random() * (1100 - 100 + 1)) + 100;
  // }

  return (
    <>
      <section className="">
        {/* Laptop view */}
        <section className="container mx-auto hidden sm:flex justify-center px-8 lg:px-0 my-12 ">
          <aside className="  relative h-[50vh] md:min-h-[70vh] xl:min-h-[80vh] w-1/2 xl:w-1/3">
            <img
              className="  absolute -z-50 w-full h-full"
              src={Lapimg}
              alt="Bid Img"
            />
            <div className="w-full h-full flex flex-col justify-between z-50">
              <div className="flex justify-between p-4">
                <button
                  onClick={() => navigate("/auctions")}
                  className="bg-gray-500 h-10 w-10 flex items-center justify-center text-white rounded-full"
                >
                  <IoMdClose size={25} />
                </button>
                <p className="bg-blue-500 w-fit px-4 py-1 rounded-xl h-fit text-white">
                  Live
                </p>
              </div>
              <div className="text-white text-3xl font-semibold w-fit mx-auto">
                <span>Current bid </span>
                <span>${price}</span>
              </div>
              <p className="mb-12 text-xl text-white pl-6">
                Tag Lost or Winner
              </p>
            </div>
          </aside>
          <main className="h-[50vh] md:min-h-[70vh] xl:min-h-[80vh] w-1/2 xl:w-1/3 border-2 flex justify-between flex-col border-black">
            <div className="h-[90%] flex gap-4 flex-col justify-end p-4  ">
              {message.map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <img
                    className="md:h-12 md:w-12 h-8 w-8 lg:h-14 lg:w-14 rounded-full"
                    src={item.pic}
                    alt=""
                  />
                  <div className="text-xs lg:text-base">
                    <p>{item.name}</p>
                    <p>{item.msg}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[10%] border-t-2 border-black flex gap-4 items-center px-2">
              <div className="border-2 rounded-lg h-fit border-gray-500 p-1  w-full flex items-center gap-4 justify-between">
                <input
                  required
                  value={text}
                  className="h-4 w-full outline-none "
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                />
                <button
                  className="disabled:text-gray-400"
                  disabled={text.length === 0 && true}
                  onClick={sendText}
                >
                  <FaTelegramPlane size={25} />
                </button>
              </div>
              <div
                className=" border-2 border-gray-700 rounded-full p-1 w-fit cursor-pointer"
                onClick={() => {
                  setLikeA(!likeA);
                }}
              >
                {likeA ? (
                  <FcLike
                    className="  active:scale-120 duration-300"
                    size={30}
                  />
                ) : (
                  <FcLikePlaceholder
                    className="  active:scale-120 duration-300"
                    size={30}
                  />
                )}
              </div>
            </div>
          </main>
        </section>
        <Link className="my-8 text-3xl w-fit mx-auto border-2 border-black px-4 py-2 items-center font-semibold hidden sm:flex gap-4">
          <span>See upcoming drops</span> <BsArrowRight />
        </Link>
        {/* Mobile view */}
        <section className="sm:hidden h-screen bg-bid w-screen xs:text-base text-xs ">
          <main className="relative bg-white bg-opacity-20 p-3 xs:p-6  h-screen w-screen flex flex-col justify-between text-white">
            <div className="justify-between flex items-center">
              <p className="text-xs sm:text-xl font-medium">
                Tag : Lost or Winner
              </p>
              <div className="flex gap-4 items-center">
                <span className="py-1 px-2 rounded-lg h-fit bg-blue-600">
                  LIVE
                </span>
                <span className="bg-gray-400 px-2 py-1 rounded-lg space-x-2 flex items-center">
                  <AiFillEye size={25} />
                  <span>295</span>
                </span>
                <button
                  onClick={() => navigate("/auctions")}
                  className="bg-gray-500 h-8 w-8 flex items-center justify-center text-white rounded-full"
                >
                  <IoMdClose size={20} />
                </button>
              </div>
            </div>
            <p className="flex gap-2 absolute top-[10%] text-xl xs:text-3xl w-fit left-1/2 -translate-x-1/2">
              <span>Current bid</span>
              <span>:</span>
              <span>$4500</span>
            </p>
            <section className="mb-4 xs:text-base text-xs ">
              <div className="h-fit flex gap-4 flex-col justify-end p-4  ">
                {message.map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <img
                      className="sm:h-14 sm:w-14 h-8 w-8 rounded-full"
                      src={item.pic}
                      alt=""
                    />
                    <div className="">
                      <p>{item.name}</p>
                      <p>{item.msg}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-[10%]  flex gap-4 items-center px-2">
                <div className="border-2 rounded-lg h-fit border-white p-1  w-full flex items-center gap-4 justify-between">
                  <input
                    required
                    value={text}
                    className="h-4 bg-transparent w-full outline-none "
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                  />
                  <button
                    className="disabled:text-gray-400"
                    disabled={text.length === 0 && true}
                    onClick={sendText}
                  >
                    <FaTelegramPlane size={25} />
                  </button>
                </div>
                <div
                  className=" border-2 border-white rounded-full p-1 w-fit cursor-pointer"
                  onClick={() => {
                    setLikeA(!likeA);
                  }}
                >
                  {likeA ? (
                    <FcLike
                      className="  active:scale-120 duration-300"
                      size={30}
                    />
                  ) : (
                    <FcLikePlaceholder
                      className="  active:scale-120 duration-300"
                      size={30}
                    />
                  )}
                </div>
              </div>
            </section>
          </main>
        </section>
      </section>
    </>
  );
}
export default LiveBid;
