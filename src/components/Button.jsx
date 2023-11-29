function Button() {
    function sayHello() {
        alert("Hello");
    }

    return (
        <div>
            {/* Named funtion */}
            <button onClick={sayHello}>Click Here!</button><br/>
            {/* Anonymous function */}
            <button onClick={function () { alert("Hello Back") }}> Click ME</button><br/>
            {/* Short function */}
            <button onClick={() => alert("Hi")}>Click MEEE</button>
        </div>
    )
}

export default Button