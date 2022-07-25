import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const apiLogin = createAsyncThunk(
  "userCredentials/apiLogin",
  async (payload) => {
    console.log(payload);
    const response = await axios
      .post("https://warm-cliffs-78399.herokuapp.com/api/user", payload)
      .catch(({ response }) => ({ ...response.data, error: true }));
    return response.data;
  }
);

const initialState = {
  userCredentials: localStorage.getItem("userCredentials")
    ? localStorage.getItem("userCredentials")
    : {},
};
const loginSlice = createSlice({
  name: "userCredentials",
  initialState,
  reducers: {
    cleanLogin: (state) => {
      state.userCredentials = {};
    },
    logOut: (state) => {
      localStorage.removeItem("userCredentials");
      state.userCredentials = {};
    },
  },
  extraReducers: {
    [apiLogin.pending]: () => {
      console.log("Verificando bro");
    },
    [apiLogin.fulfilled]: (state, action) => {
      if (action.payload.foundUser) {
        console.log(action.payload.foundUser);
        localStorage.setItem(
          "userCredentials",
          JSON.stringify(action.payload.foundUser[0])
        );
        Swal.fire({ icon: "success", text: "Login successfully" }).then(
          (result) => {
            window.location.reload();
          }
        );
        return { userCredentials: action.payload.foundUser[0] };
      } else {
        localStorage.removeItem("userCredentials");
        Swal.fire({ icon: "error", text: "Login failed" }).then((result) => {
          window.location.reload();
        });
      }
    },
  },
});
export const { cleanLogin, logOut } = loginSlice.actions;
export default loginSlice.reducer;
export const userInformation = (state) => state.userCredentials.userCredentials;
