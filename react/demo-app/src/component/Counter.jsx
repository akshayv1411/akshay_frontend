import React, {useState} from "react";

const Counter = () => {
    const[count, setCount] = useState(0)

    return(
        <div>
        
            <h2>By Clicking On Bellow Buttons To Increment Or Decrement The Counter Values</h2>
            <h1>Counter: {count}</h1>
            <button onClick = {() => setCount(count+1)}>Increment</button>
            <button onClick = {() => setCount(count-1)}>Decrement</button>
            <button onClick = {() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;