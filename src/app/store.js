import { configureStore } from "@reduxjs/toolkit";
import chakraAuthSlice from "./chakraAuth/loginSlice";
import reduxAuthSlice from "./reduxAuth/loginSlice";

export const store = configureStore({
  reducer: {
    chakraAuth: chakraAuthSlice,
    reduxAuth: reduxAuthSlice,
  },
});
