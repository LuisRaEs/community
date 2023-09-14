import Checador from "@/Components/Checador/Checador"
import Usuario from "@/Components/Usuario/Usuario"
import "./Izquierda.css"

export default function Izquierda(){
    return(
        <div id="Izquierda">
            <Usuario/>
            <Checador/>
        </div>
    )
}