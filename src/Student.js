
function Student(props) {

    return (

        <div>
            <h4>{props.stud}</h4>
            <h5>{props.name}</h5>
            <h6>{props.college}, {props.city}</h6>
        </div>
    );
}

export default Student;