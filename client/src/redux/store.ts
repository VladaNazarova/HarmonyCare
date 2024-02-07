import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";


const storeOptions = {
    reducer: {
        userSlice
    }
}

export const store = configureStore(storeOptions)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;