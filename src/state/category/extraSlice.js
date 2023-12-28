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
export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    cities: [],
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
  },
});

export default categoriesSlice.reducer;