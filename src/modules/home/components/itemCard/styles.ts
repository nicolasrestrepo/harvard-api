import styled from 'styled-components'


export const Card = styled.figure`
  background-color: 'black';
  height: 200px;
  position: relative;
`
export const WrappImage = styled.div`
  background: #fff;
  height: 275px;
  margin: 10px;
  width: 350px;
  padding: 20px;
`

export const Image = styled.img`
  display: block;
  opacity: 1;
  transition: opacity 2s ease-in;
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 0.5;
    cursor: zoom-in
  }
`
