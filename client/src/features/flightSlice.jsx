import { createSlice } from "@reduxjs/toolkit";
const initialState = { personal: [], flight: [] };

const flightSlice = createSlice({
  name: "avia",
  initialState,
  reducers: {
    personalAdd(state, action) {
      state.personal.push(action.payload);
    },
    flightAdd(state, action) {
      state.flight.push(action.payload);
    },
  },
});

export const { personalAdd, flightAdd } = flightSlice.actions;
export default flightSlice.reducer;
