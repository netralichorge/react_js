function Teacher({teacherId,teacherName})
{
    return (

        <div className="teacher">

            <ol>
                <li>{teacherId}</li>
                <li>{teacherName}</li>
            </ol>

            <hr />
        </div>
    );

}

export default Teacher;