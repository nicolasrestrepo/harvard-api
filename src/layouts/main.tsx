import React from 'react'
import NavBar from '../modules/commons/navBar'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`;

const Main: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      {children}
    </Wrapper>
  )
}

export default Main

