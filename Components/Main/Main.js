'use client'
import Izquierda from "./Izquierda/Izquierda";
import Centro from "./Centro/Centro";
import Derecha from "./Derecha/Derecha";
import axios from "axios";
import { useEffect } from "react";
import "./Main.css"
import {Usuario} from "../../public/community.js"
import {setJWT} from "@/public/commons.js"

export default function Main() {
    
    let url = 'http://18.190.84.148:9091/login';
    let postData = {
    };
    
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'user': "admin",
          'pwd': "1234" 
          //"Access-Control-Allow-Origin": "*",
      }
    };

    useEffect(()=>{
        console.log("enviando request");
        const peticion = async ()=>{ 
            let {data} = await axios.post(url, {} , axiosConfig)
            setJWT(data.Value)
            console.log(data)
        }
        peticion()
        console.log(Usuario.buscar({qwery:""}))
    })
    
    return(

        <main>
            
            <Izquierda/>
            <Centro/>
            <Derecha/>
            {/*
            
                <div id="rc">
                    <div class="ripple"></div>
                </div>

            */}
        </main>
        
            
        
        
    )
}