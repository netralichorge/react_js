import React, { useReducer } from 'react'

function FormExample() {

    const reduce=(prevData,newData)=>{

        return {...prevData,...newData}

    }


    const initialData={username:"XYZ",age:18}
    const[data,setData] = useReducer(reduce,{...initialData})
    const handleName=(e)=>{

        setData({username:e.target.value})
        console.log(data);

    }

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("data submitted successfully",data)
    }

    const handleAge=(e)=>{

        setData({age:e.target.value})
        console.log(data);

    }


  return (
    <div>
        <form >
            <label htmlFor="">Enter Name: </label>
            <input type="text" name='username' value={data.username}
            onChange={handleName} />

            <br />

            <label htmlFor="">Enter Age: </label>
            <input type="number" name='age' value={data.age}
            onChange={handleAge}/>

            <br />

            <input type="submit" onClick={submitHandler}/>
        </form>
    </div>
  )
}

export default FormExample