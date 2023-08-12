import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Features/product.slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
