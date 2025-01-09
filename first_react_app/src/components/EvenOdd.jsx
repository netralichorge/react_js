import { useEffect, useState } from "react";

function EvenOdd()
{
    
    let [inputValue,setInputValue]=useState(1)

    let [answer,setAnswer]=useState("odd")

    useEffect(()=>{
        let v=parseInt(inputValue);
        if(v%2==0)
        {
            setAnswer("even")
        }
            
        else
        {
            setAnswer("odd")
        }
       // console.log("EvenOdd")
    },[inputValue])

    return (
        <div>
            <hr />
            <input type="number" value={inputValue} 
            onChange={(e)=>{
                setInputValue(e.target.value);

                //console.log(inputValue);

            }} />
            <h1>{answer}</h1>

            <hr />
        </div>
    );
}

export default EvenOdd;