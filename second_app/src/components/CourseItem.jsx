import React from 'react'

function CourseItem({id,name,fees}) {
  return (
    <div>
        <p>Course Id is {id}</p>
        <p>Course name is {name}</p>
        <p>Course fees {fees}</p>
    </div>
  )
}

export default CourseItem