import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";
import msgReducer from "../redux/msgSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    msg: msgReducer,
  },
});
