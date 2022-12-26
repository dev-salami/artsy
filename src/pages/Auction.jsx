import { Swiper, SwiperSlide } from "swiper/react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useState } from "react";

import Footer from "../components/Footer";
import A from "../asset/auction-1.png";
import C from "../asset/auction-3.png";
import D from "../asset/auction-4.png";
import F from "../asset/tbid-1.png";
import G from "../asset/tbid-2.png";
import Time from "../components/Time";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Navbar from "../components/Navbar";

function Auction() {
  const [like, setLike] = useState(false);
  const [likeA, setLikeA] = useState(false);

  return (
    <>
      <Navbar />
      <section className="container mx-auto pt-12">
        <header className="px-8">
          <div className="hidden md:flex">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{
                delay: 300000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper h-swiper "
            >
              <SwiperSlide className="pb-16 h-fit w-full relative flex items-end ">
                <img className="" src={C} alt="" />
                <div className="absolute w-full   flex      z-50 ">
                  <div className="bg-white  opacity-60 w-fit mb-6 rounded-xl  mx-auto px-8 py-2">
                    <Time day={30} m={"jan"} year={"2023"} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-16 h-fit w-full relative flex items-end ">
                <img className="" src={D} alt="" />
                <div className="absolute w-full   flex      z-50 ">
                  <div className="bg-white  opacity-60 w-fit mb-6 rounded-xl  mx-auto px-8 py-2">
                    <Time day={17} m={"feb"} year={"2023"} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-16 h-fit w-full relative flex items-end ">
                <img className="" src={A} alt="" />
                <div className="absolute w-full   flex      z-50 ">
                  <div className="bg-white  opacity-60 mb-6 w-fit rounded-xl  mx-auto px-8 py-2">
                    <Time day={11} m={"feb"} year={"2023"} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-16 h-fit w-full relative flex items-end ">
                <img className="" src={C} alt="" />
                <div className="absolute w-full   flex      z-50 ">
                  <div className="bg-white  opacity-60 w-fit mb-6 rounded-xl  mx-auto px-8 py-2">
                    <Time day={30} m={"mar"} year={"2023"} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-16 h-fit w-full relative flex items-end ">
                <img className="" src={D} alt="" />
                <div className="absolute w-full   flex      z-50 ">
                  <div className="bg-white  opacity-60 w-fit mb-6 rounded-xl  mx-auto px-8 py-2">
                    <Time day={23} m={"jan"} year={"2023"} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-16 h-fit w-full relative flex items-end ">
                <img className="" src={A} alt="" />
                <div className="absolute w-full   flex      z-50 ">
                  <div className="bg-white  opacity-60 mb-6 w-fit rounded-xl  mx-auto px-8 py-2">
                    <Time day={11} m={"jan"} year={"2023"} />
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide className="pb-16 h-96 w-full relative ">
                <img className="absolute inset-0" src={D} alt="" />
                <div className="relative h-96 flex items-end      z-50 mx-auto w-fit ">
                  <span className="bg-white opacity-60 px-8 py-2">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-16 h-96 w-full relative ">
                <img className="absolute inset-0" src={A} alt="" />
                <div className="relative h-96 flex items-end      z-50 mx-auto w-fit ">
                  <span className="bg-white opacity-60 px-8 mb-8 py-2">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-16 h-96 w-full relative ">
                <img className="absolute inset-0" src={C} alt="" />
                <div className="relative h-96 flex items-end      z-50 mx-auto w-fit ">
                  <span className="bg-white opacity-60 px-8 py-2">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-16 h-96 w-full relative ">
                <img className="absolute inset-0" src={D} alt="" />
                <div className="relative h-96 flex items-end      z-50 mx-auto w-fit ">
                  <span className="bg-white opacity-60 px-8 py-2">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-16 h-96 w-full relative ">
                <img className="absolute inset-0" src={A} alt="" />
                <div className="relative h-96 flex items-end mb-8     z-50 mx-auto w-fit ">
                  <span className="bg-white opacity-60 px-8 py-2">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
          <div className="md:hidden flex pl-8">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 300000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper h-full mb-10   "
            >
              <SwiperSlide className=" h-fit w-full relative  mb-10">
                <img className=" w-full " src={C} alt="" />
                <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex items-end     z-50 mx-auto w-fit  ">
                  <span className="bg-white opacity-60 px-8  py-2">
                    <Time day={30} m={"jan"} year={"2023"} />
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" h-fit w-full relative  mb-6 ">
                <img className=" w-full " src={D} alt="" />
                <div className="absolute bottom-[5%] flex items-end     z-50 mx-auto w-fit left-1/2 -translate-x-1/2 ">
                  <span className="bg-white opacity-60 px-8  py-2">
                    <Time day={17} m={"feb"} year={"2023"} />{" "}
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" h-fit w-full relative  mb-6 ">
                <img className=" w-full " src={A} alt="" />
                <div className="absolute bottom-[5%] flex items-end     z-50 mx-auto w-fit left-1/2 -translate-x-1/2 ">
                  <span className="bg-white opacity-60 px-8  py-2">
                    <Time day={11} m={"feb"} year={"2023"} />
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" h-fit w-full relative  mb-6 ">
                <img className=" w-full " src={C} alt="" />
                <div className="absolute bottom-[5%] flex items-end     z-50 mx-auto w-fit left-1/2 -translate-x-1/2 ">
                  <span className="bg-white opacity-60 px-8  py-2">
                    <Time day={30} m={"mar"} year={"2023"} />
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" h-fit w-full relative  mb-6 ">
                <img className=" w-full " src={D} alt="" />
                <div className="absolute bottom-[5%] flex items-end     z-50 mx-auto w-fit left-1/2 -translate-x-1/2 ">
                  <span className="bg-white opacity-60 px-8  py-2">
                    <Time day={23} m={"jan"} year={"2023"} />
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" h-fit w-full relative  mb-6 ">
                <img className=" w-full " src={A} alt="" />
                <div className="absolute bottom-[5%] flex items-end     z-50 mx-auto w-fit left-1/2 -translate-x-1/2 ">
                  <span className="bg-white opacity-60 px-8  py-2">
                    <Time day={11} m={"jan"} year={"2023"} />
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </header>
        <main className="flex flex-col justify-around gap-4 md:flex-row mx-8">
          <div className="border-gray-400 border p-4 rounded-lg">
            <div className="rounded-t-xl bg-white shadow-md rounded-lg shadow-gray ">
              <div
                onClick={() => {
                  setLike(!like);
                }}
              >
                {like ? (
                  <FcLike
                    className="m-4 float-right active:scale-120 duration-300"
                    size={40}
                  />
                ) : (
                  <FcLikePlaceholder
                    className="m-4 float-right active:scale-120 duration-300"
                    size={40}
                  />
                )}
              </div>
              <img src={F} alt="" />
              <h4 className="xs:text-2xl text-xl font-semibold my-4 p-2">
                Out of the box
              </h4>
            </div>
            <div className="flex flex-col xs:text-xl text-sm space-y-5 px-4">
              <div>
                <span>Creator :</span>
                <span className="xs:text-xl text-sm font-semibold pl-4">
                  Dan Murray
                </span>
              </div>
              <div>
                <span> Date :</span>
                <span className="xs:text-xl text-sm font-semibold pl-4">
                  12/08/22
                </span>
              </div>
              <div>
                <span> Highest bid :</span>
                <span className="xs:text-xl text-sm font-semibold pl-4">
                  0.57 ETH
                </span>
              </div>
              <div className="w-full items-center flex lg:flex-row flex-row sm:flex-col justify-between  bg-gray-100 p-4 mt-4">
                <div className="flex items-center justify-center flex-col space-y-2 lg:space-y-6 font-semibold">
                  <h5>Current bid</h5>
                  <span>0.987 ETH</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 mt-3">
                  Place bid
                </button>
              </div>
            </div>
          </div>
          <div className="border-gray-400 border p-4 rounded-lg">
            <div className="  rounded-t-xl bg-white shadow-md rounded-lg shadow-gray">
              <div
                onClick={() => {
                  setLikeA(!likeA);
                }}
              >
                {likeA ? (
                  <FcLike
                    className="m-4 float-right active:scale-120 duration-300"
                    size={40}
                  />
                ) : (
                  <FcLikePlaceholder
                    className="m-4 float-right active:scale-120 duration-300"
                    size={40}
                  />
                )}
              </div>
              <img src={G} alt="" />
              <h4 className="xs:text-2xl text-xl font-semibold my-4 p-2">
                Falling apart
              </h4>
            </div>
            <div className="flex flex-col xs:text-xl text-sm space-y-5 px-4">
              <div>
                <span>Creator :</span>
                <span className="xs:text-xl text-sm font-semibold pl-4">
                  Jacob Banks
                </span>
              </div>
              <div>
                <span> Date :</span>
                <span className="xs:text-xl text-sm font-semibold pl-4">
                  12/08/22
                </span>
              </div>
              <div>
                <span> Highest bid :</span>
                <span className="xs:text-xl text-sm font-semibold pl-4">
                  0.34 ETH
                </span>
              </div>
              <div className="w-full items-center flex lg:flex-row flex-row sm:flex-col justify-between  bg-gray-100 p-4 mt-4">
                <div className="flex items-center justify-center flex-col space-y-2 lg:space-y-6 font-semibold">
                  <h5>Current bid</h5>
                  <span>0.99 ETH</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 mt-3">
                  Place bid
                </button>
              </div>
            </div>
          </div>
        </main>
        <button className="w-fit mt-8 mx-auto flex space-x-4 sm:hidden text-xl font-semibold items-center ">
          <span>Load more</span>
          <BsArrowRight size={40} className="border-4 rounded-full px-2" />
        </button>
      </section>
      <Footer />
    </>
  );
}
export default Auction;
