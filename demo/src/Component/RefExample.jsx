import React, { useRef } from 'react'

function RefExample() {
    const inputOne = useRef();
    const fetchData=()=>{
        

        console.log(inputOne.current)
        inputOne.current.style.color="red";

    }
    const div = useRef();
    const makeCircle=()=>{

        div.current.style.borderRadius="50%";

    }

  return (
    <div>
        <hr />
        <input type="text" ref={inputOne}/>
        <button onClick={fetchData}>Click</button>

        <div className='box' ref={div}>

        </div>

        <button onClick={makeCircle}>Make Circle</button>

    </div >
  )
}

export default RefExample