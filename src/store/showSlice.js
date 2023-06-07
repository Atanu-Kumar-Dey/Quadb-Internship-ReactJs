import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shows: [],
    showForm: false,
};

export const showSlice = createSlice({
    name: "show",
    initialState,
    reducers: {
        setShows: (state, action) => {
            state.shows = action.payload;
        },
        setShowForm: (state) => {
            state.showForm = !state.showForm;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setShows, setShowForm } = showSlice.actions;

export default showSlice.reducer;