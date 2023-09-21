'use client'
import InputText from "@/Components/Formularios/InputText/InputText"
import InputSelect from "@/Components/Formularios/InputSelect/InputSelect"
import { useState } from "react"
import "./configuraciones.css"

export default function page() {
    let [form,setForm] = useState({})
    const handleChange = (e)=>{
        setForm(state=>{return{...state,[e.target.name]:e.target.value}})
        console.log(form)
    }

  return (
    <div id="conf">
        <InputText
            identifier = "prueba"
            label = "PRUEBA"
            handleChange = {handleChange}
            regex = {/^\d{2,3}$/}
            placeHolder = "Escriba texto"
            value = {form.prueba}
            title = "Varificador de title"
        />

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
    </div>
  )
}