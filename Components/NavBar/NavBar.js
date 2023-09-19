'use client'
import "./NavBar.css"
import { useEffect , useState } from "react"
import { useSelector } from "react-redux"
import es from "@/public/diccionarios/es"
import en from "@/public/diccionarios/en"
import Link from "next/link"

export default function NavBar() {
    const lang = useSelector(state=>state.sesion.lang)
    const [t,setT] = useState(es)
    const [expand, setExpand] = useState(false)

    useEffect(()=>{
        lang === "es" ? setT(()=>es) :setT(()=>en)
    },[lang])
    return (
        <div id="NBar">
            <div>
            <i class="bi bi-list"></i>
            </div>
            <div className="nbbutton">
                <Link href="#">
                    <i class="bi bi-gear"></i> { expand ? <span>{t["navbar_config"]}</span> : ""} 
                </Link>
            </div>
            <div className="nbbutton">
                <Link href="#">
                    <i class="bi bi-bell"></i> { expand ? <span>{t["navbar_notifications"]}</span> : ""}
                </Link>
            </div>
            <div className="nbbutton">
                <Link href="#">
                    <i className="bi bi-house-door"></i> { expand ? <span>{t["navbar_home"]}</span> : ""}
                </Link>
            </div>
            <div className="nbbutton">
                <Link href="#">
                    <i className="bi bi-newspaper"></i> { expand ? <span>{t["navbar_news"]}</span> : ""}
                </Link>
            </div>
            <div className="nbbutton">
                <Link href="#">
                    <i className="bi bi-bookmark-star"></i> { expand ? <span>{t["navbar_benefits"]}</span> : ""}
                </Link>
            </div>
            <div className="nbbutton">
                <Link href="#">
                    <i className="bi bi-people"></i> { expand ? <span>{t["navbar_people"]}</span> : ""}
                </Link>
            </div>
            <div className="nbbutton">
                <Link href="#">
                    <i className="bi bi-calendar2-week"></i> { expand ? <span>{t["navbar_absences"]}</span> : ""}
                </Link>
            </div>
            <div className="nbbutton">
                <Link href="#">
                    <i className="bi bi-card-list"></i> { expand ? <span>{t["navbar_surveys"]}</span> : ""}
                </Link>
            </div>
            <div className="nbbutton">
                <Link href="#">
                    <i className="bi bi-journal-plus"></i> { expand ? <span>{t["navbar_showroom"]}</span> : ""}
                </Link>
            </div>
            <div className="nbbutton">
                <Link href="#">
                    <i class="bi bi-stopwatch"></i> { expand ? <span>{t["navbar_checkin"]}</span> : ""}
                </Link>
            </div>
        </div>
    )
}
