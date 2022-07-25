import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const response = await axios
      .get("https://warm-cliffs-78399.herokuapp.com/api/products")
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

export const postAproduct = createAsyncThunk(
  "products/postAproduct",
  async (payload) => {
    const response = await axios
      .post("https://warm-cliffs-78399.herokuapp.com/api/products", payload)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

export const deleteAProduct = createAsyncThunk(
  "product/deleteAproduct",
  async (payload) => {
    const response = await axios
      .delete("https://warm-cliffs-78399.herokuapp.com/api/products", {
        data: payload,
      })
      .catch((err) => {
        return response.data;
      });
    console.log(response.data);
    return response.data;
  }
);

export const updateAProduct = createAsyncThunk(
  "product/updateAProduct",
  async (payload) => {
    const response = await axios
      .put("https://warm-cliffs-78399.herokuapp.com/api/products", payload)
      .catch((err) => {
        return response.data;
      });
    return response.data;
  }
);
const initialState = {
  products: [],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: () => {
      console.log("Trayendo los datos bro");
    },
    [getAllProducts.fulfilled]: (state, action) => {
      return { products: action.payload };
    },
    [postAproduct.pending]: () => {
      console.log("Posting");
    },
    [postAproduct.fulfilled]: (action) => {
      console.log(action.payload);
    },
    [deleteAProduct.pending]: () => {
      console.log("Deleting");
    },
    [deleteAProduct.fulfilled]: (action) => {
      console.log(action.payload);
    },
    [updateAProduct.pending]: () => {
      console.log("updating");
    },
    [updateAProduct.fulfilled]: (action) => {
      console.log(action.payload);
    },
  },
});
export default productsSlice.reducer;

export const allProducts = (state) => state.products.products;
