'use client'

import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { sendGTMEvent } from '@next/third-parties/google'

const Button:React.FC<{children?:ReactNode, text?: string, isGoogleRelated?: boolean, $color?: string, onClickRun?: ()=>void}> = ({children, text, isGoogleRelated, $color, onClickRun}) => {
  const router = useRouter()
  const number = 551143355335

  function handleRedirect(){
    let url = ''
    url = encodeURI(`https://api.whatsapp.com/send?phone=${number}&text=${text ? text : 'Olá, gostaria de mais informações para tratamento e/ou agendar uma avaliação.'}`)
    if(isGoogleRelated){
      url = encodeURI(`https://www.google.com/maps/place/IMPLANTE+FACILITADO+I+Clínica+de+Implantes+Dentários/@-23.7179594,-46.556562,16z/data=!4m6!3m5!1s0x94ce412405cc0c59:0xc596d8b9f76ef81c!8m2!3d-23.7176145!4d-46.5570809!16s%2Fg%2F11vy_g08xj?hl=pt-BR&entry=ttu`)
    }
    router.push(url)
  }

  const handleClick = () => {
    if (onClickRun) {
      onClickRun();
      sendGTMEvent({
        event: `Botão com texto ${children ?? "Agendar consulta"} clicado. Texto de redirecionamento: ${text ?? 'Olá, gostaria de mais informações para tratamento e/ou agendar uma avaliação.'}. Relacionado ao Google Reviews?: ${isGoogleRelated? "SIM" : "NAO"}`,
        value: text ?? children?.toString()
      })
    } else {
      handleRedirect();
    }
  };

  return (
    <StyledButton $color={$color} onClick={handleClick}>{children ?? "Agendar consulta"}</StyledButton>
  )
}

export default Button

const StyledButton = styled.button<{$color: string}>`
  height: 50px;
  width: 100%;
  min-width: 50%;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  align-items: center;
  background-color: ${({$color, theme})=> $color ? $color : theme.color.font[10]};
  color: ${({theme})=> theme.color.font[30]};
  font-size: ${({theme})=> theme.sizes.font.paragraph.lg};
  font-weight: ${({theme})=> theme.sizes.weights.regular};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  
  &:hover{
    opacity: 0.6;
  }

  @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    width: 100%;
  }
`