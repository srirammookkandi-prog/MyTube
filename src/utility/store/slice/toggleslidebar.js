import { createSlice } from "@reduxjs/toolkit";

const toggleslidebar = createSlice({
    name: "sidebar",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        Togglesidebar: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        }
    }

})
export const { Togglesidebar } = toggleslidebar.actions;
export default toggleslidebar.reducer;
