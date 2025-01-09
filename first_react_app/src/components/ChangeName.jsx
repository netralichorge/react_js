import { useState } from "react";

function ChangeName()
{
    let [name,setName] = useState("Pooja")
    const change=()=>{
        setName("Ankita")

    }
    return (
    
        <div>
            <h1 onClick={change}>{name}</h1>
            <p>{name}</p>
            <li>{name}</li>

            <hr />
        </div>
    );
}

export default ChangeName;