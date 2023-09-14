
export default function Input2({id,handleChange}){
    return(
        <>
            <p>{id}</p>
            <input type= "text" onChange={(e)=>handleChange(e)}/>
        </>
    )
}