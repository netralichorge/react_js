import { useState } from "react";

function Counter()
{
    let [count,setCount]=useState(0);
    const increment=()=>{setCount(count+1)}
    const decrement=()=>{setCount(count-1)}

    return (

        <div>
            <button onClick={decrement}>Decrement</button>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>

    );
}

export default Counter;