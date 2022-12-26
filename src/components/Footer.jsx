import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
function Footer() {
  return (
    <div className="container mx-auto my-12 sm:px-0 px-8">
      <section className=" flex  flex-col gap-8 justify-around items-center text-center md:flex-row text-xl font-semibold">
        <span className="font-bold text-4xl ">ARTSY.</span>

        <div className="flex flex-col space-y-5">
          <Link to="/">Home</Link>
          <Link to="/products">Marketplace</Link>
          <Link to="/auctions">Auctions</Link>
          <Link to="/drop">Drops</Link>
        </div>
        <div className="flex flex-col space-y-5">
          <Link to="/">Blog</Link>
          <Link to="/">Wallets</Link>
          <Link to="/">Rates</Link>
          <Link to="/">High bids</Link>
        </div>

        <div className="flex flex-col space-y-6">
          <span className="flex items-center">
            <AiOutlineMail className="mr-4" size={30} />
            artsystudios@gmail.com
          </span>
          <span className="flex items-center">
            <GrLocation className="mr-4" size={30} /> Lagos, Nigeria
          </span>
        </div>
      </section>
      <div className="mt-16  text-xl font-semibold text-gray-500 mx-auto w-fit text-center">
        Artsystudios © 2022. All Rights Reserved.
      </div>
    </div>
  );
}
export default Footer;
