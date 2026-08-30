import { configureStore } from "@reduxjs/toolkit";
import togglereducer from "./slice/toggleslidebar";
import cachereducer from './slice/Search';
const store = configureStore({
    reducer: {
        toggleSidebar: togglereducer,
        cache: cachereducer
    }

})

export default store;