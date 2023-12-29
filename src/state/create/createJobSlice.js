import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privatePost } from "../../utilities/apiCaller";

const initialState={
   uploadJob:[],
    isLoading:false,
    isError:false,
    error:'',
    success:false
}
export const createUploadJob=createAsyncThunk(
    'job/uploadJob',async({Data,token}, { rejectWithValue })=>{

        try {
            const jobs = await privatePost('/job/create/new',token, Data);
            return jobs;
        } catch (err) {
            return rejectWithValue(err);
        }
   
 
});
const uploadedJobSlice=createSlice({
    name:'uploadJob',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(createUploadJob.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(createUploadJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.uploadJob.push(action.payload);
                state.success=true;
            })
            .addCase(createUploadJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
           
    }
});

export default uploadedJobSlice.reducer; 