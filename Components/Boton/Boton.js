
import "./Boton.css"

export default function Boton ({identifier,icon,onClick}){
    const handleClick = ()=>{

    }
    return(
        <div className="Boton" id={identifier} name={identifier} onClick={()=>onClick()}>
            {icon ? icon : ""}
            <p>{identifier}</p>
        </div>
    )
}