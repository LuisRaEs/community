//funcion que configura el store
import { configureStore } from "@reduxjs/toolkit";
import { Slice } from "./slice";

export default configureStore ({
    valores: Slice.reducer
})