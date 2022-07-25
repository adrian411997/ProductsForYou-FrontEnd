import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../reducer/products";
import loginSlice from "../reducer/Login";
import brandSlice from "../reducer/brand";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    userCredentials: loginSlice,
    brand: brandSlice,
  },
});
