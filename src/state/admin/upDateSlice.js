import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privatePut } from "../../utilities/apiCaller";

export const updateJobStatus = createAsyncThunk(
  "admin/updateJobStatus",
  async ({ token,jobId,dataa}, { rejectWithValue }) => {
    try {
      const response = await privatePut(`/user/admin/update/${jobId}`, token, dataa);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
const updateJobStatusSlice = createSlice({
  name: "auth",
  initialState: {

    isLoading: false,
    updatedStatus: {},
    error: false,
    errorMessage: ""
  },
  extraReducers: (builder) => {
    builder.addCase(updateJobStatus.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(updateJobStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.updatedStatus = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(updateJobStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload.data.message;
    });
   
  },
});


export default updateJobStatusSlice.reducer;
