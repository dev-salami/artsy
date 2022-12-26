import { Swiper, SwiperSlide } from "swiper/react";
import A from "../asset/home-1.png";
import B from "../asset/home-2.png";
import C from "../asset/home-3.png";
import D from "../asset/home-4.png";
import E from "../asset/home-5.webp";
import F from "../asset/home-6.webp";
import G from "../asset/home-7.png";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

export default function Header() {
  return (
    <section className="container mx-auto p-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold leading-tight tracking-tight text-center">
          Photography is poetry & <br /> beautiful untold stories
        </h2>
        <p className="text-xl my-12 text-center">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      <div className="hidden md:flex">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-fit "
        >
          <SwiperSlide className="pb-16 ">
            <img src={A} alt="" />
          </SwiperSlide>
          <SwiperSlide className="pb-16 ">
            <img src={B} alt="" />
          </SwiperSlide>
          <SwiperSlide className="pb-16 ">
            <img src={C} alt="" />
          </SwiperSlide>
          <SwiperSlide className="pb-16 ">
            <img src={D} alt="" />
          </SwiperSlide>
          <SwiperSlide className="pb-20">
            <img src={E} alt="" />
          </SwiperSlide>
          <SwiperSlide className="pb-20">
            <img src={F} alt="" />
          </SwiperSlide>
          <SwiperSlide className="pb-20">
            <img src={G} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mx-auto px-4 flex md:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-fit "
        >
          <SwiperSlide className="pb-16 pl-6 ">
            <img src={A} alt="" />
          </SwiperSlide>
          <SwiperSlide className="pb-16 pl-6 ">
            <img src={B} alt="" />
          </SwiperSlide>
          <SwiperSlide className="pb-16 pl-6 ">
            <img src={C} alt="" />
          </SwiperSlide>
          <SwiperSlide className="pb-16 ">
            <img src={D} alt="" />
          </SwiperSlide>
          <SwiperSlide className="pb-20">
            <img src={E} alt="" />
          </SwiperSlide>
          <SwiperSlide className="pb-20">
            <img src={F} alt="" />
          </SwiperSlide>
          <SwiperSlide className="pb-20">
            <img src={G} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";

// import { Pagination } from "swiper";
// function Header() {
//   return (
//     <Header className="py-8 container mx-auto">
//       <section>
//         <p>Photography is poetry & beautiful untold stories</p>
//       </section>

//       <section className="border-2 border-red-400">
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={30}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Pagination]}
//           className="mySwiper"
//         >
//           <SwiperSlide>Slide 1</SwiperSlide>
//           <SwiperSlide>Slide 2</SwiperSlide>
//           <SwiperSlide>Slide 3</SwiperSlide>
//           <SwiperSlide>Slide 4</SwiperSlide>
//           <SwiperSlide>Slide 5</SwiperSlide>
//           <SwiperSlide>Slide 6</SwiperSlide>
//           <SwiperSlide>Slide 7</SwiperSlide>
//           <SwiperSlide>Slide 8</SwiperSlide>
//           <SwiperSlide>Slide 9</SwiperSlide>
//         </Swiper>
//       </section>
//     </Header>
//   );
// }
// export default Header;
