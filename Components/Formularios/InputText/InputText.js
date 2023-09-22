import "./InputText.css"
import { useDispatch } from "react-redux"
import { useState , useEffect} from "react"
import { Form } from "react-bootstrap"
import { addError , removeError } from "@/public/store/slices/sesion/sesion"


/* 

Recibe como atributos:
    *identifier
    label
    placeHolder
    *handleChange           -> en caso de usar regex
    inputWidth              
    style
    *value                  -> en caso de usar regex   
    regex
    title

    *campos obllicatorios


Ejemplo de llamado
export default function MiComponente(){                                         -> Nuevo componente en el cual se va a agregar el InputText
    let [state,setState] = useState({})                                         -> Estado
    const handleChange = (e)=>{                                                 -> Manejador de cambio de estado, debe guardar el identificador como "key" y el texto introducido como "Value"
        setState(state=>{return{...state,[e.target.name]:e.target.value}})
    }
    return (
        <InputText                                                              -> Llamado al componente InputText
            identifier = "prueba"                                               -> Identificador unico (id)
            label = "PRUEBA"                                                    -> Texto para identificar el proposito del campo 
            handleChange = {handleChange}                                       -> Modifica el estado en el componente que es llamado
            regex = {/^\d{2,3}$/}                                               -> Regex a ser evaluado
            placeHolder = "Escriba texto"                                       -> Texto a poner como placeholder
            value = {state.prueba}                                              -> Desplega en el input el valor guardado en el estado
            title = "Varificador de title"                                      -> Informacion que debe conocer el usuario sobre el campo (aparece colocandoce encima del label)
        />
    )
}
*/


export default function InputText({identifier,label,placeHolder,handleChange,inputWidth,style,value,regex, title}) {
    const [pass,setPass] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!regex)
            setPass(true)
        else
            dispatch(addError(identifier))
        return ()=>{
            dispatch(removeError(identifier))
        }
    },[])
    return(
    <Form.Group className="mb-3" style={style??{width:inputWidth ?? "70%",margin:"0 auto"}}>

        {label ? <Form.Label title= {title ?? ""}>{label}</Form.Label> : "" }
        <Form.Control 
            id = {identifier} 
            name = {identifier}
            type = "text" 
            placeholder = {placeHolder ?? ""}
            value = {value ?? undefined}
            onChange = {e=>{
                if (handleChange)
                    handleChange(e)
                if(regex)
                {
                    if(regex.test(e.target.value))
                    {
                        setPass(true)
                        dispatch(removeError(identifier))
                    }
                    else
                    {
                        setPass(false)
                        dispatch(addError(identifier))
                    }
                }
                else
                    setPass(true)
            }}
            
            style = {{boxShadow: `0px 0px 5px 5px  ${pass ? "rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)"}`}}
        />
    </Form.Group>
  )
}