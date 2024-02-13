import { createSlice } from "@reduxjs/toolkit";
import type { ServiceTypes, UserType } from "../types/types";
import { fetchPageService } from "./thunks";

const initialState = {
  service: null as ServiceTypes | null,
  specialist: null as UserType | null,
  isLoading: true,
  error: null as string | null,
};

const servPageSlice = createSlice({
  name: "servPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPageService.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPageService.fulfilled, (state, action) => {
      state.service = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPageService.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default servPageSlice.reducer;
