import { configureStore } from "@reduxjs/toolkit";
import togglereducer from "./slice/toggleslidebar"
const store = configureStore({
    reducer: {
        toggleSidebar: togglereducer,
    }

})

export default store;