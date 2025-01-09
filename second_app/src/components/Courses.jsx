import React from "react";
import { Outlet } from "react-router-dom";

// outlet use for render children

function Courses()
{
    return (

        <div>Courses
            <div className="border border-primary">

                <Outlet/>
            </div>
        </div>
    );
}

export default Courses;