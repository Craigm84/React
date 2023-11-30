import { useState } from "react";
import axios from 'axios';

function CatFacts() {
    const[fact, setFact] = useState("Give me a fact!")

function getFact(){
    
    axios.get("https://catfact.ninja/fact")

    .then((response) => {
    setFact(response.data.fact)
    })
    .catch((error) => {
        console.log(error);
        setFact("Error, please try again");

    })
   
}
    return ( 
        <div>
        <h1>Cat Facts</h1>
        {fact}
        <br/>
        <button onClick={() => getFact()}> Get Fact </button>
        </div>
     );

    }
export default CatFacts;