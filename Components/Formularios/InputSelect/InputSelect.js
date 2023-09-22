import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function InputSelect({identifier , selectedop , options, label, style, inputWidth, title, handleChange ,required}) {
    const [selected,setSelected] = useState(false) ;

    return (
        <Form.Group className="mb-3" style={style??{width:inputWidth ?? "70%",margin:"0 auto"}}>

            {label ? <Form.Label title= {title ?? ""}>{label}</Form.Label> : "" }
            <Form.Select 
                value= {selectedop ?? ""} 
                onChange={e=>{
                    setSelected(true)
                    handleChange(e)

                }} 
                id={identifier} 
                name ={identifier}
                style = {{boxShadow: selected? `0px 0px 5px 5px rgba(0,255,0,0.5)`:`0px 0px 5px 5px rgba(255,0,0,0.5)`}}>
            {options ? options.map((el,i)=>{
                if(Array.isArray(el))
                    return <option value={el[0]} key={`${identifier+i}`}>{el[1]}</option>
                else
                    return <option value={i} key={`${identifier+i}`}>{el}</option>
                }) : ""
            }
            </Form.Select>

        </Form.Group>
        
    )
}