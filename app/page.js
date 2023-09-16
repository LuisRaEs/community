'use client'
import { useSelector } from "react-redux"
import "./general.css"

export default function Root(){
    const languaje = useSelector(state=>state)
    console.log(languaje)
    return(
        <>
            <p>Login</p>
        </>
    )
}