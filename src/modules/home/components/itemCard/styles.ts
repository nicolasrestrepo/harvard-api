import styled from 'styled-components'


export const Card = styled.figure`
  background-color: 'black';
  height: 200px;
  margin: 5px 5px 5px 0;
  position: relative;
`
export const WrappImage = styled.div`
  background: #ddd;
  height: 175px;
  margin: 0 0 9px;
  width: 220px;

`

export const Image = styled.img`
  display: block;
  opacity: 1;
  transition: opacity 600ms;
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 0.5;
    cursor: zoom-in
  }
`
