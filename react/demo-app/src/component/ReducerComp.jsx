import React, { useReducer } from "react";

const initialValue = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
        return { count: state.count + 1 };
    case "DECREMENT":
        return { count: state.count - 1 };
    case "RESET":
        return { count: 0 };
    default:
      return state;
  }
};

const ReducerComp = () => {
  const [state, dipatcher] = useReducer(reducer, initialValue);
  return <div>
    <h1>Counter: {state.count}</h1>
    <button onClick={() => dipatcher({type: "INCREMENT"})}>INCREMENT</button>
    <button onClick={() => dipatcher({type: "DECREMENT"})}>DECREMENT</button>
    <button onClick={() => dipatcher({type: "RESET"})}>RESET</button>
    <button onClick={() => dipatcher({type: "NOTHING"})}>DO NOTHING</button>
  </div>
  ;
};

export default ReducerComp;
