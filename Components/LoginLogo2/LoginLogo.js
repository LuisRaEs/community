import "./LoginLogo.css"
import Image from "next/image"
import icon from "@/public/img/communityIcon.svg"

export default function LoginLogo() {
  return (
    <div id="loginLogo">
        <Image src={icon} width={80} height={80} alt="Logo icon" style={{backgroundColor: "rgb(62, 8, 149)",border:"solid 1px black",borderRadius:"50%", margin: "0px 20px"}}/>
        <div id="loginLogoText">
            <span id="loginLogoText">COMMUNITY</span>
        </div>
    </div>
  )
}
