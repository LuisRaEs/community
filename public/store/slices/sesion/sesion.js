import { createSlice } from "@reduxjs/toolkit";

const sesion = createSlice({
    name: 'sesion',
    initialState:{
        username:"",
        idSesion:null,
        accessLevel:"",
        lang:"es"
    },
    reducers: {
        changeLang:(state,action)=>{
            return {...state,lang:action.payload}
        }
    }
})

export const {changeLang} = sesion.actions;
export const sesionReducer = sesion.reducer;