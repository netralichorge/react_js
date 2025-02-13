import React, { createContext, useState } from 'react'
import B from './B'
import E from './E'

export const userContext = createContext()
function A()
{
    const [name, setname]=useState("Nisha")
    return(
        <div>
            A
            <userContext.Provider value = {{"username":name, "age":19}}> 

            <B/>
            <E/>

            </userContext.Provider>
            
        </div>
    )
}

export default A