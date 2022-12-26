import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function upComing() {
  return (
    <section className="bg-upcoming w-full h-[80vh] text-center sm:text-start sm:h-[70vh] md:h-[90vh] p-10  md:p-20 my-12 text-base sm:text-lg lg:text-xl">
      <div className="container mx-auto bg-upcoming-inner h-[90%] relative text-white ">
        <div className="absolute left-[10%] bottom-10 w-3/4">
          <div className="mb-12">
            <p className="text-3xl ">
              MONALISA REDEFINED <br /> IN STYLE.
            </p>
            <p>Start on : 08:00 GTS . Monday </p>
          </div>
          <div className="flex xl:flex-row flex-col justify-between gap-6 md:gap-12 ">
            <p className="max-w-xl">
              GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
              INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST
              AND LOWEST BIDS.
            </p>
            <div className="flex gap-4 items-center lg:flex-row flex-col">
              <button className="underline underline-offset-4">See More</button>
              <button className="px-4  py-2 border-2 border-white rounded-lg h-fit w-fit">
                Set Reminder
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 flex xs:flex-row flex-col gap-2 justify-around items-center">
        <div className="flex gap-2 rounded-md">
          <button className="h-1 w-10 rounded-md bg-white"></button>
          <button className="h-1 w-10 bg-gray-500 "></button>
          <button className="h-1 w-10  bg-gray-500"></button>
          <button className="h-1 w-10 bg-gray-500 "></button>
          <button className="h-1 w-10 bg-gray-500 "></button>
        </div>
        <div className="flex gap-6">
          <button className="h-12 w-12 bg-white/40 rounded-full flex items-center justify-center ">
            <IoIosArrowBack />
          </button>
          <button className="h-12 w-12 bg-white/40 rounded-full flex items-center justify-center">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}
export default upComing;
