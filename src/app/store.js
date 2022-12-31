import { configureStore } from "@reduxjs/toolkit";
import { chakraAuthSlice } from "./auth/LoginSlice";

export const store = configureStore({
  reducer: {
    chakraAuth: chakraAuthSlice,
  },
});
