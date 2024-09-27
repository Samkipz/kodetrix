import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <p>I am the parent</p>
        {children}
    </div>
  )
}

export default layout