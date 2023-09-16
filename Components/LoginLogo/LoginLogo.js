import "./LoginLogo.css"
import Image from "next/image"
import icon from "@/public/img/logoSabuesoCommunity.png"

export default function LoginLogo() {
  return (
    <div id="loginLogo">
        <Image src={icon} width={187} height={52} alt="Logo icon" />
    </div>
  )
}
