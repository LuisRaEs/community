'use client'
import "./Publicacion.css"
import Boton from "../Boton/Boton"
import { Button } from 'primereact/button';  

export default function Publicacion(){
    const guardar= ()=>{
        alert("Se guardo el comentario")
    }
    return(
        <div id="Publicacion">
            <div id="imgcont">
                <div id ="imgg">

                </div>
            </div>
            <p>100 Likes</p>
            <input id="newComment" type="text-area"/>
            <Boton 
                identifier="guardar"
                onClick={guardar}
            />
            <Button label="Add +" severity="info" onClick={()=>{alert("Agregamos info")}}/>
        </div>
    )
}