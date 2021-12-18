import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice"
export const store = configureStore({
    reducer: {
        // eslint-disable-next-line no-undef
        counter: carReducer,
    },
});
