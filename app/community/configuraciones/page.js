'use client'
import InputText from "@/Components/Formularios/InputText/InputText"
import InputSelect from "@/Components/Formularios/InputSelect/InputSelect"
import { useState } from "react"
import "./configuraciones.css"

export default function page() {
    let [form,setForm] = useState({
        prueba : "",
        prueba12 : ""
    })
    

  return (
    <div id="conf">
        <InputText
            identifier = "prueba"
            controlled = "true"
            label = "PRUEBA"
            title = "Varificador de title"
            state = {form}
            setState = {setForm}
            regex = {/^\d{2,3}$/}
            placeHolder = "Escriba texto"
        />
        <InputText
            identifier = "prueba12"
            label = "PRUEBA"
            title = "Varificador de title"
            state = {form}
            setState = {setForm}
            regex = {/^\d{2,3}$/}
            placeHolder = "Escriba texto"
        />


        
    </div>
  )
}



/*

            <InputText identifier = "prueba2" handleChange = {handleChange}/>


                <InputSelect
            label = "Primero"
            identifier= "miselect1"
            options = {["op1","op2", "sdcs", "sdwwrgete", "sjbfkjef"]}
            selectedop = {form.miselect1}
            handleChange = {handleChange}
        />

        <InputSelect
            identifier= "miselect2"
            options = {["op1","op2", "sdcs", "sdwwrgete", "sjbfkjef"]}
            selectedop = {form.miselect2}
            handleChange = {handleChange}
        />

        <InputSelect
            identifier= "miselect3"
            options = {[["op1","op1"],["op2","op2"], ["sdcs","sdcs"], ["sdwwrgete","sdwwrgete"], ["sjbfkjef","sjbfkjef"]]}
            selectedop = {form.miselect3}
            handleChange = {handleChange}
        />



*/