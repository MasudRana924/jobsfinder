import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { publicGetSingle } from '../../utilities/apiCaller';


const initialState = {
    job:{},
    count:{},
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchJobDetails = createAsyncThunk(
    'job/fetchJobDetails',
    async (id) => {
        const job = await publicGetSingle(`/job/get/${id}`);
        return job
    }
);
export const fetchJobApplyCount = createAsyncThunk(
    'job/fetchJobApplyCount',
    async (id) => {
        const job = await publicGetSingle(`/job/total/applyno/${id}`);
        return job
    }
);
export const jobDetailsSlice = createSlice({
    name: 'job',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchJobDetails.pending,(state)=>{
            state.isError=false;
          state.isLoading=true
        })
        .addCase(fetchJobDetails.fulfilled,(state,action)=>{
          state.isLoading=false
          state.job=action.payload;
        })
        .addCase(fetchJobDetails.rejected,(state,action)=>{
            state.isLoading=false
            state.job={};
            state.isError=true;
            state.error=action.error?.message;
        })
        .addCase(fetchJobApplyCount.pending,(state)=>{
            state.isError=false;
          state.isLoading=true
        })
        .addCase(fetchJobApplyCount.fulfilled,(state,action)=>{
          state.isLoading=false
          state.count=action.payload;
        })
        .addCase(fetchJobApplyCount.rejected,(state,action)=>{
            state.isLoading=false
            state.count={};
            state.isError=true;
            state.error=action.error?.message;
        })
    }
});

export default jobDetailsSlice.reducer;