import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicGet } from "../../utilities/apiCaller";

export const fetchCategories = createAsyncThunk("jobs/fetchCategories", async () => {
  const categories = await publicGet("/category/all");
  return categories;
});
export const fetchCities = createAsyncThunk("jobs/fetchCities", async () => {
    const cities = await publicGet("/city/all");
    return cities;
  });
  export const fetchTypes = createAsyncThunk("jobs/fetchTypes", async () => {
    const types = await publicGet("/job/type");
    return types;
  });
  export const fetchTimes = createAsyncThunk("jobs/fetchTimes", async () => {
    const times = await publicGet("/job/time");
    return times;
  });
export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    cities: [],
    types:[],
    isLoading: false,
    isError: false,

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = true;
        state.categories = [];
        state.isError = true;
      })
      .addCase(fetchCities.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.cities = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.isLoading = true;
        state.cities = [];
        state.isError = true;
      })
      .addCase(fetchTypes.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTypes.fulfilled, (state, action) => {
        state.types = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTypes.rejected, (state, action) => {
        state.isLoading = true;
        state.types = [];
        state.isError = true;
      })
      .addCase(fetchTimes.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTimes.fulfilled, (state, action) => {
        state.times = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTimes.rejected, (state, action) => {
        state.isLoading = true;
        state.times = [];
        state.isError = true;
      })
  },
});

export default categoriesSlice.reducer;