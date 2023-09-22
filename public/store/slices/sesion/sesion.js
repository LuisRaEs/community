import { createSlice } from "@reduxjs/toolkit";
import fetchSesion from "./fetchSesion";

const sesionSlice = createSlice({
  name: "sesion",
  initialState: {
    username: "",
    idSesion: null,
    accessLevel: "",
    lang: "es",
    logged: false,
    loading: false,
    info: {},
    errors: [],
  },
  reducers: {
    changeLang: (state, action) => {
      return { ...state, lang: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSesion.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchSesion.fulfilled, (state, action) => {
      console.log(action.payload);
      let status = action.payload.status;

      if (status !== "ERROR") {
        return { ...state, loading: false, logged: true };
      } else {
        return { ...state, loading: false, logged: false };
      }
    });
    builder.addCase(fetchSesion.rejected, (state) => {
      return { ...state, logged: false };
    });
  },
});

export const { changeLang } = sesionSlice.actions;
export const sesion = sesionSlice.reducer;
