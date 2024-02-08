import { createSlice } from "@reduxjs/toolkit";
import { fetchAddUser, fetchLoginUser, fetchLogoutUser } from "./thunks";
import { UserSliceType } from "../types/types";

const initialState: UserSliceType = {
  user: {
    email: "",
    login: "",
    password: "",
    phone_number: "",
  },
  loggedUser: {
    email: "",
    password: "",
  },
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddUser.pending, (state) => {
      console.log("PENDING");
      state.isLoading = true;
    });
    builder.addCase(fetchAddUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchLoginUser.pending, (state) => {
      console.log("Logging in");
      state.isLoading = true;
    });
    builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
      state.loggedUser = action.payload;
      state.isLoading = false;
    });
    builder
      .addCase(fetchLogoutUser.pending, (state) => {
        console.log("Logging out");
        state.isLoading = true;
      })
      .addCase(fetchLogoutUser.fulfilled, (state) => {
        state.loggedUser = { email: "", password: "" };
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
