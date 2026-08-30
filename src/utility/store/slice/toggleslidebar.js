import { createSlice } from "@reduxjs/toolkit";

const toggleslidebar = createSlice({
    name: "sidebar",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        Togglesidebar: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        Closesidebar: (state) => {
            state.isMenuOpen = false;
        }
    }

})
export const { Togglesidebar, Closesidebar } = toggleslidebar.actions;
export default toggleslidebar.reducer;
