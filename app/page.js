import "./general.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Main from "@/Components/Main/Main"
import NavBar from "@/Components/NavBar/NavBar"
import "primereact/resources/themes/lara-light-indigo/theme.css";  

export default function Root(){
return (
    <>
        <NavBar/>
        <Main/>
    </>
)
}