import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { OrderType } from "../types/types";
import { fetchAddOrder } from "./thunks";

export type OrderSliceType = {
  orders: OrderType[];
};

const initialState: OrderSliceType = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(fetchAddOrder.pending, (state) => {
       
      // })
      .addCase(fetchAddOrder.fulfilled, (state, action) => {
        state.orders.push(action.payload);
      })
      // .addCase(fetchAddOrder.rejected, (state) => {
        
      // });
  },
});
export default orderSlice.reducer;
