import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/authSlice";

import aviaReducer from '../features/aviaSlice'
import cartReducer from "../features/cartSlice";
import favouritesReducer from "../features/favouritesSlice";
import flightReducer from "../features/flightSlice";

export default configureStore({
  reducer: {
    avia: aviaReducer,
    cart: cartReducer,
    favourites: favouritesReducer,
    flight: flightReducer,
    auth: authReducer,
  },
});
