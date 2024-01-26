import styled from 'styled-components'
import { TranslationObject } from '@/translation'
import React from 'react'
import Button from '../Button'

const Mapa: React.FC<{ t: TranslationObject }> = ({ t }) => {

  const locationUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14611.33676329119!2d-46.5570809!3d-23.7176145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce41adc5e289bf%3A0xc2790d572c5f0aeb!2sENDODONTIA%20FACILITADA%20%7C%20Cl%C3%ADnica%20de%20Endodontia%20Microsc%C3%B3pica!5e0!3m2!1spt-BR!2sbr!4v1706285751833!5m2!1spt-BR!2sbr"
  
  
  
  return (
    <Container>
      <Content>
        <TitleSection>
          <Title></Title>
          <Subtitle></Subtitle>
        </TitleSection>
        <InfoSection>
          <Address></Address>
        </InfoSection>
      <GoogleMap
        src={locationUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        height={500}
        style={{ border: "0" }}
        allowFullScreen={false}
      />
      <ButtonSection>
        <Button>Quero agendar agora mesmo!</Button>
      </ButtonSection>
      </Content>
    </Container>
  )
}

export default Mapa

const Container = styled.div``
const Content = styled.div``
const GoogleMap = styled.iframe`
width: 100%;
`

const TitleSection = styled.div``
const Title = styled.div``
const Subtitle = styled.div``
const InfoSection = styled.div``
const Address = styled.div``
const ButtonSection = styled.div``