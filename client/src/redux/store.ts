import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import serviceSlice from "./serviceSlice";
import servPage from "./servPageSlice"
import doctorSlice from "./dictorsSlice";

const storeOptions = {
  reducer: {
    userSlice,
    serviceSlice,
    servPage,
    doctorSlice,
  },
};



export const store = configureStore(storeOptions)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;