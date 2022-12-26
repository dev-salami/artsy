import Navbar from "../components/Navbar";
import Img from "../asset/ty-1.png";
import Imag from "../asset/ty-2.png";

function Tyou() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto p-8">
        <div className="flex items-center flex-col space-y-16 h-full w-full justify-center">
          <img src={Img} alt="" />
          <div className="text-center leading-tight tracking-tight">
            <p className="font-semibold text-2xl">
              Hey Celestina, thank you for your purchase.{" "}
            </p>
            <p className="font-medium text-lg flex items-center justify-center">
              <span>You are amazing. Cheers to being ARTSY!</span>
              <img className="w-28" src={Imag} alt="" />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Tyou;
