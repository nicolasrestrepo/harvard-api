import React from 'react'
import NavBar from '../modules/commons/navBar'
import styled from 'styled-components'

const Content = styled.div`
  padding: 0;
`

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

