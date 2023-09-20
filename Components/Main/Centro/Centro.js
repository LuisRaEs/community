'use client'
import { useEffect } from "react"
import "./Centro.css"
import Publicacion from "@/Components/Publicacion/Publicacion"
import {Usuario} from "@/public/community.js"
import InputPost from "@/Components/InputPost/InputPost"

export default function Centro(){
    var usuarios;
    useEffect(()=>{
        const cons = async()=>{
            let res = await Usuario.buscar({qwery:""})
            usuarios = res.Value
        }
        cons()
    },[])
    return(
        <div id="Centro">
            <InputPost/>
            <Publicacion/>
        </div>
    )
}