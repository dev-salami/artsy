import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import Product from "./pages/Product";
// import Auction from "./pages/Auction";
// import Drop from "./pages/Drop";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Loader from "./components/loader";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import ShopNav from "./components/ShopNav";
import ShoppingCart from "./components/ShoppingCart";
import ShippingDetails from "./components/ShippingDetails";
import PaymentDetails from "./components/PaymentDetails";
import Empty from "./components/empty";
// import Test from "./components/ProductItem";
import Test from "./pages/liveBid";
import SingleProduct from "./pages/singleProduct";
const Product = lazy(() => import("./pages/Product"));
const Auction = lazy(() => import("./pages/Auction"));
const Drop = lazy(() => import("./pages/Drop"));
// import Test from "./components/ProductItem"
// import Test from "./components/ProductItem"

// const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<Test />} />

              <Route path="/products" element={<Product />} />
              <Route path="/products/:id" element={<SingleProduct />} />

              <Route path="/" element={<Empty />}>
                <Route path="cart" element={<ShoppingCart />} />
                <Route path="shippingDetails" element={<ShippingDetails />} />
                <Route path="paymentDetails" element={<PaymentDetails />} />
              </Route>
              <Route path="/auctions" element={<Auction />} />
              <Route path="/drop" element={<Drop />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </>
  );
}
export default App;
