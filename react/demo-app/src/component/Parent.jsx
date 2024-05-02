

import React, {useState} from 'react'
import Child from './Child'

export const DataContaxt = React.createContext();

const Parent = () => {

  const [data, setData] = useState(0)

  return (
    <DataContaxt.Provider value={[data, setData]}>
      <Child/>
    </DataContaxt.Provider>
  )
}

export default Parent

