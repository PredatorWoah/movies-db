import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "movie",
};

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    type: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { type } = typeSlice.actions;
export default typeSlice.reducer;
