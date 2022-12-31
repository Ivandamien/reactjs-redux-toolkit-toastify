import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiInstance } from "../../api/axios.config";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const userLogin = createAsyncThunk("chakraAuth/userLogin", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const { data } = await apiInstance.post(
      "/auth/login",
      {
        username: user.username, // 'kminchelle'
        password: user.password, // '0lelplR'
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
  name: "chakraAuth",
  initialState,
  extraReducers: {
    [userLogin.pending]: state => {
      state.isLoading = true;
      state.data = null;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
      toast({
        title: "Logged in successfully",
        status: "success",
        isClosable: true,
      });
    },
    [userLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.error = "";
      toast({
        title: "error.response.data.message",
        description: "Username or Password is invalid!",
        status: "error",
        isClosable: true,
      });
    },
  },
});

export default chakraAuthSlice.reducer;
