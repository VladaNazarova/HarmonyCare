import { createSlice } from "@reduxjs/toolkit";
import type { ServicesSliceType } from "../types/types";
import { fetchGetServices } from "./thunks";

const initialState: ServicesSliceType = {
  services: [],
  isLoading: true,
};

const servSlice = createSlice({
  name: "serviceSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchGetServices.fulfilled, (state, action) => {
      state.services = action.payload;
      state.isLoading = false;
    });
  },
});

export default servSlice.reducer;
