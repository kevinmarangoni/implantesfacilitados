import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'

const Button:React.FC<{children:ReactNode, text?: string}> = ({children, text}) => {
  const router = useRouter()
  const number = 5511966717274

  function handleRedirect(){
    const url = encodeURI(`https://api.whatsapp.com/send?phone=${number}&text=${text ? text : 'Olá, gostaria de mais informações para tratamento e/ou agendar uma avaliação.'}`)
    router.push(url)
  }

  return (
    <StyledButton onClick={()=>{handleRedirect()}}>{children}</StyledButton>
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