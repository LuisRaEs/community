'use client'
import "./LoginContainer.css"
import { useEffect , useState } from "react"
import { useSelector } from "react-redux"
import en from "@/public/diccionarios/en.js"
import es from "@/public/diccionarios/es.js"
import LoginLogo from "../LoginLogo/LoginLogo"
import Input from "../Input/Input"
import LanguajeSelector from "../LanguageSelector/LanguajeSelector"

export default function LoginContainer() {
    let lang = useSelector(state=>state.sesion.lang)
    let [t,setT] = useState(es)
    useEffect(()=>{
        lang === "es" ? setT(()=>es) : setT(()=>en)
    },[lang])

    return (
        <div id="loginContainer">
            <LanguajeSelector/>
            <LoginLogo/>
            <div id="loginInputsContainer">
                <Input
                    id="userInput"
                    label= {t["login_loginContainer_userInputIndicator"]}
                    type="text"
                    handleChange=""
                    inputWidth="70%"
                />
                <Input
                    id="passwordInput"
                    label= {t["login_loginContainer_passwordInputIndicator"]}
                    type="text"
                    handleChange=""
                    inputWidth="70%"
                />
            </div>
        </div>
    )
}
