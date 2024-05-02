import React, {useState} from 'react'

function ToggleContent() {
    const [toggle, setToggle] = useState(false)

    const toggleHandler = () => {
        setToggle(!toggle);
    }

  return (
    <div>
      <button onClick={toggleHandler}>
        {toggle ? ('Hide Content') : ('Show Content')}
      </button>
      {toggle && <h1>Showing Dynamic Rendering Data!!</h1>}
    </div>
  )
}

export default ToggleContent
