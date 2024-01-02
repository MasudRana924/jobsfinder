import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../utilities/apiCaller';


export const fetchAdeminJobs = createAsyncThunk(
    'fetch/fetchAdeminJobs ',
    async ({token}, { rejectWithValue }) => {
        const jobs = await privateGet('/user/admin/get/all',token);
        return jobs;
    }
);

export const adminJobsSlice = createSlice({
    name: 'Admin Job',
    initialState:{
        allJobs:[],
        isLoading: false,
      
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdeminJobs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAdeminJobs.fulfilled, (state, action) => {
                state.allJobs = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchAdeminJobs.rejected, (state, action) => {
                state.isLoading = true
                state.allJobs = [];
               
            })
           
    }
});

export default adminJobsSlice.reducer;