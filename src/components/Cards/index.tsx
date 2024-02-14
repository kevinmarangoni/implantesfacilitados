import styled, { useTheme } from 'styled-components'
import { TranslationObject } from '@/translation'
import React from 'react'
import Button from '../Button'
import UrgencyCrossIcon from '@/assets/icons/urgencyCross'
import CreditCardIcon from '@/assets/icons/creditcards'
import ParkIcon from '@/assets/icons/park'

const Cards: React.FC<{ t: TranslationObject }> = ({ t }) => {
  const { color } = useTheme()
  return (
    <Container>
      <Content>
        <CardItem>
          <UrgencyCrossIcon color={color.font[60]} />
          <Text>
            <h3>{t.cards.urgency.title}</h3>
            <h4>{t.cards.urgency.subtitle}</h4>
          </Text>
        </CardItem>
        <CardItem>
        <CreditCardIcon color={color.font[60]} />
          <Text>
            <h3>{t.cards.creditCard.title}</h3>
            <h4>{t.cards.creditCard.subtitle}</h4>
          </Text>
        </CardItem>
        <CardItem>
        <ParkIcon color={color.font[60]} />
          <Text>
            <h3>{t.cards.park.title}</h3>
            <h4>{t.cards.park.subtitle}</h4>
          </Text>
        </CardItem>
      </Content>
    </Container>
  )
}

export default Cards

const Container = styled.div`
padding: 32px;
width: 100%;
background-color: ${({theme})=> theme.color.background[30]};
border-radius: 20px;
`
const Content = styled.div`
  display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
gap: 32px;
@media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
  flex-direction: column;
  }
`

const CardItem = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;

div{
  height: 50px;
  width: 40px;
}

@media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
  flex-direction: column;
  }

`
const Text = styled.article`
display: flex;
flex-direction: column;

h3{
  color: ${({theme})=> theme.color.font[10]};
  font-size: ${({theme})=> theme.sizes.font.paragraph.sm};
  font-weight: ${({theme})=> theme.sizes.weights.bold};
}

h4{
  font-size: ${({theme})=> theme.sizes.font.paragraph.xl};
  font-weight: ${({theme})=> theme.sizes.weights.bold};
}

@media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
    text-align: center;
  }

`