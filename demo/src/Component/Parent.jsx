import React, { useEffect, useState } from 'react'
import Child from './Child';

function Parent() {
    let [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Parent rendered")
    })
    
    return(

    <div>
        <h1>Parent Component</h1>
        <h1>Button clicked {count} times</h1>
        <button onClick={()=>{setCount(prev=>prev+1)}}>Click</button>
        <Child/>

    </div>
  );
}

export default Parent