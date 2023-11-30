import axios from "axios";
import { useState } from 'react';


function Pokemon() {
const[poke, getPoke] = useState("Pokemon")

function findPoke(){

    axios.get("http://pokeapi.co/api/v2/pokemon")
    .then((response) => 
    {getPoke(JSON.stringify(response.data))});

    const pokeName = [];
}

return (
    <div>
        <h1>Pokemon</h1>
        {poke}
        <br/>
        <button onClick={() => findPoke()}> Catch em' all </button>
        </div>
)}

export default Pokemon;
