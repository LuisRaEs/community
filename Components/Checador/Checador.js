'use client';
import Boton from "@/Components/Boton/Boton"
import "./Checador.css"
import { useEffect, useState } from "react";
import Input2 from "../Input/Input";

export default function Checador(){

    const [reloj,setReloj] = useState("--:--:--")
    useEffect(() => {
        const interval = setInterval(() => {
        let now  = new Date();
        
          setReloj(()=>{
            let hours = now.getHours(), minutes = now.getMinutes(), seconds = now.getSeconds()
            if(String(hours).length==1)
                hours = `0${hours}`
            if(String(minutes).length==1)
                minutes = `0${minutes}`
            if(String(seconds).length==1)
                seconds = `0${seconds}`
            return`${hours}:${minutes}:${seconds}`
        })
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    
    const handleChange = (e)=>
    {
        console.log(e.target.value)
    }

    const UnMinuto = 60 * 1000;
    const UnaHora = 60 * UnMinuto;
    const jornada = 8 * UnaHora;

    const [restante,setRestante] = useState(`Timpo restante: 8 hrs 00 min.`);
    useEffect(() => {
        const getTiempoRestante = ()=>{
            const checkIn = new Date("2023-09-19 12:35:00");
            const current = new Date()
            const diffTime = current.getTime() - checkIn.getTime();
            const horasFaltantes = Math.floor((jornada - diffTime) / UnaHora);
            const minutosFaltantes = Math.floor(((jornada - diffTime) % UnaHora)/UnMinuto);
            setRestante(`Timpo restante: ${horasFaltantes<0?0:horasFaltantes} hrs ${minutosFaltantes<0?0:minutosFaltantes} min.`)
        };

        getTiempoRestante();
        const checker = setInterval( ()=>{ getTiempoRestante(); }, UnMinuto );
        return () => clearInterval(checker);
    }, []);

    const iniciar = () => {
        console.log("Inicie")
    }
    const finalizar = () => {
        console.log("Finalice")
    }
    
    return(
        <div id="Checador">
            <div className="titulo">
                <h1>CHECADOR</h1>
            </div>
            <div id="reloj">
                <p>{reloj}</p>
            </div>
            <div id="horasRestantes">
                <p>{restante}</p>
            </div>
            <div id="botones">
                <Boton
                    identifier ="iniciar"
                    text = "INICIAR"
                    handleClick = {iniciar}
                    icon = {<i className="bi bi-play-circle"></i>}
                    
                />
                <Boton
                    identifier = "finalizar"
                    text = "FINALIZAR"
                    handleClick = {finalizar}
                    icon = {<i className="bi bi-pause-circle"></i>}
                />

            </div>
            
        </div>
    )
}