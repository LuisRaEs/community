import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: 'valores',
    initialState:{
        sesion: {usuario:"",contraseña:""}
    },
    reducers: {
        guardarSesion: (state,action)=>{
            state.sesion = action.payload
        }
    }
})

export const {guardarSesion} = Slice.actions;