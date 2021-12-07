import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "./cryptoApi";
import { newsAPI } from "./newsAPI";

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [newsAPI.reducerPath]: newsAPI.reducer
    },
})


