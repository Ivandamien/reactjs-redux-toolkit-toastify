import { configureStore } from "@reduxjs/toolkit";
import chakraAuthSlice from "./chakraAuth/loginSlice";

export const store = configureStore({
  reducer: {
    auth: chakraAuthSlice,
  },
});
