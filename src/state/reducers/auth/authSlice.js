import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privatePut, publicPost,privatePutFile } from "../../../utilities/apiCaller";

export const createUserLogin = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/user/login", data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ token, data }, { rejectWithValue }) => {
    try {
      // const response = await privatePut("/user/update/profile", token, data);
      const response = await privatePutFile("/user/update/profile", token, data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    user: {},
    error: false,
    errorMessage: "",
    updatedStudent:false
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.user = {};
      state.error = false;
      state.errorMessage = "";
    },
    errorClean: (state) => {
      state.error = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUserLogin.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(createUserLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("token", action.payload.token);
      state.errorMessage = "";
    });
    builder.addCase(createUserLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload.data.message;
    });
    builder.addCase(updateUserProfile.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      const { user: previousUser } = state;
      state.isLoading = false;
      state.error = null;
      state.updatedStudent = true;
      state.user = { token: previousUser.token, ...action.payload };
      state.errorMessage = "";
    });
    builder.addCase(updateUserProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload.data.message;
    });
  },
});

export const { login, logout, errorClean } = authSlice.actions;
export default authSlice.reducer;
