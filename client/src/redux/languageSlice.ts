import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  change: {
    changeLanguage: true
  }
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.change.changeLanguage = action.payload;
    }
  }
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;