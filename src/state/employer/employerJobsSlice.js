import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet} from '../../utilities/apiCaller';

export const fetchEmployerPendingJobs = createAsyncThunk(
    'fetch/EmployerPendingJobs ',
    async ({token}, { rejectWithValue }) => {
        const jobs = await privateGet('/user/pending/job',token);
        return jobs;
    }
);
export const fetchEmployerApprovedJobs = createAsyncThunk(
    'fetch/EmployerApprovedJobs ',
    async ({token}, { rejectWithValue }) => {
        const jobs = await privateGet('/user/approved/job',token);
        return jobs;
    }
);

export const fetchEmployerAllJobs = createAsyncThunk(
    'fetch/EmployerAllJobs ',
    async ({token}, { rejectWithValue }) => {
        const jobs = await privateGet('/user/upload/job',token);
        return jobs;
    }
);
export const employerPendingJobsSlice = createSlice({
    name: 'employerPendingJobs',
    initialState:{
        employerJobs: [],
        approvedJobs:[],
        allJobs:[],
        isLoading: false,
      
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployerPendingJobs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchEmployerPendingJobs.fulfilled, (state, action) => {
                state.employerJobs = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchEmployerPendingJobs.rejected, (state, action) => {
                state.isLoading = true
                state.employerJobs = [];
               
            })
            .addCase(fetchEmployerApprovedJobs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchEmployerApprovedJobs.fulfilled, (state, action) => {
                state.approvedJobs = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchEmployerApprovedJobs.rejected, (state, action) => {
                state.isLoading = true
                state.approvedJobs = [];
               
            })
            .addCase(fetchEmployerAllJobs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchEmployerAllJobs.fulfilled, (state, action) => {
                state.allJobs = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchEmployerAllJobs.rejected, (state, action) => {
                state.isLoading = true
                state.allJobs = [];
               
            })
    }
});

export default employerPendingJobsSlice.reducer;