import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShopNav from "../components/ShopNav";
import { fetchData } from "../redux/cartSlice";
import ProductItem from "../components/ProductItem";
import { useState } from "react";

function Product() {
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(true);

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/products.json"
      )
      .then((data) => {
        dispatch(fetchData(data.data.products));
        setloading(false);
        seterror(false);
      })
      .catch((err) => {
        seterror(err.message);
        setloading(false);
      });
  }, []);
  return (
    <>
      <Navbar />
      <section className="container mx-auto">
        <div className="border-2 border-black h-12 mb-6"></div>
        <section className=" flex gap-6">
          <aside className="w-1/5 border-2 md:block hidden border-black min-h-screen">
            <div></div>
            <div></div>
          </aside>
          <main className="w-4/5 mx-auto border-2 border-black min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
            {products.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
            {error && products && <p>{error}</p>}
            {loading && <p>loading</p>}
          </main>
        </section>
        <Footer />
      </section>
    </>
  );
}
export default Product;

// dispatch(fetchData(data.data.products)
