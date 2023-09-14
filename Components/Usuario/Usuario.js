import "./Usuario.css"
import Link from "next/link"
export default function Usuario(){
    return(
        <div id="Usuario">
            <div id="fakeimgcont">
                <div id="fakeimg">
                </div>
            </div>
            <p id="nombreCompleto">Nombre de Usuario</p>
            <p id="cargo">Cargo de Usuario</p>
            <p>X Dias de vacaciones sin solicitar</p>
            <Link href="#">Solicitar Vacaciones</Link>
        </div>
    )
}