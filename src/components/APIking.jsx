import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import King from "./King";

function APIking() {
    const [filter, setFilter] = useState("");
    const [king, getKing] = useState([])
    const kingoutput = []
    for (const k of king) {
        if (filter.length === 0 || k.nm.toLowerCase().startsWith(filter.toLowerCase()))
            kingoutput.push(
                <King
                    key={k.nm + " " + k.yrs}
                    name={k.nm}
                    country={k.cty}
                    house={k.hse}
                    years={k.yrs}
                />
            )

    }

    function kingMe() {

        axios.get("https://raw.githubusercontent.com/JHarry444/LBG-React-Demo/main/src/data/kings.json ")

            .then((response) => {
                getKing(response.data)
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
                getKing("Error, please try again");

            })


    }

    useEffect(() => {
        kingMe()
    }, [])

    return (
        <div>
            <h1>Kings(Monarchs?)</h1>
            <button onClick={() => kingMe()}> King/Monarch? </button><br />
            <input type="text" value={filter} onChange={e => setFilter(e.target.value)} />
            {kingoutput}
            <br />

        </div>

    );

}
export default APIking;