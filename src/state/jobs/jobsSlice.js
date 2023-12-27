import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicGet } from "../../utilities/apiCaller";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await publicGet("/job/get/all");
  return jobs;
});
export const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    isLoading: false,
    isError: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = true;
        state.jobs = [];
        state.isError = true;
        state.error = action.payload.error?.message;
      });
  },
});

export default jobsSlice.reducer;
