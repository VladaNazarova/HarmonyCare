import { createSlice } from "@reduxjs/toolkit";
import { fetchDoctorsBySpecialization } from "./thunks";
import { DoctorsType } from "../types/types";

export type DoctorsState = {
  doctors: DoctorsType[];
  status: "idle" | "loading" | "succeeded" | "failed";
};

const initialState: DoctorsState = {
  doctors: [],
  status: "idle",
};
export const doctorsSlice = createSlice({
  name: "doctorSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDoctorsBySpecialization.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDoctorsBySpecialization.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.doctors = action.payload;
      });
  },
});

export default doctorsSlice.reducer;
