import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBrands = createAsyncThunk("brand/getAllBrands", async () => {
  const response = await axios
    .get("https://warm-cliffs-78399.herokuapp.com/api/brand")
    .catch((error) => {
      return error.data;
    });
  return response.data;
});
export const postABrand = createAsyncThunk(
  "brand/postABrand",
  async (payload) => {
    const response = await axios
      .post("https://warm-cliffs-78399.herokuapp.com/api/brand", payload)
      .catch((error) => {
        return error.data;
      });
    return response.data;
  }
);

const initialState = {
  brand: [],
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducer: {},
  extraReducers: {
    [getAllBrands.pending]: () => {
      console.log("Trayendo Brands");
    },
    [getAllBrands.fulfilled]: (state, action) => {
      return { brand: action.payload };
    },
    [postABrand.pending]: () => {
      console.log("Posting Brand");
    },
    [postABrand.fulfilled]: (state, action) => {
      console.log("Posted");
    },
  },
});

export default brandSlice.reducer;

export const allBrands = (state) => state.brand.brand;
