import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cache: (state, actions) => {
            state = Object.assign(state, actions.payload)
        }
    }
})

export const { cache } = search.actions;
export default search.reducer;