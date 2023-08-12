import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/product.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
