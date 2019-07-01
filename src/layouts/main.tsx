import React from 'react'
import NavBar from '../modules/commons/navBar'

const Main: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>
        {children}
      </div>
    </>
  )
}

export default Main

