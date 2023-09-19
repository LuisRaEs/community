import "./NBButton.css"

export default function NBButton({icon,text}) {
  return (
    <div id="NBButton">
        {icon ? <i class={icon}></i> : ""}
        <span>{text}</span>
    </div>
  )
}
