import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios.config";
import showToastier from "../../utils/toastify";

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const reduxUserLogin = createAsyncThunk(
  "reduxAuth/reduxUserLogin",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const { username, password } = user;

    try {
      const { data } = await axiosInstance.post(
        "/auth/login",
        {
          username, // 'kminchelle'
          password, // '0lelplR'
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const reduxAuthSlice = createSlice({
  name: "reduxAuth",
  initialState,
  extraReducers: {
    [reduxUserLogin.pending]: state => {
      state.isLoading = true;
      state.data = null;
      state.error = null;
    },
    [reduxUserLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
      showToastier("Logged in successfully!", 1500, "success");
    },
    [reduxUserLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.error = "";
      showToastier("Username or Password is invalid!", 1500, "error");
    },
  },
});

export const selectReduxAuth = ({ reduxAuth }) => reduxAuth;

export default reduxAuthSlice.reducer;
