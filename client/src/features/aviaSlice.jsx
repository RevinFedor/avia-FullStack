import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchAvia = createAsyncThunk("avia/fetchAvia/", async function () {
  const { data } = await axios.get("/avia");
  return data;
});
export const fetchCart = createAsyncThunk("avia/fetchCart/", async function () {
  const { data } = await axios.get("/avia/cart");
  return data;
});

const aviaSlice = createSlice({
  name: "avia",
  initialState: { array: [], cart: [], status: null, error: null },
  reducers: {
    postAdded(state, action) {
      if (state.status) {
        state.array = action.payload;
        state.status = false;

      }
    },
  },
  extraReducers: {
    // получение
    [fetchAvia.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.array = action.payload;
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.cart = action.payload
    },
  },
});

export const { postAdded } = aviaSlice.actions;
export default aviaSlice.reducer;
