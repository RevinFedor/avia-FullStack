import { createSlice } from "@reduxjs/toolkit";
const initialState = { array: [], total: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartAdd(state, action) {
      state.array.push(action.payload);
      state.total+=1
    },
    cartRemove(state, action){
      state.array = state.array.filter((el) => el.idSlug !== action.payload.idSlug);
      state.total -= 1;
    },
    cartRemoveAll(state, action){
      state.array = [];
      state.total = 0;
    }
  },
});

export const { cartAdd, cartRemove, cartRemoveAll } = cartSlice.actions;

export default cartSlice.reducer;
