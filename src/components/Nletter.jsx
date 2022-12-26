function Nletter() {
  return (
    <section className=" container mx-auto px-8 sm:px-20">
      <div className="flex flex-col space-y-3 md:mx-20 my-12  border border-black px-12 md:px-20 py-12 text-center">
        <h4 className="text-3xl font-semibold">NEWSLETTER</h4>
        <p>Subscribe to get daily updates on new drops & exciting deals </p>
        <div className="md:space-x-6 md:space-y-0 space-y-6 flex md:flex-row flex-col justify-center">
          <input
            placeholder="ENTER YOUR EMAIL"
            className="border border-black px-4 py-1 w-full md:w-1/2  "
            type="text"
          />
          <button className="px-6 py-1 text-white bg-black">SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
}
export default Nletter;
