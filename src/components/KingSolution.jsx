import { useState } from 'react';
import kings from '../kings.json';
import King from "./King";

function KingSolution() {
    const [filter, setFilter] = useState("");
     console.log("Filter:", filter);

    const kingComponents = [];

    for (const king of kings) {
        if (filter.length === 0 || king.nm.toLowerCase().startsWith(filter.toLowerCase())) {
        kingComponents.push(
            <King
                key={king.nm + " " + king.yrs}
                country={king.cty}
                house={king.hse}
                name={king.nm}
                years={king.yrs}
            />
        )
    }}

    function handleChange(event) {
        setFilter(event.target.value)
        // onChange{e => setFilter(e.target.value)} short version goes below
    }

    return (<div>
        <h2> Kings </h2>
        <input type="text" value={filter} onChange={handleChange} />
        {kingComponents}
    </div>
    );
}

export default KingSolution;