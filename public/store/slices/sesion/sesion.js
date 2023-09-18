import { createSlice } from "@reduxjs/toolkit";

const sesionSlice = createSlice({
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

export const {changeLang} = sesionSlice.actions;
export const sesion = sesionSlice.reducer;