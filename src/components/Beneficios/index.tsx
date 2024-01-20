import styled from 'styled-components'
import { TranslationObject } from '@/translation'
import React from 'react'
import procedure from '/src/assets/images/beneficios/procedure.png'
import space from '/src/assets/images/beneficios/space.png'
import workers from '/src/assets/images/beneficios/workers.png'
import xray from '/src/assets/images/beneficios/xray.png'
import CardItem from './components/CardItem'

const Beneficios:React.FC<{t: TranslationObject}> = ({t}) => {

  const photos = [space, procedure, workers, xray]

  return (
    <Container>
      <Content>
        <TitleSection>
          <Title>{t.benefits.title}</Title>
          <Subtitle>{t.benefits.subtitle}</Subtitle>
        </TitleSection>
        <CardsSection>
          {t.benefits.cards.map((item, index)=>{
            return (
              <CardItem key={index} img={photos[index]} title={item.title} text={item.text} index={index} />
            )
          })

          }
        </CardsSection>
        <ButtonSection>
          
        </ButtonSection>
      </Content>
    </Container>
  )
}

export default Beneficios

const Container = styled.div`
max-width: 1000px;

@media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
  width: 100%;
  padding: 16px;
}

`
const Content = styled.div``

const TitleSection = styled.div``
const Title = styled.div``
const Subtitle = styled.div``
const CardsSection = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`
const ButtonSection = styled.div``