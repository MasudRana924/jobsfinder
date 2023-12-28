import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // tags gula 
    cities: [],
    categories:[],
    search: "",
}

const filterSlice = createSlice({
    name: 'filterJobs',
    initialState,
    reducers: {
        citySelected: (state, action) => {
            state.cities.push(action.payload);
        },
        cityRemoved: (state, action) => {
            let indexToRemove;
             indexToRemove = state.cities.indexOf(action.payload)
            if (indexToRemove !== -1) {
                state.cities.splice(indexToRemove, 1)
            }
        },
       categorySelected: (state, action) => {
            state.categories.push(action.payload);
        },
        categoryRemoved: (state, action) => {
            let indexToRemove;
             indexToRemove = state.categories.indexOf(action.payload)
            if (indexToRemove !== -1) {
                state.categories.splice(indexToRemove, 1)
            }
        },
        searched:(state,action)=>{
            state.search=action.payload
        }
    }
});

export default filterSlice.reducer;
export const {citySelected,cityRemoved,categorySelected,categoryRemoved}=filterSlice.actions