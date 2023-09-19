export default function AusenciasControl(){
    let nombres = ["luis","jesus", "carlos"]
    return(
        <>
            <h1>Hola munndo</h1>
            {nombres.map(el=>{return <p>{el}</p>})}
        </>
    )
}