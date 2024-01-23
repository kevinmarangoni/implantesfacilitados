import styled from 'styled-components'
import { TranslationObject } from '@/translation'
import React from 'react'
import reviews from '../../translation/reviews/lista_de_reviews.json'
import CardItem from './components/CardItem'
import Caroussel from './components/Caroussel'

const Depoimentos:React.FC<{t: TranslationObject}> = ({t}) => {

  const reviewList = reviews ?? []

  return (
    <Container>
      <Content>
        <TitleSection>
          <Title>{t.testimony.title}</Title>
          <Subtitle>{t.testimony.description}</Subtitle>
        </TitleSection>
        <CardsSection>
          <Caroussel visibleItem={3} autoPlayInterval={9000}>
            {reviewList.map((item, index)=>{
              return (
                <CardItem 
                key={index}
                avatar={item.avatar}
                stars={item.stars}
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
// const CardsList = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   gap: 24px;
// `
const ButtonSection = styled.div``
const Button = styled.div``