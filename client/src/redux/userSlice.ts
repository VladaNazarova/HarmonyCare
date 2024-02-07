import { createSlice } from "@reduxjs/toolkit";
import { fetchAddUser } from "./thunks";
import { UserSliceType } from "../types/types";

const initialState: UserSliceType = {
    user: {
      email: "",
      login: "",
      password: "",
      phone_number: ""
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
  },
});

export default userSlice.reducer;
