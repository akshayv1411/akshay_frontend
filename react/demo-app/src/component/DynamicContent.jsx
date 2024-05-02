import React from 'react'

const DynamicContent = ({isLoggedIn}) => {
    return (
      <div>
        {isLoggedIn ? (<p>Welocome Home!!</p>) : (<p>Plz Login</p>)}
        {isLoggedIn && (<p>Welocome Home!!</p>)}
      </div>
    )
}

export default DynamicContent
