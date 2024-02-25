'use client'

import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { sendGTMEvent } from '@next/third-parties/google'

const Button:React.FC<{children?:ReactNode, text?: string, isGoogleRelated?: boolean, $color?: string, onClickRun?: ()=>void}> = ({children, text, isGoogleRelated, $color, onClickRun}) => {
  const router = useRouter()
  const number = 5511966717274

  function handleRedirect(){
    let url = ''
    url = encodeURI(`https://api.whatsapp.com/send?phone=${number}&text=${text ? text : 'Olá, gostaria de mais informações para tratamento e/ou agendar uma avaliação.'}`)
    if(isGoogleRelated){
      url = encodeURI(`https://www.google.com/maps/place/ENDODONTIA+FACILITADA+%7C+Clínica+de+Endodontia+Microscópica/@-23.7176145,-46.5570809,17z/data=!4m8!3m7!1s0x94ce41adc5e289bf:0xc2790d572c5f0aeb!8m2!3d-23.7176145!4d-46.5570809!9m1!1b1!16s%2Fg%2F11s85x37wk?entry=ttu`)
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