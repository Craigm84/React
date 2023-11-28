

import PropTypes from "prop-types";

function Trainer(props) {
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

Trainer.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
    age: PropTypes.number,
}

export default Trainer;