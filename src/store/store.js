import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/userSlices";

export default configureStore({
    reducer: {
        user: userSlice,
    },
});