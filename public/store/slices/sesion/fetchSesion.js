import { createAsyncThunk } from "@reduxjs/toolkit";
 import axios from "axios";
 import {setJWT} from "@/public/commons.js"
 //import { useEffect } from "react";
 //import {Usuario} from "../../public/community.js"

 const fetchSesion = createAsyncThunk('sesion/fetchSesion', async (user) => {
    let url = 'http://18.190.84.148:9091/login';
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'user': user.id,
          'pwd': user.pass
      }
    };
    try{
    let {data} = await axios.post(url, {} , axiosConfig)
    setJWT(data.Value)
    return data
    } catch(e) { console.log(e)}
})
export default fetchSesion