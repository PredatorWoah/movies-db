import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  button: '',
};

export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    button: (state, action) => {
      state.button = action.payload;
    },

    
  },
});

export const { button } = buttonSlice.actions;
export default buttonSlice.reducer;
