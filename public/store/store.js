//funcion que configura el store
import { configureStore } from "@reduxjs/toolkit";
import { sesionReducer } from "./slices/sesion/sesion";
import { postsReducer } from "./slices/posts/posts";

export default configureStore ({
    reducer: {sesionReducer,postsReducer}
})