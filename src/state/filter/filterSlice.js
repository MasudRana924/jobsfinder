import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFilterJobs } from './filterApi';


export const fetchFilterJobs = createAsyncThunk(
    'jobs/fetchfilterJobs',
    async ({cities,categories}) => {
        const jobs = await getFilterJobs(cities,categories);
        return jobs;
    }
);
export const filterJobsSlice = createSlice({
    name: 'filterJobs',
    initialState:{
        filterJobs: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilterJobs.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchFilterJobs.fulfilled, (state, action) => {
                state.filterJobs = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchFilterJobs.rejected, (state, action) => {
                state.isLoading = true
                state.filterJobs = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default filterJobsSlice.reducer;