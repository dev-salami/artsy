import A from "../asset/person-1.png";
import B from "../asset/person-2.png";
import C from "../asset/person-3.png";
import D from "../asset/person-4.png";
import E from "../asset/person-5.png";
import F from "../asset/featured-1.png";
import G from "../asset/featured-2.png";
import H from "../asset/featured-3.png";

function Featured() {
  return (
    <section className="container mx-auto px-8">
      <p className="text-4xl p-6">Featured Products</p>
      <hr className="border border-gray-400 mb-12 pl-6" />
      <div className="flex md:flex-row flex-col gap-8 mb-12">
        <main className="md:w-1/2 px-6">
          <img src={F} alt="" />
        </main>
        <aside className="md:w-1/2 px-6 flex flex-col space-y-4 justify-center">
          <h3 className=" text-2xl md:text-3xl font-semibold">
            The Boolean Egyptian
          </h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum
            a iste mollitia quidem. Temporibus rerum consectetur nam facere
            perspiciatis.
          </p>
          <div className="flex items-center">
            <img className="w-8 h-8" src={A} alt="" />
            <img className="-ml-2 w-8 h-8" src={B} alt="" />
            <img className="-ml-2 w-8 h-8" src={C} alt="" />
            <img className="-ml-2 w-8 h-8" src={D} alt="" />
            <img className="-ml-2 w-8 h-8" src={E} alt="" />
            <span className="ml-6 font-semibold">64 major creators</span>
          </div>
        </aside>
      </div>
      <hr className="border border-gray-400 mb-12 pl-6" />
      <div className="flex md:flex-row flex-col-reverse gap-8 mb-12">
        <aside className="md:w-1/2 px-6 flex flex-col space-y-4 justify-center">
          <h3 className=" text-2xl md:text-3xl font-semibold">
            The Boolean Egyptian
          </h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum
            a iste mollitia quidem. Temporibus rerum consectetur nam facere
            perspiciatis.
          </p>
          <div className="flex items-center">
            <img className="w-8 h-8" src={A} alt="" />
            <img className="-ml-2 w-8 h-8" src={B} alt="" />
            <img className="-ml-2 w-8 h-8" src={C} alt="" />
            <img className="-ml-2 w-8 h-8" src={D} alt="" />
            <img className="-ml-2 w-8 h-8" src={E} alt="" />
            <span className="ml-6 font-semibold">64 major creators</span>
          </div>
        </aside>
        <main className="md:w-1/2 px-6">
          <img src={G} alt="" />
        </main>
      </div>
      <hr className="border border-gray-400 mb-12 pl-6" />
      <div className="flex md:flex-row flex-col gap-8">
        <main className="md:w-1/2 px-6">
          <img src={H} alt="" />
        </main>
        <aside className="md:w-1/2 px-6 flex flex-col space-y-4 justify-center">
          <h3 className=" text-2xl md:text-3xl font-semibold">
            The Boolean Egyptian
          </h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum
            a iste mollitia quidem. Temporibus rerum consectetur nam facere
            perspiciatis.
          </p>
          <div className="flex items-center">
            <img className="w-8 h-8" src={A} alt="" />
            <img className="-ml-2 w-8 h-8" src={B} alt="" />
            <img className="-ml-2 w-8 h-8" src={C} alt="" />
            <img className="-ml-2 w-8 h-8" src={D} alt="" />
            <img className="-ml-2 w-8 h-8" src={E} alt="" />
            <span className="ml-6 font-semibold">64 major creators</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
export default Featured;
