import React, { useEffect } from 'react'

function Child() {

    useEffect(()=>{
        console.log("Child rendered")
    })
  return (
    <div>
        <h1>Child Component</h1>
    </div>
  )
}

export default React.memo(Child)
// Memo stored value in cash memory