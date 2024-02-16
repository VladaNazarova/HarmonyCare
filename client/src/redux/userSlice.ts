import { createSlice } from "@reduxjs/toolkit";
import { fetchAddDoc, fetchAddUser, fetchCheckRole, fetchCheckUserSession, fetchLoginUser, fetchLogoutUser } from "./thunks";
import { UserSliceType } from "../types/types";

const initialState: UserSliceType = {
  user: {
    email: "",
    login: "",
    password: "",
    phone_number: "",
  },
  loggedUser: {
    error: "",
    email: "",
    password: "",
  },
  authUser: {
    user: "",
  },
  roleUser: {
    role: ""
  },
  userDoc: {
    email: "",
    login: "",
    password: "",
    phone_number: "",
    role: "", 
    specialization: "",
    experience: 0,
    img: "",
    doctor_id: 0
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
      state.authUser = { user: action.payload.email };
      state.isLoading = false;
    });
    builder.addCase(fetchLoginUser.pending, (state) => {
      console.log("Logging in");
      state.isLoading = true;
    });
    builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
      state.loggedUser = action.payload;
      state.authUser = { user: action.payload.email };
      state.isLoading = false;
    });
    builder
      .addCase(fetchLogoutUser.pending, (state) => {
        console.log("Logging out");
        state.isLoading = true;
      })
      .addCase(fetchLogoutUser.fulfilled, (state) => {
        state.loggedUser = { email: "", password: "" };
        state.authUser = { user: "" };
        state.isLoading = false;
      });
      builder
      .addCase(fetchCheckUserSession.pending, (state) => {
        console.log("Checking user session");
        state.isLoading = true;
      })
      .addCase(fetchCheckUserSession.fulfilled, (state, action) => {
        state.authUser = action.payload; 
        state.isLoading = false;
      });
      builder
      .addCase(fetchCheckRole.pending, (state) => {
        console.log("Getting user role");
        state.isLoading = true;
      })
      .addCase(fetchCheckRole.fulfilled, (state, action) => {
        state.roleUser = action.payload; 
        state.isLoading = false;
      });
      builder
      .addCase(fetchAddDoc.pending, (state) => {
        console.log("Adding doctor");
        state.isLoading = true;
      })
      .addCase(fetchAddDoc.fulfilled, (state, action) => {
        state.userDoc = action.payload; 
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
