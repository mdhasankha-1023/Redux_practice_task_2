import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../Features/Counter/countersSlice";
import postsSlice from "../Features/Posts/postsSlice";





const store = configureStore({
    reducer: {
        counters: countersReducer,
        posts: postsSlice
    }
})

export default store;



