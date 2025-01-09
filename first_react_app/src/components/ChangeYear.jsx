import { useState } from "react"

function ChangeYear()
{
    let [year,setYear] = useState(2024);
    const change=()=>{
        setYear(2025)
    }

    return(

        <div>
            <h1 onClick={change}>{year}</h1>
        </div>
    )
}

export default ChangeYear;