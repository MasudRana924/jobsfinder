import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privatePost,privatePostFile } from "../../utilities/apiCaller";
const initialState={
   applyJob:[],
    isLoading:false,
    isError:false,
    error:'',
    success:false
}
export const createApplyJob=createAsyncThunk(
    'job/applyJob',async({Data,token}, { rejectWithValue })=>{

        try {
            // const bookingss = await privatePost('/user/apply/job',token, Data);
            const bookingss = await privatePostFile('/user/apply/job',token, Data);
            return bookingss;
        } catch (err) {
            return rejectWithValue(err);
        }
   
 
});
const applyJobSlice=createSlice({
    name:'applyJob',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(createApplyJob.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(createApplyJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.applyJob.push(action.payload);
                state.success=true;
            })
            .addCase(createApplyJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
           
    }
});

export default applyJobSlice.reducer; 