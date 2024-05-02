import React, { useContext } from 'react'
import { DataContaxt } from './Parent'


const GrandChild = () => {
    const [data, setData] = useContext(DataContaxt);
    return (
      <div>
        <h1>{data}</h1>
        <button onClick={ () => setData (data+1) }> Increment </button>
        <button onClick={ () => setData (data-1) }> Decrement </button>
        <button onClick={ () => setData (0) }> Reset </button>
      </div>
    )
}

export default GrandChild