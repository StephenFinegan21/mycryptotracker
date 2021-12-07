import { configureStore } from "@reduxjs/toolkit";

import { newsAPI } from "./newsAPI";

export default configureStore({
    reducer:{[newsAPI.reducerPath]: newsAPI.reducer},
})


