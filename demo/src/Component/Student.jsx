import React, { useReducer } from 'react'


function Student() {

    const reduce = (prevData, newData) => {
        console.log("Prev", prevData, "new", newData)
        return { ...prevData, ...newData }
    }


    const studentData = { studentname: " ", email: " " }
    const [data, setData] = useReducer(reduce, { ...studentData })

    const handleStudentName = (e) => {

        setData({ studentname: e.target.value })
        console.log(data);

    }


    const handleEmail = (e) => {

        setData({ email: e.target.value })
        console.log(data);

    }


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("data submitted successfully", data)

    }




        return (

            <div>
                <form >

                    <label htmlFor="">Enter Name:</label>
                    <input type="text" name='studentname' value={data.studentname}
                        onChange={handleStudentName} />

                        <br/>

                    <label htmlFor="">Enter EmailId :</label>
                    <input type="text" name='email' value={data.email}
                        onChange={handleEmail} />

                    <br />

                    <input type="submit" onClick={submitHandler}/>
                </form>
            </div>
        )

    }

    export default Student;