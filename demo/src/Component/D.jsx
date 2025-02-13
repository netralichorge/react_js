import React, { useContext } from 'react'
import { userContext } from './A'


function D()
{
    const {username, age} = useContext(userContext);
    return(
        <div>D {username} {age}</div>
    )
}
export default D