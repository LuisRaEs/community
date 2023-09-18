'use client'
import Izquierda from "./Izquierda/Izquierda";
import Centro from "./Centro/Centro";
import Derecha from "./Derecha/Derecha";
import "./Main.css"

export default function Main() {
    return(

        <main>
            
            <Izquierda/>
            <Centro/>
            <Derecha/>
            {/*
            
                <div id="rc">
                    <div class="ripple"></div>
                </div>

            */}
        </main>
        
            
        
        
    )
}