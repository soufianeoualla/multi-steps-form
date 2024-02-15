import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "./stepSlice";
import planTypeSlice from "./planTypeSlice";
import packageSlice from "./packageSlice";

export const store = configureStore({
    reducer:{
        step:stepSlice,
        plan:planTypeSlice,
        package:packageSlice

    }
})