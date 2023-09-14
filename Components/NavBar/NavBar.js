import "./NavBar.css"
import Menu from "../Menu/Menu"
import MenuSuperior from "../MenuSuperior/MenuSuperior"

export default function NavBar(){
    return(
        <nav>
            <MenuSuperior/>
            <Menu/>
        </nav>
    )
}