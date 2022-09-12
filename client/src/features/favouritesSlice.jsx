import { createSlice } from "@reduxjs/toolkit";
const initialState = { array: [], total: 0 };

const favouritesSlice = createSlice({
  name: "avia",
  initialState,
  reducers: {
    favouritesAdd(state, action) {
      state.array.push(action.payload);
    },
    favouritesRemove(state, action) {
      state.array = state.array.filter((el) => el.idSlug !== action.payload.idSlug);
    },
  },
});

export const { favouritesAdd, favouritesRemove } = favouritesSlice.actions;
export default favouritesSlice.reducer;
