'use client'
import { useSelector } from "react-redux"
import Image from "next/image"
import bg from "@/public/img/bgLogin.jpg"
import "@/public/bootstrap.min.css"
import LoginContainer from "@/Components/LoginContainer/LoginContainer"
import "./general.css"

export default function Root(){
    const languaje = useSelector(state=>state.sesion.lang)
    return(
        <div id="loginPage">
            <Image src={bg} alt="Imagen de fondo" fill={true} priority={true}/>
            <LoginContainer/>
        </div>
    )
}