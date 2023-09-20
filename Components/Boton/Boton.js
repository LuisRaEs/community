
import "./Boton.css"

export default function Boton ({identifier,icon,handleClick,text}){
    return(
        <button  
            className="btn btn-lg btn-primary" 
            style={{width:"70%",margin:"0 auto"}}
            type="button"
            id={identifier}
            onClick={()=>handleClick()}>
            {icon ?? ""}
            {text ?? "Texto"}
        </button>
    )
}