import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    loading: false,
    error: null,
    TotalItems: null,
};

export const conditionsSlice = createSlice({
    name: "conditions",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload.results;
            state.TotalItems = action.payload.pagination.total;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state) => {
            state.loading = true;
            state.error = null;
            state.TotalItems = null;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.TotalItems = null;
        },
    }
})

export const {setData,setLoading,setError} = conditionsSlice.actions

export default conditionsSlice.reducer