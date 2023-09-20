import "@/public/bootstrap.min.css"
import NavBar from "@/Components/NavBar/NavBar"
import LanguajeSelector from "@/Components/LanguageSelector/LanguajeSelector"
export const metadata = {
    title: "Sabueso-Community"
}
export default function RootLayout({children}){
    return (
        <>
            <div style={{display:"flex",justifyContent:"end"}}>
                <LanguajeSelector/>
            </div>
            
            <NavBar/>
            {children}
        </>
    )
}