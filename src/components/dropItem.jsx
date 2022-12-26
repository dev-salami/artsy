function dropItem({ item }) {
  return (
    <div className="flex md:flex-row flex-col sm:gap-6 gap-3 m-4 items-center ">
      <div className="md:w-2/5 relative">
        {/* <img src={Img} alt="img" /> */}
        <img
          className="h-60 md:h-80 xl:h-96 "
          src={require(`../asset/drop-${item.id}.png`)}
          alt="img"
        />
        <div className="absolute z-50 h-full inset-0  sm:text-xl text-sm sm:hidden flex justify-between items-end p-4 flex-col">
          <div className=" ">
            {item.status === "upcoming" && (
              <p className="py-1 md:px-4 rounded-lg px-2 md:py-2 bg-blue-400 w-fit text-white">
                Upcoming
              </p>
            )}
            {item.status === "ended" && (
              <p className="py-1 md:px-4 rounded-lg px-2 md:py-2 bg-gray-500 w-fit text-white">
                Ended
              </p>
            )}
            {item.status === "live" && (
              <p className="py-1 md:px-4 rounded-lg px-2 md:py-2 bg-gray-300 bg-opacity-90 w-fit text-white">
                Live Now
              </p>
            )}
          </div>
          <p className="w-full bg-green-400 text-white h-fit rounded-xl px-3 py-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            voluptatibus!
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-2 sm:space-y-3 justify-center md:w-2/5">
        <div className="md:flex hidden ">
          {item.status === "upcoming" && (
            <p className="py-1 md:px-4 px-2 md:py-2 bg-blue-400 w-fit text-white">
              Upcoming
            </p>
          )}
          {item.status === "ended" && (
            <p className="py-1 md:px-4 px-2 md:py-2 bg-gray-500 w-fit text-white">
              Ended
            </p>
          )}
          {item.status === "live" && (
            <p className="py-1 md:px-4 px-2 md:py-2 bg-green-500 w-fit text-white">
              Live Now
            </p>
          )}
        </div>
        <p>{item.date}</p>
        <p className=" text-xl md:text-2xl font-semibold">{item.name}</p>
        <p className="text-sm sm:text-lg max-w-sm font-medium ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
          doloremque nisi ratione exercitationem, aliquam qui! Consequatur alias
          adipisci tempora, dolores mollitia, autem id ut dolorum neque vel
          accusamus nobis?
        </p>
        <p></p>
        <div className="flex space-x-2 items-center">
          <span className="text-lg font-semibold pr-2">Creator</span> :
          <p className="font-medium capitalize sm:text-2xl">{item.creator}</p>
        </div>
        <button className="underline text-blue-400 text-left text-xl">
          {item.check}
        </button>
      </div>
    </div>
  );
}
export default dropItem;
