import styled from 'styled-components'
import { TranslationObject } from '@/translation'
import React from 'react'
import procedure from '/src/assets/images/Diferenciais/procedure.png'
import space from '/src/assets/images/Diferenciais/space.jpg'
import workers from '/src/assets/images/Diferenciais/workers.png'
import xray from '/src/assets/images/Diferenciais/humane.jpg'
import autoclave from '/src/assets/images/Diferenciais/autoclave.webp'
import CardItem from './components/CardItem'

const Diferenciais:React.FC<{t: TranslationObject}> = ({t}) => {

  const photos = [space, procedure, workers, xray, autoclave]

  return (
    <Container>
      <Content>
        <TitleSection>
          <Title dangerouslySetInnerHTML={{ __html: t.differentials.title }} />
          <Subtitle>{t.differentials.subtitle}</Subtitle>
        </TitleSection>
        <CardsSection>
          {t.differentials.cards.map((item, index)=>{
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

export default Diferenciais

const Container = styled.div`

@media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
  width: 100%;
}

`
const Content = styled.div`
display: flex;
flex-direction: column;
gap: 28px;
`

const TitleSection = styled.div`
display: flex;
flex-direction: column;
`
const Title = styled.h1`
font-size: ${({theme})=> theme.sizes.font.title.md};
text-align: center;

span{
  color: ${({theme})=> theme.color.font[10]};
}
`
const Subtitle = styled.p`
color: ${({theme})=> theme.color.font[60]};
font-size: ${({theme})=> theme.sizes.font.paragraph.md};
text-align: center;
`
const CardsSection = styled.div`
display: flex;
flex-direction: column;
gap: 24px;

@media (${({theme})=> theme.sizes.breakpoints.tablet}) {
  flex-direction: row;
  flex-wrap: wrap;
}
`
const ButtonSection = styled.div``