function Header()
{
    let name="Netrali";
    let student={
        id:101,
        name:"Nisha"
    }
    return (

        <div>
        <h1>Header Component {name}</h1>
        <p>Student Id:{student.id}</p>
        <p>Student Name:{student.name}</p>

<hr />
        </div>
    );
}

export default Header;