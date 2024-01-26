import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Button:React.FC<{onClick?:()=>void, children:ReactNode}> = ({onClick, children}) => {
  return (
    <StyledButton onClick={()=>{onClick}}>{children}</StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  height: 50px;
  width: 100%;
  min-width: 50%;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=> theme.color.font[10]};
  color: ${({theme})=> theme.color.font[30]};
  font-size: ${({theme})=> theme.sizes.font.paragraph.lg};
  font-weight: ${({theme})=> theme.sizes.weights.regular};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    width: 100%;
  }
`