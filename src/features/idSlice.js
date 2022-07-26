import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
};

export const idSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    id: (state, action) => {
      state.id = action.payload;
    },

    
  },
});

export const { id } = idSlice.actions;
export default idSlice.reducer;
