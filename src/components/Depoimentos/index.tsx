import styled from 'styled-components'
import { TranslationObject } from '@/translation'
import React, { useEffect, useState } from 'react'
import reviews from '../../translation/reviews/lista_de_reviews.json'
import CardItem from './components/CardItem'
import Caroussel from './components/Caroussel'
import { useWindowSize } from 'usehooks-ts'
import Button from '../Button'

const Depoimentos:React.FC<{id:string, t: TranslationObject}> = ({id, t}) => {
  const [viewport, setViewport] = useState(1)
  const reviewList = reviews ?? []

  const {width} = useWindowSize()

  const viewports = {
    desktop: 1000,
    tablet: 500,
  }

  function setViewportDisplay(){
    if(width > viewports.desktop){
      setViewport(3)
    }
    if(width > viewports.tablet && width <= viewports.desktop){
      setViewport(2)
    }
    if(width < viewports.tablet){
      setViewport(1)
    }
  }

  useEffect(()=>{
    setViewportDisplay()
  },[width])

  return (
    <Container id={id}>
      <Content>
        <TitleSection>
          <Title>{t.testimony.title}</Title>
          <Subtitle>{t.testimony.description}</Subtitle>
        </TitleSection>
        <CardsSection>
          <Caroussel visibleItem={viewport}>
            {reviewList.map((item, index)=>{
              return (
                <CardItem 
                key={index}
                avatar={item.avatar}
                star={item.stars}
                name={item.name}
                text={item.text}
                />
              )
            })
            }
          </Caroussel>
        </CardsSection>
        <ButtonSection>
          <Button></Button>
          <Button isGoogleRelated>{t.testimony.button}</Button>
        </ButtonSection>
      </Content>
    </Container>
  )
}

export default Depoimentos

const Container = styled.div`
width: 100%;
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
color: ${({theme})=> theme.color.font[10]};
`
const Subtitle = styled.p`
color: ${({theme})=> theme.color.font[60]};
font-size: ${({theme})=> theme.sizes.font.paragraph.md};
text-align: center;
`
const CardsSection = styled.div`
width: 100%;
`
const ButtonSection = styled.div`
display: flex;
flex-direction: row;
gap: 24px;

@media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
  flex-direction: column;
  flex-wrap: wrap;
}

`