
function Trainee(props) {
console.log("Props", props);
console.log("Name", props.name);
console.log("Surname", props.surname);
console.log("Age", props.age);

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Surname: {props.surname}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default Trainee;