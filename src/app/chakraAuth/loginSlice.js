import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiInstance } from "../../api/axios.config";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const chakraUserLogin = createAsyncThunk("auth/chakraUserLogin", async (user, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  const { username, password } = user;

  try {
    const { data } = await apiInstance.post(
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
});

export const chakraAuthSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [chakraUserLogin.pending]: state => {
      state.isLoading = true;
      state.data = null;
      state.error = null;
    },
    [chakraUserLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
      toast({
        title: "Logged in successfully",
        status: "success",
        isClosable: true,
      });
    },
    [chakraUserLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.error = "";
      toast({
        title: action.payload.response.data.message,
        description: "Username or Password is invalid!",
        status: "error",
        isClosable: true,
      });
    },
  },
});

export default chakraAuthSlice.reducer;
