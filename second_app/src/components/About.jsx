import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function About()
{
    let [searchParam,setSearchParams] = useSearchParams();
    const navigate = useNavigate() //It will return function and redirect page
    console.log(searchParam.get("age"));
    return (
        <div>
            <h1>About</h1>
            <button onClick={()=>{navigate("/")}}>Click here</button>
        </div>
    );
}

export default About;