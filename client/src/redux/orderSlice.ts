import { createSlice} from "@reduxjs/toolkit";

import { OrderType } from "../types/types";
import { fetchAddOrder } from "./thunks";

export type OrderSliceType = {
  orders: OrderType[];
   isLoading: boolean
};

const initialState: OrderSliceType = {
  orders: [],
  isLoading: true
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(fetchAddOrder.pending, (state) => {
      console.log("PENDING");
      state.isLoading = true;
    })
      .addCase(fetchAddOrder.fulfilled, (state, action) => {
        state.orders.push(action.payload);
        state.isLoading = false;
      })
    
  },
});
export default orderSlice.reducer;
  // .addCase(fetchAddOrder.rejected, (state) => {
        
      // });