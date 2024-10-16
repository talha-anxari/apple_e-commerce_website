import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import the reducer from the slice

export const store = configureStore({
    reducer: {
        cart: cartReducer // Use the reducer here
    }
});
